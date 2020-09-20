import React, {useState} from 'react'
import AppContext from './AppContext'
import PropTypes from 'prop-types'

const AppProvider = ({children}) => {
  const [title, setTitle] = useState('')

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
      }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProvider
