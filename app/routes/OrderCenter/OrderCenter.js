import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import ViewOrder from './Order/ViewOrder'
import SearchCriteria from './Order/SearchCriteria'
import Results from './Order/Result'
import {searchOrder} from 'api'
import {setOrderSearchStatus} from 'duck/actions/order'
import {setOrderToDisplay} from 'duck/actions/order'
import {List} from 'immutable'
import {generateQuery} from 'helpers/util'

export const OrderCenter = (props) => {
  const {isSearching} = props.order
  const token = props.user.get('token')
  const {register, handleSubmit} = useForm()
  const [isShow, setIsShow] = useState(false)
  const [searchResults, setSearchResults] = useState()
  const [filters, setFilters] = useState(List())
  const [form, setForm] = useState({
    field: '',
    operator: '',
    value: '',
  })
  const dispatch = useDispatch()
  const handleApplyFilter = (data) => {
    setFilters(filters.push({id: Date.now(), ...data}))
  }
  const clearFilter = (id) => {
    let index = filters.findIndex((filter) => filter.id === id)
    const temp = filters.remove(index)
    setFilters(temp)
  }
  const resetFilters = () => {
    setFilters(List())
  }
  const handleOrderSearch = () => {
    const query = filters.size ? generateQuery(filters.toJS()) : null
    setIsShow(false)
    dispatch(setOrderSearchStatus(true))
    const payload = {
      query: query,
      token: token,
    }
    searchOrder(payload)
      .then((res) => {
        if (!res?.hasError) {
          setSearchResults(res.hits['hits'])
          dispatch(setOrderToDisplay(res.hits['hits'][0]['_source']['id']))
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setOrderSearchStatus(false))
        setIsShow(true)
      })
  }

  return (
    <div>
      <SearchCriteria
        register={register}
        applyFilter={handleApplyFilter}
        handleSubmit={handleSubmit}
        filters={filters.toJS()}
        clearFilter={clearFilter}
        resetFilters={resetFilters}
        form={form}
        setForm={setForm}
        handleOrderSearch={handleOrderSearch}
      />
      {isShow && !isSearching ? (
        <>
          <Results searchResults={searchResults} />
          <ViewOrder />
        </>
      ) : null}
    </div>
  )
}

OrderCenter.propTypes = {
  order: PropTypes.object,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

export default connect(mapStateToProps)(OrderCenter)
