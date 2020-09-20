import {put, select} from 'redux-saga/effects'

import {flightAdminLogin, getCompensationRuns} from 'api'

import {setLoadingStatus} from 'duck/actions/process'
import {setCompensationRuns} from 'duck/actions/compensation'

export async function getFlightToken(token) {
  try {
    const result = await flightAdminLogin({token: token})
    return result.token
  } catch (e) {
    console.log(e)
  }
}

export function* getCompensationRunSaga({payload}) {
  yield put(setLoadingStatus(true))
  const token = yield select(({user}) => user.get('token'))
  try {
    const newFlightToken = yield getFlightToken(token)
    payload.token = newFlightToken
    const result = yield getCompensationRuns(payload)
    yield put(setCompensationRuns(result))
  } finally {
    yield put(setLoadingStatus(false))
  }
}
