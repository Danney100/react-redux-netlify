import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {List} from 'immutable'
import PropTypes from 'prop-types'
import {connect, useSelector, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import SearchCriteria from './Consultant/SearchCriteria/index'
import SearchResults from './Consultant/SearchResult/index'
import {generateQuery} from 'helpers/util'
import {searchConsultants} from 'api'
import {setConsultantToDisplay} from 'duck/actions/consultant'
import ConsultantSearch from './Consultant/ConsultantSearch'
import {Card} from 'reactstrap'
import ScrollingMenu from './ConsultantNotes/components/ScrollingMenu'
import {makeStyles} from '@material-ui/core/styles'
import { scBase } from 'styles/sc-jss-components/_variables'
import {
  cssTable,
  tableActionBtns,
} from 'styles/sc-jss-components'
import {consultantOptions} from './Consultant/SearchCriteria/options'

export const ConsultantCenter = ({user}) => {
  const scVar = scBase()
  const useStyles = makeStyles({
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
    name: 'scConsultantCenter',
  })

  const classes = useStyles()
  const consultantId = useSelector(({consultant}) => consultant.get('consultantToDisplay'))
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(true)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [isSearchingDetail, setIsSearchingDetail] = useState(true)
  const [filters, setFilters] = useState(List())
  const [searchResults, setSearchResults] = useState([])

  const handleApplyFilter = (data) => {
    const [option] = consultantOptions.filter(option => option['value'] === data.field)
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
    let query = filters.size ? generateQuery(filters.toJS()) : null
    const token = user.get('token')
    const payload = {
      data: {},
      token: token,
    }
    if (query) payload.data.query = query['query']
    setIsOpen(true)
    setIsSearching(true)
    searchConsultants(payload)
      .then((res) => {
        if (!res?.hasError) {
          setSearchResults(res.hits['hits'])
          dispatch(setConsultantToDisplay(''))
        } else {
          setSearchResults([])
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
          {consultantId && (
            <>
              <ConsultantSearch
                isDisplay={isOpenDetail}
                isLoading={isSearchingDetail}
                setIsDisplay={setIsOpenDetail}
                setIsLoading={setIsSearchingDetail}
              />
              <Card className={`${(isOpenDetail && isSearchingDetail) && 'sc-loading'} mt-4`}>
                <div className="sc-loading__icon-wrapper">
                  <MoonLoader size={32} color={'#de8b6d'} loading={isOpenDetail && isSearchingDetail} />
                </div>
                <ScrollingMenu />
              </Card>
            </>
          )}
        </>
      )}
    </div>
  )
}

ConsultantCenter.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(ConsultantCenter)
