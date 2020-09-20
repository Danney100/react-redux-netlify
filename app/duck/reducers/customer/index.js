import * as t from 'duck/constants/customer'
import {Map} from 'immutable'
import {initialState} from 'duck/initial'

function setCustomerToDisplay(customer, displayId) {
  return customer.set('customerToDisplay', displayId)
}

function setCustomerDetails(customer, details) {
  return customer.set('customerDetails', Map(details))
}

export default function (state = initialState.customer, action) {
  switch (action.type) {
    case t.SET_CUSTOMER_TO_DISPLAY:
      return setCustomerToDisplay(state, action.payload)
    case t.SET_CUSTOMER_DETAILS:
      return setCustomerDetails(state, action.payload)
    default:
      return state
  }
}
