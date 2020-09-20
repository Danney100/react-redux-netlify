import {takeLatest} from 'redux-saga/effects'

import {setLoginInfoSaga} from './userFunc'
import {setSignupInfoSaga} from './userFunc'
import {
  setCartDetailsSaga,
  cartUserSignupSaga,
  cartCheckoutSaga,
  createCartSaga,
  cartUserDetailsSaga,
} from './cartFunc'
import {orderPaymentSaga} from './orderFunc'
import {getCompensationRunSaga} from './compensationFunc'

export default function* watcherSaga() {
  yield takeLatest('SET_LOGIN_INFO_WATCHER', setLoginInfoSaga)
  yield takeLatest('USER_SIGNUP_WATCHER', setSignupInfoSaga)
  yield takeLatest('CART_DETAILS_WATCHER', setCartDetailsSaga)
  yield takeLatest('CART_USER_SIGNUP_WATCHER', cartUserSignupSaga)
  yield takeLatest('CART_CHECKOUT_WATCHER', cartCheckoutSaga)
  yield takeLatest('ORDER_PAYMENT_WATCHER', orderPaymentSaga)
  yield takeLatest('CREATE_CART_WATCHER', createCartSaga)
  yield takeLatest('COMPENSATION_RUN_WATCHER', getCompensationRunSaga)
  yield takeLatest('CART_USER_DETAILS_WATCHER', cartUserDetailsSaga)
}
