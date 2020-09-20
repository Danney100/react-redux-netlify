import {
  SET_ALL_PRODUCTS,
  SET_PRODUCT_TO_DISPLAY,
  SET_PRODUCT_DETAILS,
} from 'duck/constants/products'

export function setAllProducts(payload) {
  return {
    type: SET_ALL_PRODUCTS,
    payload,
  }
}

export function setProductToDisplay(payload) {
  return {
    type: SET_PRODUCT_TO_DISPLAY,
    payload,
  }
}

export function setProductDetails(payload) {
  return {
    type: SET_PRODUCT_DETAILS,
    payload,
  }
}