import React, {useState} from 'react'
import {
  Row,
  Col,
  Button,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
} from 'reactstrap'

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)
  const [dropdownOpenAdd, setOpenAdd] = useState(false)
  const toggleAdd = () => setOpenAdd(!dropdownOpenAdd)

  return (
    <Row className="mt-3">
      <Col sm={8} xs={12} className="text-lg-left text-center">
        <Button className="m-1" color="info">
          <i className="fa fas fa-pencil mr-1"></i>Edit Consultant
        </Button>
        <Button className="mr-1" color="success">
          <i className="fa fas fa-external-link mr-1"></i>
          <span>Go to Portal</span>
        </Button>
        <Button className="mr-1" color="warning">
          <i className="fa fa-usd mr-1"></i>
          Financials
        </Button>
        <Button className="mr-1" color="secondary">
          <i className="fa fa-sitemap mr-2"></i>
          Downline
        </Button>
        <Button className="mr-1" color="pink">
          <i className="fa fas fa-ban mr-1"></i>
          <span>Cancel Consultant</span>
        </Button>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="mr-1" color="primary">
            <i className="fa fas fa-sliders mr-1"></i>Admin
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <i className="fa fas fa-sitemap mr-1"></i>Change Genealogy
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-user-plus mr-1"></i>Create Customer from Consultant
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Col>
      <Col
        sm={4}
        xs={12}
        style={{
          top: '7px',
          height: 'fit-content',
        }}
        className="text-lg-right text-center p-0">
        <ButtonDropdown isOpen={dropdownOpenAdd} toggle={toggleAdd} style={{right: '10px'}}>
          <DropdownToggle caret className="mr-1" color="primary">
            <i className="fa fas fa-plus mr-1"></i>Add New
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <i className="fa fas fa-user-plus mr-1"></i>Consultant
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-user-plus mr-1"></i>Customer
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-user-plus mr-1"></i>Lead
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-credit-card mr-1"></i>Order
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Col>
    </Row>
  )
}

export default SearchButton
