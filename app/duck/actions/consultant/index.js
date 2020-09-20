import {SET_CONSULTANT_TO_DISPLAY, SET_CONSULTANT_DETAILS} from 'duck/constants/consultant'

export function setConsultantToDisplay(payload) {
  return {
    type: SET_CONSULTANT_TO_DISPLAY,
    payload,
  }
}

export function setConsultantDetails(payload) {
  return {
    type: SET_CONSULTANT_DETAILS,
    payload,
  }
}
