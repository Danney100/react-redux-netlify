import * as t from 'duck/constants/cart'
import {Map, List} from 'immutable'

import {initialState} from 'duck/initial'

function createNewCart(cart, payload) {
  return cart
    .set('cartID', payload.id)
    .set('itemCount', 0)
    .set('cartDetails', Map())
    .set('cartType', payload.cartType)
    .set('cartUserType', payload.cartUserType)
    .set('cartUserId', payload.cartUserId)
    .set('items', List())
    .set('user', Map())
    .set('address', Map())
    .set('addresses', List())
}

function addCartItem(cart, payload) {
  const {item, quantity} = payload
  const cartItems = cart.get('items')

  const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

  let newItems = null
  if (itemIndex === -1) {
    newItems = cartItems.push(item)
  } else {
    let cartItem = cartItems.get(itemIndex)
    cartItem['quantity'] += quantity
    newItems = cartItems.set(itemIndex, cartItem)
  }
  return cart.set('itemCount', cart.get('itemCount') + quantity).set('items', newItems)
}

function setCartDetails(cart, data) {
  return cart.set('cartDetails', Map(data))
}

function setCartUserInfo(cart, data) {
  return cart.set('user', Map(data))
}

function setCartUserAddress(cart, data) {
  return cart.set('address', data)
}

function setCartUserAddresses(cart, data) {
  return cart.set('addresses', List(data))
}

export default function (state = initialState.cart, action) {
  switch (action.type) {
    case t.CREATE_NEW_CART:
      return createNewCart(state, action.payload)
    case t.ADD_CART_ITEM:
      return addCartItem(state, action.payload)
    case t.SET_CART_DETAILS:
      return setCartDetails(state, action.payload)
    case t.SET_CART_USER_INFO:
      return setCartUserInfo(state, action.payload)
    case t.SET_CART_USER_ADDRESS:
      return setCartUserAddress(state, action.payload)
    case t.SET_CART_USER_ADDRESSES:
      return setCartUserAddresses(state, action.payload)
    default:
      return state
  }
}
