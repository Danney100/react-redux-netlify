import {fromJS} from 'immutable'

import {initialState} from 'duck/initial'

const LOCAL_STORAGE_KEY = 'gallivant-front'

class StateLoader {
  loadState() {
    try {
      let serializedState =
        typeof window !== 'undefined' && window.localStorage.getItem(LOCAL_STORAGE_KEY)

      if (serializedState === null) {
        return this.initializeState()
      }

      const jsState = JSON.parse(serializedState)
      const {
        user,
        process,
        cart,
        order,
        consultant,
        customer,
        products,
        compensation,
        productConfig,
      } = jsState

      jsState.user = fromJS(user)
      jsState.process = fromJS(process)
      jsState.cart = fromJS(cart)
      jsState.order = fromJS(order)
      jsState.consultant = fromJS(consultant)
      jsState.customer = fromJS(customer)
      jsState.products = fromJS(products)
      jsState.compensation = fromJS(compensation)
      jsState.productConfig = fromJS(productConfig)

      return jsState
    } catch (err) {
      return this.initializeState()
    }
  }

  saveState(state) {
    try {
      let serializedState = JSON.stringify(state)
      typeof window !== 'undefined' &&
        window.localStorage.setItem(LOCAL_STORAGE_KEY, serializedState)
    } catch (err) {
      console.log(err)
    }
  }

  initializeState() {
    return initialState
  }
}

export default StateLoader
