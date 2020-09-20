import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import Heading from './components/Heading'
import PriceDiscountsTable from './components/PriceDiscountsTable'
import RewardDiscountsTable from './components/RewardDiscountTable'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .table-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      fontStretch: 'condensed',
      color: '#403839',
    },
    '& .active-check': {
      color: '#de8b6d',
    },
    '& .inactive-check': {
      color: '#403839',
    },
    '& .commonBtn': {
      height: '40px',
      width: '300px',
    },
    '& .sc-nav-tabs__action': {
      borderBottom: '1px solid #ebe9e8',
    },
    [theme.breakpoints.down('379')]: {
      '& .sc-nav-tabs__action': {
        borderBottom: 'none',
      },
    },
    '& .rightHeading': {
      borderBottom: '1px solid #ebe9e8',
    },
    [theme.breakpoints.down('576')]: {
      '& .rightHeading': {
        borderBottom: 'none',
      },
    },
  },
}))

const PriceRuleManager = () => {
  const classes = useStyles()

  const [isActive, setIsActive] = useState(false)

  const [activeTab, setActiveTab] = useState(1)

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const getTabHeading = () => {
    if (activeTab === 1) {
      return (
        <div className="mt-3 d-flex justify-content-sm-end ml-3 pl-1">
          <Input
            type="checkbox"
            onChange={() => setIsActive(!isActive)}
            className="position-relative"
          />
          <span className={`${isActive ? 'active-check' : 'inactive-check'} pl-2`}>
            Show Inactive
          </span>
        </div>
      )
    } else return ''
  }

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Pricing & Discounts > Discount Rule Manager')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        item="success"
        content="The Discount Rule Manager allows you to configure and manage the discount rules 
        available to your consultants and customers. Price Discounts are hardline discounts that are
        applied directed to the product price. This type of Discount does not require Shoppers to qualify 
        to receive the Discount. Reward Discounts are applied only to Shoppers who meet defined criteria. 
        In instances where multiple Discounts could be applied, only one Discount is applied to the Order. To determine which Discount Rule will be applied, Flight automatically 
        calculates all possible Discounts. Then, selects the option that produces the largest the Discount."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        wrapperClass="mx-0"
      />
      <div className="d-flex justify-content-sm-end">
        <CommonButton
          title="Create New Price Discount Rule"
          buttonType="addItemButton"
          wrapperClass="commonBtn ml-0"
        />
      </div>
      <Card className="my-4">
        <CardBody className="mb-0 px-0">
          <Row className="px-3 mb-3 mx-2">
            <Col className="px-0 border-bottom" md={6} sm={8}>
              <Nav className="sc-sfui-text-semibold">
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === 1 ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle(1)
                    }}>
                    Price Discounts
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === 2 ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link pl-0 pl-sm-3"
                    onClick={() => {
                      toggle(2)
                    }}>
                    Reward Discount
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={6} sm={4} className="px-0 rightHeading">
              {getTabHeading()}
            </Col>
          </Row>
          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              <PriceDiscountsTable />
            </TabPane>
            <TabPane tabId={2}>
              <RewardDiscountsTable />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  )
}

export default PriceRuleManager
