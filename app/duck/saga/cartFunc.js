import {put, select} from 'redux-saga/effects'
import {setLoadingStatus} from 'duck/actions/process'
import {
  getCartDetails,
  customerSignup,
  getConsultantDetails,
  createCart,
  getCustomerDetails,
  getConsultantAddress,
  getCustomerAddress,
  cartCheckout,
  createCustomerAddress,
} from 'api'
import {
  setCartDetails,
  setCartUserAddresses,
  setCartUserAddress,
  setCartUserInfo,
  createNewCart,
} from 'duck/actions/cart'
import {setInProgressOrderDetails} from 'duck/actions/order'
import {cartCheckoutWacher} from 'duck/watcher'
import * as util from 'helpers/util'

export function* setCartDetailsSaga({payload}) {
  const {cartID, token} = payload
  yield put(setLoadingStatus(true))
  try {
    const data = yield getCartDetails(cartID, token)
    if (!data?.hasError) {
      yield put(setCartDetails(data.data))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* cartUserSignupSaga({payload}) {
  yield put(setLoadingStatus(true))
  let shipping = payload.shipping

  try {
    const data = yield customerSignup(payload.data)
    if (!data?.hasError) {
      yield put(setCartUserInfo(data))
      const addressPayload = {
        customerID: data.id,
        data: shipping,
        token: payload.token,
      }
      const shippingData = yield createCustomerAddress(addressPayload)
      if (!shippingData?.hasError) {
        yield put(setCartUserAddress(shippingData.data))
        const checkoutPayload = {
          ...payload,
          data: {
            customer: {
              id: data.id,
            },
            billing_address: {...shippingData.data},
            shipping_address: shippingData.data.id,
            host_order: false,
          },
        }
        yield put(cartCheckoutWacher(checkoutPayload))
      }
    }
  } finally {
  }
}

export function* cartCheckoutSaga({payload}) {
  yield put(setLoadingStatus(true))
  const {history, currentPath} = payload
  try {
    const data = yield cartCheckout(payload)
    if (!data?.hasError) {
      yield put(setInProgressOrderDetails(data))
    } else {
      history.push(currentPath)
      util.showErrorNotification(data.response.data.message)
    }
  } catch (e) {
    console.log(e)
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* createCartSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const data = yield createCart(payload)
    if (!data?.hasError) {
      const actionPayload = {
        id: data.data.id,
        ...payload,
      }
      yield put(createNewCart(actionPayload))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* cartUserDetailsSaga() {
  const token = yield select(({user}) => user.get('token'))
  const cartUserId = yield select(({cart}) => cart.get('cartUserId'))
  const cartUserType = yield select(({cart}) => cart.get('cartUserType'))
  yield put(setLoadingStatus(true))
  try {
    const payload = {
      token: token,
      id: cartUserId,
    }
    let userData = {}
    let addressData = {}
    if (cartUserType === 'customer') {
      try {
        userData = yield getCustomerDetails(payload)
      } catch (e) {
        console.log(e)
      }
      addressData = yield getCustomerAddress(payload)
    } else if (cartUserType === 'consultant') {
      try {
        userData = yield getConsultantDetails(payload)
      } catch (e) {
        console.log(e)
      }
      addressData = yield getConsultantAddress(payload)
    }
    if (!userData?.hasError) {
      yield put(setCartUserInfo(userData))
    }
    if (!addressData?.hasError) {
      yield put(setCartUserAddresses(addressData.data))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}
