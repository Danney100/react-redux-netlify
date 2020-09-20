import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {DropdownMenu, DropdownItem} from 'components'

const DropdownUserMenu = (props) => (
  <React.Fragment>
    <DropdownMenu right={props.right}>
      <DropdownItem tag={Link} to="/dashboards">
        Admin Portal
      </DropdownItem>
      <DropdownItem tag={Link} to="/consultant-portal">
        Consultant Portal
      </DropdownItem>
    </DropdownMenu>
  </React.Fragment>
)

DropdownUserMenu.propTypes = {
  position: PropTypes.string,
  right: PropTypes.bool,
}

DropdownUserMenu.defaultProps = {
  position: '',
}

export {DropdownUserMenu}
