import * as t from 'duck/constants/consultant'
import {Map} from 'immutable'
import {initialState} from 'duck/initial'

function setConsultantToDisplay(consultant, displayId) {
  return consultant.set('consultantToDisplay', displayId)
}

function setConsultantDetails(consultant, details) {
  return consultant.set('consultantDetails', Map(details))
}

export default function (state = initialState.consultant, action) {
  switch (action.type) {
    case t.SET_CONSULTANT_TO_DISPLAY:
      return setConsultantToDisplay(state, action.payload)
    case t.SET_CONSULTANT_DETAILS:
      return setConsultantDetails(state, action.payload)
    default:
      return state
  }
}
