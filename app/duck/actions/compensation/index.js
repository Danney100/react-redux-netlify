import {SET_COMPENSATION_RUNS} from 'duck/constants/compensation'

export function setCompensationRuns(payload) {
  return {type: SET_COMPENSATION_RUNS, payload}
}
