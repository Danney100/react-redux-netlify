import {List} from 'immutable'

import * as t from 'duck/constants/compensation'
import {initialState} from 'duck/initial'

function setCompensationRuns(state, data) {
  return state.set('runs', List(data))
}

export default function (state = initialState.compensation, action) {
  switch (action.type) {
    case t.SET_COMPENSATION_RUNS:
      return setCompensationRuns(state, action.payload)
    default:
      return state
  }
}
