import React from 'react'
import PropTypes from 'prop-types'

const FooterText = (props) => (
  <React.Fragment>
    (C) {props.year} All Rights Reserved. This is the &quot;{props.name}&quot; built by {props.desc}
    . Designed and implemented by{' '}
    <a
      href="http://www.scoutandcellar.com"
      target="_blank"
      rel="noopener noreferrer"
      className="sidebar__link">
      www.scoutandcellar.com
    </a>
  </React.Fragment>
)
FooterText.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  desc: PropTypes.node,
}
FooterText.defaultProps = {
  year: '2020',
  name: 'Scout & Cellar Admin Portal',
  desc: 'Scout & Cellar Support team',
}

export {FooterText}
