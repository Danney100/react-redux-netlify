import React, {useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

import DisplayTable from '../DisplayTable'
import AvailabilityTable from '../AvailabilityTable'
import classnames from 'classnames'
import TabDemo from '../TabDemo'
import CustomFieldsTable from '../CustomFieldsTable'
import VendorTable from '../VendorTable'
import WarehousesTable from '../WarehousesTable'
import AssociatedItemsTable from '../AssociatedItemsTable'
import BuildableComponentsTable from '../BuildableComponentsTable'
import PricingTable from '../PricingTable'
import PersonalzationTable from '../PersonalzationTable'
import VariationsTable from '../VariationsTable'
import KitsTable from '../Kits'

const Navs = () => {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const DemoData = [
    {
      DisplayDemo:
        'The product display tab includes all of the attributes including display name and description, associated media, categories, custom website url and display locations, that are associated with the display of the product to a purchaser.',
    },
    {
      AvailabilityDemo:
        'The product availability tab allows you to specify the countries and provinces/states that a product can be sold in. The product will not appear in the shopping cart if the consultant or customer shipping address does not match the selections made.',
    },
    {
      WarehousesDemo:
        'The warehouse tab includes information on product availability for each warehouse and bin the product is configured for. A product can be assigned to one bin in each warehouse. ',
    },
    {
      PricingDemo:
        'Display As Message - The consultant or customer will receive an indicator on the home page of thier portal telling them there is a note/message to read.',
    },
    {
      KitsDemo:
        'The search feature allows users to search based on various fields that are associated with chosen center. This search feature allows users to run generic searches or if desired they can build complex queries with dependent and smart operators.',
    },
    {
      AssociatedItemsDemo:
        'The search feature allows users to search based on various fields that are associated with chosen center. This search feature allows users to run generic searches or if desired they can build complex queries with dependent and smart operators.',
    },
    {
      VariationsDemo:
        'The search feature allows users to search based on various fields that are associated with chosen center. This search feature allows users to run generic searches or if desired they can build complex queries with dependent and smart operators.',
    },
    {
      BuildableComponentsDemo:
        'Buildable products are products that contain one or more components for your customers to choose. Each component can contain individual SKUs, or entire Products Categories. You can configure various other options such as how each component will be shown in the shopping cart, and adjust the pricing.',
    },
    {
      PersonalzationDemo:
        'Create and edit personalization options for this product that will display to shoppers when adding this product to their cart.',
    },
  ]

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '1'})}
            onClick={() => {
              toggle('1')
            }}>
            <span style={{color: 'black'}}>Display</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '2'})}
            onClick={() => {
              toggle('2')
            }}>
            <span style={{color: 'black'}}>Availability</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '3'})}
            onClick={() => {
              toggle('3')
            }}>
            <span style={{color: 'black'}}>Warehouses</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '4'})}
            onClick={() => {
              toggle('4')
            }}>
            <span style={{color: 'black'}}>Pricing</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '5'})}
            onClick={() => {
              toggle('5')
            }}>
            <span style={{color: 'black'}}>Kits</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '6'})}
            onClick={() => {
              toggle('6')
            }}>
            <span style={{color: 'black'}}>AssociatedItems</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '7'})}
            onClick={() => {
              toggle('7')
            }}>
            <span style={{color: 'black'}}>Variations</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '8'})}
            onClick={() => {
              toggle('8')
            }}>
            <span style={{color: 'black'}}>BuildableComponents</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '9'})}
            onClick={() => {
              toggle('9')
            }}>
            <span style={{color: 'black'}}>Personalization</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '10'})}
            onClick={() => {
              toggle('10')
            }}>
            <span style={{color: 'black'}}>CustomFields</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '11'})}
            onClick={() => {
              toggle('11')
            }}>
            <span style={{color: 'black'}}>Vendors</span>
          </NavLink>
        </NavItem>
        <NavItem></NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="mt-3">
            <h5>
              <span className="text-dark">Display</span>
            </h5>
          </div>
          <TabDemo content={DemoData[0].DisplayDemo} />
          <DisplayTable />
        </TabPane>
        <TabPane tabId="2">
          <div className="mt-3">
            <h5>
              <span className="text-dark">Availability</span>
            </h5>
          </div>
          <TabDemo content={DemoData[1].AvailabilityDemo} />
          <AvailabilityTable />
        </TabPane>
        <TabPane tabId="3">
          <div className="mt-3 ">
            <h5>
              <span className="text-dark">Warehouses</span>
            </h5>
          </div>
          <TabDemo content={DemoData[2].WarehousesDemo} />
          <WarehousesTable />
        </TabPane>
        <TabPane tabId="4">
          <PricingTable />
        </TabPane>
        <TabPane tabId="5">
          <div className="mt-3 ">
            <h5>
              <span className="text-dark">Kits</span>
            </h5>
          </div>
          <TabDemo content={DemoData[4].KitsDemo} />
          <KitsTable />
        </TabPane>
        <TabPane tabId="6">
          <div className="mt-3 ">
            <h5>
              <span className="text-dark">AssociatedItems</span>
            </h5>
          </div>
          <AssociatedItemsTable />
        </TabPane>
        <TabPane tabId="7">
          <div className="mt-3 ">
            <h5>
              <span className="text-dark">Variations</span>
            </h5>
          </div>
          <VariationsTable />
        </TabPane>
        <TabPane tabId="8">
          <TabDemo content={DemoData[7].BuildableComponentsDemo} />
          <BuildableComponentsTable />
        </TabPane>
        <TabPane tabId="9">
          <TabDemo content={DemoData[8].PersonalzationDemo} />
          <PersonalzationTable />
        </TabPane>
        <TabPane tabId="10">
          <CustomFieldsTable />
        </TabPane>
        <TabPane tabId="11">
          <VendorTable />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default Navs
