import React from 'react'
import People from './People'
import ProductAndSales from './ProductAndSales'
import Compensation from './Compensation'
import Miscellaneous from './Miscellaneous'
import Uncategorized from './Uncategorized'

const ItemLists = (props) => {
  const {item} = props
  if (item === 1) {
    return <People />
  } else if (item === 2) {
    return <ProductAndSales />
  } else if (item === 3) {
    return <Compensation />
  } else if (item === 4) {
    return <Miscellaneous />
  } else if (item === 5) {
    return <Uncategorized />
  }
}

export default ItemLists
