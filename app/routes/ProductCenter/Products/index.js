import React from 'react'

import ProductSearch from './components/ProductDetails'
import SearchCriteria from './components/SearchCriteria'

export const Products = () => {
  return (
    <div>
      <SearchCriteria />
      <ProductSearch />
    </div>
  )
}

export default Products
