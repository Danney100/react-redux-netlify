import React from 'react'
import {hot} from 'react-hot-loader'
import {BrowserRouter as Router} from 'react-router-dom'

import AppLayout from './../../layout/default'
import {RoutedContent} from './../../routes'
import AppProvider from './AppProvider'
import {ToastContainer} from 'react-toastify'
import AppService from './AppService'

const basePath = process.env.BASE_PATH || '/'

const AppClient = () => {
  return (
    <AppProvider>
      <Router basename={basePath}>
        <AppService />
        <AppLayout>
          <RoutedContent />
          <ToastContainer />
        </AppLayout>
      </Router>
    </AppProvider>
  )
}

export default hot(module)(AppClient)
