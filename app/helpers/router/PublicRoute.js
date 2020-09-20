import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const LOCAL_STORAGE_KEY = 'gallivant-front'
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(LOCAL_STORAGE_KEY) && restricted ? (
          <Redirect to="/dashboards" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
