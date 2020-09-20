import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {ThemeConsumer} from '../../../components/Theme'

const logos = {
  white: require('./../../../images/logos/scout.png'),
  primary: require('./../../../images/logos/scout.png'),
  success: require('./../../../images/logos/scout.png'),
  warning: require('./../../../images/logos/scout.png'),
  danger: require('./../../../images/logos/scout.png'),
  info: require('./../../../images/logos/scout.png'),
  indigo: require('./../../../images/logos/scout.png'),
  purple: require('./../../../images/logos/scout.png'),
  pink: require('./../../../images/logos/scout.png'),
  yellow: require('./../../../images/logos/scout.png'),
}

const getLogoUrl = (style, color) => {
  return logos[color]
}

// Check for background
const getLogoUrlBackground = (style, color) => {
  if (style === 'color') {
    return logos['white']
  } else {
    return getLogoUrl(style, color)
  }
}

const LogoThemed = ({checkBackground, className, ...otherProps}) => (
  <ThemeConsumer>
    {({style, color}) => (
      <img
        src={checkBackground ? getLogoUrlBackground(style, color) : getLogoUrl(style, color)}
        className={classNames('d-block', className)}
        alt="ScoutandCellar Logo"
        {...otherProps}
        style={{width: '300px', height: '160px'}}
      />
    )}
  </ThemeConsumer>
)
LogoThemed.propTypes = {
  checkBackground: PropTypes.bool,
  className: PropTypes.string,
}

export {LogoThemed}
