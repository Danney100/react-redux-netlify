import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {List} from 'immutable'
import {useDispatch, useSelector} from 'react-redux'
import {setCustomerToDisplay} from 'duck/actions/customer'
import MoonLoader from 'react-spinners/MoonLoader'

import {Card} from 'components'
import SearchCriteria from './Customers/components/SearchCriteria/index'
import SearchResults from './Customers/components/SearchResult/index'
import {showErrorNotification, generateQuery} from 'helpers/util'
import {searchCustomers} from 'api'
import CustomerSearch from './Customers/components/CustomerSearch/index'
import ScrollingMenu from 'routes/CustomerCenter/Customers/components/Navs/components/ScrollingMenu'
import {makeStyles} from '@material-ui/core/styles'
import {scBase} from 'styles/sc-jss-components/_variables'
import {cssTable, tableActionBtns} from 'styles/sc-jss-components'
import {customerOptions} from './Customers/components/SearchCriteria/options'

export const CustomerCenter = () => {
  const scVar = scBase()
  const useStyles = makeStyles(
    {
      root: {
        ...cssTable(),
        ...tableActionBtns(),
        '& .table td': {
          verticalAlign: 'baseline !important',
        },
        '& .sc-btn-action-wrapper': {
          width: `calc(140 / ${scVar.fontBase} * 1em)`,
        },
      },
    },
    {
      name: 'scCustomerCenter',
    },
  )

  const classes = useStyles()

  const user = useSelector(({user}) => user)
  const customerId = useSelector(({customer}) => customer.get('customerToDisplay'))

  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(true)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [isSearchingDetail, setIsSearchingDetail] = useState(true)
  const [filters, setFilters] = useState(List())
  const [searchResults, setSearchResults] = useState([])

  const handleApplyFilter = (data) => {
    const [option] = customerOptions.filter((option) => option['value'] === data.field)
    setFilters(filters.push({id: Date.now(), ...data, label: option['label']}))
  }

  const clearFilter = (id) => {
    let index = filters.findIndex((filter) => filter.id === id)
    const temp = filters.remove(index)
    setFilters(temp)
  }

  const resetFilters = () => {
    setFilters(List())
  }

  const handleSearch = () => {
    console.log('handleSearch -> filters', filters)
    let query = filters.size ? generateQuery(filters.toJS()) : null
    const token = user.get('token')
    const payload = {
      data: {},
      token: token,
    }
    if (query) payload.data.query = query['query']
    setIsOpen(true)
    setIsSearching(true)
    searchCustomers(payload)
      .then((res) => {
        if (!res?.hasError) {
          setSearchResults(res.hits['hits'])
          dispatch(setCustomerToDisplay(''))
        } else {
          console.log(res)
          setSearchResults([])
          showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsOpen(false)
        setIsSearching(false)
      })
  }

  return (
    <div className={`${classes.root} pb-4`}>
      <SearchCriteria
        register={register}
        applyFilter={handleApplyFilter}
        handleSubmit={handleSubmit}
        filters={filters.toJS()}
        clearFilter={clearFilter}
        resetFilters={resetFilters}
        handleSearch={handleSearch}
      />
      <div className="d-flex justify-content-center">
        <MoonLoader size={75} color={'#de8b6d'} loading={isOpen && isSearching} />
      </div>
      {!isSearching && (
        <>
          <SearchResults searchResults={searchResults} />
          <>
            <CustomerSearch />
            <Card
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={`${isOpenDetail && isSearchingDetail && 'sc-loading'} mt-4`}>
              <div className="sc-loading__icon-wrapper">
                <MoonLoader
                  size={32}
                  color={'#de8b6d'}
                  loading={isOpenDetail && isSearchingDetail}
                />
              </div>
              <ScrollingMenu />
            </Card>
          </>
        </>
      )}
    </div>
  )
}

export default CustomerCenter
