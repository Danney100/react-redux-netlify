import * as t from 'duck/constants/productConfiguration'
import {initialState} from 'duck/initial'
import {Map, setIn} from 'immutable'

function setProductTypeToEdit(state, data) {
  return setIn(state, ['productType'], Map(data))
}

function setJoinOptionToEdit(state, data) {
  return setIn(state, ['joinOption'], Map(data))
}

function setProductClassificationToEdit(state, data) {
  return setIn(state, ['productClassification'], Map(data))
}

function setDisplayCategoryToEdit(state, data) {
  return setIn(state, ['displayCategory'], Map(data))
}

export default function (state = initialState.process, action) {
  switch (action.type) {
    case t.SET_PRODUCT_TYPE_TO_EDIT:
      return setProductTypeToEdit(state, action.payload)
    case t.SET_JOIN_OPTIONS_TO_EDIT:
      return setJoinOptionToEdit(state, action.payload)
    case t.SET_PRODUCT_CLASSIFICATION_TO_EDIT:
      return setProductClassificationToEdit(state, action.payload)
    case t.SET_DISPLAY_CATEGORY_TO_EDIT:
      return setDisplayCategoryToEdit(state, action.payload)
    default:
      return state
  }
}
