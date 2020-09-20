import React from 'react'
import SearchCriteria from './SearchCriteria'
import SearchResult from './SearchResult'
import ShippingDetails from './ShippingDetails'
import ShippingOrders from './ShippingOrders'
export const ShippingCenter = () => {
  return (
    <div>
      <SearchCriteria />
      <SearchResult />
      <ShippingDetails />
      <ShippingOrders />
    </div>
  )
}

export default ShippingCenter
