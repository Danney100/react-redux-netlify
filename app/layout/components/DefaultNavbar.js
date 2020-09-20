import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

import {Navbar, Nav, NavItem, SidebarTrigger} from './../../components'
import {useContext} from 'react'
import AppContext from 'components/App/AppContext'

export const DefaultNavbar = () => {
  const context = useContext(AppContext)
  const {title} = context

  return (
    <Navbar light expand="xs" fluid>
      <Nav navbar>
        <NavItem className="d-lg-none">
          <SidebarTrigger style={{fontSize: 'xx-large'}} />
        </NavItem>
      </Nav>
      <Nav navbar className="d-flex justify-content-end flex-column">
        <NavItem
          className="ml-auto mb-0"
          style={{
            fontSize: '36px',
            fontWeight: '100',
            fontFamily: 'Lato, Helvetica Neue ,Helvetica,Arial,sans-serif',
          }}>
          {title}
        </NavItem>
        <NavItem className="pt-0 text-lg-left text-right">
          <span style={{color: '#BB3B63', fontSize: '85%'}}>Staging Environment</span>{' '}
          <span style={{fontSize: '0.7em'}} className="text-lg-left">
            | Local: <Moment local />
          </span>
          <span style={{fontSize: '0.7em'}} className="ml-2">
            <Moment format="YYYY/MM/DD" />
          </span>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
