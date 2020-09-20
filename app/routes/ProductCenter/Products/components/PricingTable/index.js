import React, {useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

import TabDemo from '../TabDemo'
import classnames from 'classnames'
import PriceTable from '../PriceTable'
import PricingRulesTable from '../PricingRulesTable'

const PricingTable = () => {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const DemoData = [
    {
      PriceDemo:
        'The price/volume tab includes the assigned currencies, base price, taxable amount and all volume types associated with the product. The “Base Price” is what the system uses to apply price sheets to a product.',
    },
    {
      PricingRulesDemo:
        'Price rules in the system are used to determine the price of a given product based upon customer classifications, consultant classifications, and country. The price rules will be applied to the base prices on a product and the reflected into the shopping cart. following options may be available when determining the visibility of a note in the consultant or customer portal',
    },
  ]
  return (
    <div>
      <div className="mt-3">
        <h5>
          <span className="text-dark">Pricing</span>
        </h5>
      </div>
      <Nav tabs className="mt-3">
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '1'})}
            onClick={() => {
              toggle('1')
            }}>
            <span style={{color: 'black'}}>Price/Volume</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '2'})}
            onClick={() => {
              toggle('2')
            }}>
            <span style={{color: 'black'}}>PricingRules</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TabDemo content={DemoData[0].PriceDemo} />
          <PriceTable />
        </TabPane>
        <TabPane tabId="2">
          <TabDemo content={DemoData[1].PricingRulesDemo} />
          <PricingRulesTable />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default PricingTable
