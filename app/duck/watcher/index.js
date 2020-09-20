//-----------user--------------------------

export function setUserInfoWatcher(payload) {
  return {type: 'SET_LOGIN_INFO_WATCHER', payload}
}

export function userSignUpWatcher(payload) {
  return {type: 'USER_SIGNUP_WATCHER', payload}
}

//-----------cart--------------------------

export function cartDetailsWatcher(payload) {
  return {type: 'CART_DETAILS_WATCHER', payload}
}

export function cartUserSignupWatcher(payload) {
  return {type: 'CART_USER_SIGNUP_WATCHER', payload}
}

export function cartCheckoutWacher(payload) {
  return {type: 'CART_CHECKOUT_WATCHER', payload}
}

export function createCartWatcher(payload) {
  return {type: 'CREATE_CART_WATCHER', payload}
}

export function cartUserDetailsWatcher(payload) {
  return {type: 'CART_USER_DETAILS_WATCHER', payload}
}

//-----------order--------------------------

export function orderPaymentWatcher(payload) {
  return {type: 'ORDER_PAYMENT_WATCHER', payload}
}

// ---------------compensation---------------------

export function compensationRunWatcher(payload) {
  return {type: 'COMPENSATION_RUN_WATCHER', payload}
}
