import React, {useContext} from 'react'
import {Navbar, Nav, NavItem, SidebarTrigger, ThemeConsumer} from 'components'
import AppContext from 'components/App/AppContext'

export const SidebarWithNavbarNavbar = () => {
  const context = useContext(AppContext)
  const {title} = context

  return (
    <ThemeConsumer>
      {() => (
        <React.Fragment>
          <Navbar light expand fluid style={{background: '#fcfaf9'}}>
            <Nav navbar xs="auto" style={{display: 'block', width: '100%'}}>
              <NavItem className="my-auto float-left">
                <SidebarTrigger />
              </NavItem>
              <NavItem>
                <p className="mt-3" style={{color: '#403839'}}>
                  {title}
                </p>
              </NavItem>
            </Nav>
          </Navbar>
        </React.Fragment>
      )}
    </ThemeConsumer>
  )
}
