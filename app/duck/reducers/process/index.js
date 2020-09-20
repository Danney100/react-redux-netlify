import * as t from 'duck/constants/process'
import {initialState} from 'duck/initial'

function setLoadingStatus(process, flag) {
  return process.set('isLoading', flag)
}

function setCartCreatingStatus(process, flag) {
  return process.set('isCartCreating', flag)
}

function setPortal(process, flag) {
  return process.set('portal', flag)
}

export default function (state = initialState.process, action) {
  switch (action.type) {
    case t.SET_LOADING_STATUS:
      return setLoadingStatus(state, action.payload)
    case t.SET_CART_CREATING_STATUS:
      return setCartCreatingStatus(state, action.payload)
    case t.SET_PORTAL:
      return setPortal(state, action.payload)
    default:
      return state
  }
}
