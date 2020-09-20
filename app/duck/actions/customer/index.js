import {SET_CUSTOMER_TO_DISPLAY, SET_CUSTOMER_DETAILS} from 'duck/constants/customer'

export function setCustomerToDisplay(payload) {
  return {
    type: SET_CUSTOMER_TO_DISPLAY,
    payload,
  }
}

export function setCustomerDetails(payload) {
  return {
    type: SET_CUSTOMER_DETAILS,
    payload,
  }
}
