import '@babel/polyfill'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from 'duck'

import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {cssBreakpoint} from 'styles/sc-jss-components';

import App from './components/App'

const store = createStore()
const theme = createMuiTheme(cssBreakpoint())

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root'),
)
