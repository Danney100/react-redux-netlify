import * as t from 'duck/constants/user'
import {initialState} from 'duck/initial'

function setLoginInfo(user, loginInfo) {
  const newUserInfo = user.set('token', loginInfo.access).set('refresh', loginInfo.refresh)

  return newUserInfo
}

function setSignupInfo(user, signUpInfo) { 
  const newUserInfo = user.set('result', signUpInfo)

  return newUserInfo
}

function setTabActive(user, flag) {
  return user.set('tabActive', flag)
}

function setFullName(user, flag) {
  return user.set('fullName', flag)
}

export default function (state = initialState.user, action) {
  switch (action.type) {
    case t.SET_LOGIN_INFO:
      return setLoginInfo(state, action.payload)
    case t.SET_SIGNUP_INFO:
      return setSignupInfo(state, action.payload)
    case t.SET_TAB_ACTIVE:
      return setTabActive(state, action.payload)
    case t.SET_FULL_NAME:
      return setFullName(state, action.payload)
    default:
      return state
  }
}
