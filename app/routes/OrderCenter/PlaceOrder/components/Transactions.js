import React from 'react'
import ViewOrder from './ViewOrder/index'
import SearchCriteria from './SearchCriteria'

export const Transactions = () => {
  return (
    <div>
      <SearchCriteria />
      <ViewOrder />
    </div>
  )
}

export default Transactions
