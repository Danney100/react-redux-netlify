import React, {useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

import classnames from 'classnames'
import Transactions from './Transactions'

const OrderNav = () => {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div>
      <Nav tabs className="mt-3">
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '1'})}
            onClick={() => {
              toggle('1')
            }}>
            <span style={{color: 'black'}}>Transactions</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '2'})}
            onClick={() => {
              toggle('2')
            }}>
            <span style={{color: 'black'}}>Notes</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '3'})}
            onClick={() => {
              toggle('3')
            }}>
            <span style={{color: 'black'}}>Shipments</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '4'})}
            onClick={() => {
              toggle('4')
            }}>
            <span style={{color: 'black'}}>Returns</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '5'})}
            onClick={() => {
              toggle('5')
            }}>
            <span style={{color: 'black'}}>Invoices</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '6'})}
            onClick={() => {
              toggle('6')
            }}>
            <span style={{color: 'black'}}>Custom Fields</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Transactions />
        </TabPane>
        <TabPane tabId="2"></TabPane>
        <TabPane tabId="3"></TabPane>
        <TabPane tabId="4"></TabPane>
        <TabPane tabId="5"></TabPane>
        <TabPane tabId="6"></TabPane>
      </TabContent>
    </div>
  )
}

export default OrderNav
