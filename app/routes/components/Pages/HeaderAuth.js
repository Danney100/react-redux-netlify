import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {LogoThemed} from './../LogoThemed/LogoThemed'

const HeaderAuth = (props) => (
  <div className="d-xs d-sm d-lg-none">
    <div className="text-center">
      <Link to="/" className="d-inline-block">
        {props.icon ? (
          <i className={`fa fa-${props.icon} fa-3x ${props.iconClassName}`}></i>
        ) : (
          <LogoThemed checkBackground />
        )}
      </Link>
    </div>
  </div>
)
HeaderAuth.propTypes = {
  icon: PropTypes.node,
  iconClassName: PropTypes.node,
  title: PropTypes.node,
}
HeaderAuth.defaultProps = {
  title: 'Waiting for Data...',
  iconClassName: 'text-theme',
}

export {HeaderAuth}
