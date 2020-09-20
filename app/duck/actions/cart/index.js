import {
  CREATE_NEW_CART,
  ADD_CART_ITEM,
  SET_CART_DETAILS,
  SET_CART_USER_INFO,
  SET_CART_USER_ADDRESS,
  SET_CART_USER_ADDRESSES,
} from 'duck/constants/cart'

export function createNewCart(payload) {
  return {
    type: CREATE_NEW_CART,
    payload,
  }
}

export function addCartItem(payload) {
  return {
    type: ADD_CART_ITEM,
    payload,
  }
}

export function setCartDetails(payload) {
  return {
    type: SET_CART_DETAILS,
    payload,
  }
}

export function setCartUserInfo(payload) {
  return {
    type: SET_CART_USER_INFO,
    payload,
  }
}

export function setCartUserAddress(payload) {
  return {
    type: SET_CART_USER_ADDRESS,
    payload,
  }
}
export function setCartUserAddresses(payload) {
  return {
    type: SET_CART_USER_ADDRESSES,
    payload,
  }
}
