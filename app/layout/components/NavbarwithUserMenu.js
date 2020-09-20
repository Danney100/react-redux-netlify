import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  SidebarTrigger,
  AvatarAddOn,
  UncontrolledDropdown,
  DropdownToggle,
  Avatar,
  ThemeConsumer,
} from 'components'
import {DropdownUserMenu} from 'routes/components/Dropdowns/DropdownUserMenu'
import {randomAvatar} from 'utilities'

export const NavbarWithUserMenu = () => (
  <ThemeConsumer>
    {() => (
      <React.Fragment>
        <Navbar light expand fluid className="bg-white pb-0">
          <Nav navbar>
            <NavItem style={{marginTop: '4px'}} className="d-lg-none">
              <SidebarTrigger />
            </NavItem>
            <NavItem>
              <i className="fa fa-search mt-3 ml-2 mr-2"></i>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <p className="mt-3 mr-2">CONSULTANT PORTAL</p>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <Avatar.Image
                  size="md"
                  src={randomAvatar()}
                  addOns={[
                    <AvatarAddOn.Icon
                      className="fa fa-circle"
                      color="white"
                      key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon
                      className="fa fa-circle"
                      color="success"
                      key="avatar-icon-fg"
                    />,
                  ]}
                />
              </DropdownToggle>
              <DropdownUserMenu right />
            </UncontrolledDropdown>
            <p className="mt-3 ml-2 mr-2">Hi, Burce</p>
          </Nav>
        </Navbar>
      </React.Fragment>
    )}
  </ThemeConsumer>
)
