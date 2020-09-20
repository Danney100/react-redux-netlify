import {combineReducers} from 'redux'

import * as userConstants from 'duck/constants/user'
import * as procConstants from 'duck/constants/process'
import * as orderConstants from 'duck/constants/order'
import * as cartConstants from 'duck/constants/cart'
import * as productConstants from 'duck/constants/products'
import * as consultantConstants from 'duck/constants/consultant'
import * as customerContants from 'duck/constants/customer'
import * as compensationContants from 'duck/constants/compensation'
import * as productConfigConstants from 'duck/constants/productConfiguration'

import userReducer from 'duck/reducers/user'
import procReducer from 'duck/reducers/process'
import orderReducer from 'duck/reducers/order'
import cartReducer from 'duck/reducers/cart'
import productReducer from 'duck/reducers/products'
import consultantReducer from 'duck/reducers/consultant'
import customerReducer from 'duck/reducers/customer'
import compensationReducer from 'duck/reducers/compensation'
import productConfigReducer from 'duck/reducers/productConfiguration'

const appReducer = combineReducers({
  [userConstants.NAME]: userReducer,
  [procConstants.NAME]: procReducer,
  [orderConstants.NAME]: orderReducer,
  [cartConstants.NAME]: cartReducer,
  [productConstants.NAME]: productReducer,
  [consultantConstants.NAME]: consultantReducer,
  [customerContants.NAME]: customerReducer,
  [compensationContants.NAME]: compensationReducer,
  [productConfigConstants.NAME]: productConfigReducer,
})

export default appReducer
