import {put} from 'redux-saga/effects'
import {adminLogin} from 'api'
import {adminSignup} from 'api'

import {setLoadingStatus} from 'duck/actions/process'
import {setLoginInfo} from 'duck/actions/user'
import {setSignupInfo} from 'duck/actions/user'

export function* setLoginInfoSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const loginData = yield adminLogin(payload)
    if (!loginData.access) {
      alert('wrong email, password')
    } else {
      yield put(setLoginInfo(loginData.access))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* setSignupInfoSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const signupData = yield adminSignup(payload)
    if (!signupData.access) {
      alert('signup failed')
    } else {
      yield put(setSignupInfo(signupData.access))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}
