import {createStore as reduxCreateStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import watcherSaga from 'duck/saga'
import rootReducer from './rootReducer'
import StateLoader from './stateLoader'

const sagaMiddleware = createSagaMiddleware()
const stateLoader = new StateLoader()
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const createStore = () => {
  // NOTE: Check for localStorage usage
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('localStorage', 1)
      localStorage.removeItem('localStorage')
    } catch (e) {
      Storage.prototype._setItem = Storage.prototype.setItem
      Storage.prototype.setItem = function () {}
      alert(
        'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.',
      )
    }
  }

  const store = reduxCreateStore(
    rootReducer,
    stateLoader.loadState(),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(watcherSaga)
  store.subscribe(() => {
    stateLoader.saveState(store.getState())
  })

  return store
}

export default createStore
