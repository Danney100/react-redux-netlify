import {List, Map} from 'immutable'

import * as t from 'duck/constants/order'
import {initialState} from 'duck/initial'

function setOrderSearchStatus(order, flag) {
  return order.set('isSearching', flag)
}

function setOrdersInfo(order, data) {
  return order.set('orders', List(data))
}

function setOrderToDisplay(order, data) {
  return order.set('orderToDisplay', data)
}

function setOrderDetails(order, data) {
  return order.set('orderDetails', Map(data))
}

function setInProgressOrderDetails(order, data) {
  return order.set('inProgressOrder', Map(data))
}

function setOrderTransactionDetails(order, data) {
  return order.set('transaction', Map(data))
}

export default function (state = initialState.order, action) {
  switch (action.type) {
    case t.SET_ORDER_SEARCH_STATUS:
      return setOrderSearchStatus(state, action.payload)
    case t.SET_ORDERS_INFO:
      return setOrdersInfo(state, action.payload)
    case t.SET_ORDER_TO_DISPLAY:
      return setOrderToDisplay(state, action.payload)
    case t.SET_ORDER_DETAILS:
      return setOrderDetails(state, action.payload)
    case t.SET_IN_PROGRESS_ORDER_DETAILS:
      return setInProgressOrderDetails(state, action.payload)
    case t.SET_ORDER_TRANSACTION_DETAILS:
      return setOrderTransactionDetails(state, action.payload)
    default:
      return state
  }
}
