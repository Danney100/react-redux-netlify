import {
  SET_ORDER_SEARCH_STATUS,
  SET_ORDERS_INFO,
  SET_ORDER_TO_DISPLAY,
  SET_ORDER_DETAILS,
  SET_IN_PROGRESS_ORDER_DETAILS,
  SET_ORDER_TRANSACTION_DETAILS,
} from 'duck/constants/order'

export function setOrderSearchStatus(payload) {
  return {
    type: SET_ORDER_SEARCH_STATUS,
    payload,
  }
}

export function setOrdersInfo(payload) {
  return {
    type: SET_ORDERS_INFO,
    payload,
  }
}

export function setOrderToDisplay(payload) {
  return {
    type: SET_ORDER_TO_DISPLAY,
    payload,
  }
}

export function setOrderDetails(payload) {
  return {
    type: SET_ORDER_DETAILS,
    payload,
  }
}

export function setInProgressOrderDetails(payload) {
  return {type: SET_IN_PROGRESS_ORDER_DETAILS, payload}
}

export function setOrderTransactionDetails(payload) {
  return {type: SET_ORDER_TRANSACTION_DETAILS, payload}
}
