import React, {useState} from 'react'
import {List} from 'immutable'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'

import ProductDetails from './Products/components/ProductDetails'
import SearchCriteria from './Products/components/SearchCriteria'
import {generateQuery} from 'helpers/util'
import {searchProducts} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import {setProductToDisplay} from 'duck/actions/products'
import SearchResult from './SearchResult'
import {productOptions} from './Products/components/SearchCriteria/options'


const Product = () => {
  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const [searchResults, setSearchResults] = useState(List())

  const {register, handleSubmit} = useForm()
  const [filters, setFilters] = useState(List())

  const dispatch = useDispatch()

  const handleApplyFilter = (data) => {
    const [option] = productOptions.filter(option => option['value'] === data.field);
    setFilters(filters.push({id: Date.now(), ...data, label: option.label}))
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
    if (filters.size) {
      let query = generateQuery(filters.toJS())
      const payload = {
        data: query,
        token: token,
      }
      dispatch(setLoadingStatus(true))
      searchProducts(payload)
        .then((res) => {
          if (!res?.hasError) {
            setSearchResults(List(res.hits['hits']))
            if (res.hits?.hits) {
              dispatch(setProductToDisplay(res.hits['hits'][0]._source.id))
            }
          } else {
            setSearchResults(List())
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          dispatch(setLoadingStatus(false))
        })
    }
  }

  return (
    <div>
      <SearchCriteria
        register={register}
        applyFilter={handleApplyFilter}
        filters={filters.toJS()}
        handleSubmit={handleSubmit}
        clearFilter={clearFilter}
        resetFilters={resetFilters}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} />
        </div>
      ) : (
        <>
          <SearchResult searchResults={searchResults.toJS()} />
          <ProductDetails />
        </>
      )}
    </div>
  )
}

export default Product
