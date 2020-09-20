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

const OrderButtonGroup = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)

  return (
    <Row>
      <Col sm={12} xs={12} className="text-lg-left text-center">
        <Button className="mr-1 mb-1" color="info">
          <i className="fa fas fa-truck mr-1" />
          Ship Order
        </Button>
        <Button className="mr-1 mb-1" color="success">
          <i className="fa fas fa-file-text-o mr-1" />
          <span>View Invoice</span>
        </Button>
        <Button className="mr-1 mb-1" color="warning">
          <i className="fa fa-usd mr-1" />
          Financials
        </Button>
        <Button className="mr-1 mb-1" color="secondary">
          <i className="fa fa-share mr-2" />
          Post Order
        </Button>
        <Button className="mr-1 mb-1" color="pink">
          <i className="fa fas fa-lock mr-1" />
          Lock Order
        </Button>
        <Button className="mr-1 mb-1" color="primary">
          <i className="fa fas fa-money mr-1" />
          Make Commissionable
        </Button>
        <Button className="mr-1 mb-1" color="secondary">
          <i className="fa fas fa-ban mr-1" />
          Void Order
        </Button>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{marginTop: '-4px'}}>
          <DropdownToggle caret className="mr-1" color="info">
            <i className="fa fas fa-eye mr-1" />
            View
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <i className="fa fas fa-money mr-1" /> Merchant Transactions
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-credit-card mr-1" /> Gateway Conversations
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-truck mr-1" /> Shipping Conversations
            </DropdownItem>
            <DropdownItem>
              <i className="fa fas fa-coins mr-1" /> Tax Conversations
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Col>
    </Row>
  )
}

export default OrderButtonGroup
