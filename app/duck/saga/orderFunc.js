import {put} from 'redux-saga/effects'
import {setLoadingStatus} from 'duck/actions/process'
import {orderPayment} from 'api'
import {setOrderTransactionDetails} from 'duck/actions/order'

export function* orderPaymentSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const data = yield orderPayment(payload.orderId, payload.data, payload.token)
    if (!data?.hasError) {
      yield put(setOrderTransactionDetails(data.data))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}
