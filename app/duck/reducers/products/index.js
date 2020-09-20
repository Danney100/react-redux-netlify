import {Map} from 'immutable'

import * as t from 'duck/constants/products'
import {initialState} from 'duck/initial'

function setAllProducts(products, data) {
  return {...products, productList: data}
}

function setProductToDisplay(product, displayId) {
  return product.set('productToDisplay', displayId)
}

function setProductDetails(product, details) {
  return product.set('productDetails', Map(details))
}

export default function (state = initialState.cart, action) {
  switch (action.type) {
    case t.SET_ALL_PRODUCTS:
      return setAllProducts(state, action.payload)
    case t.SET_PRODUCT_TO_DISPLAY:
      return setProductToDisplay(state, action.payload)
    case t.SET_PRODUCT_DETAILS:
      return setProductDetails(state, action.payload)
    default:
      return state
  }
}
