import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, Row, Col, Input, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import Heading from './components/Heading'
import PromotionalRewards from './components/PromotionalRewards'
import iconSearch from 'images/commonIcons/search.svg'
import CouponTypes from './components/CouponTypes'

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
    '& .searchIcon': {
      backgroundImage: `url(${iconSearch})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundOrigin: 'content-box',
    },
    '& .sc-nav-tabs__action': {
      borderBottom: '1px solid #ebe9e8',
    },
    [theme.breakpoints.down('sm')]: {
      '& .sc-nav-tabs__action': {
        borderBottom: 'none',
      },
    },
  },
}))

const RewardsManager = () => {
  const classes = useStyles()

  const [isExpired, setIsExpired] = useState(false)

  const [activeTab, setActiveTab] = useState(2)

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Pricing & Discounts > Price Rule Manager')
  }, [])

  const getTabHeading = () => {
    if (activeTab === 2) {
      return (
        <>
          <Input
            type="checkbox"
            onChange={() => setIsExpired(!isExpired)}
            className="ml-0 position-relative mt-0"
          />
          <span className={`${isExpired ? 'active' : 'inactive'} pl-2`}>Show Expired</span>
        </>
      )
    } else if (activeTab === 3) {
      return (
        <Col lg={4}>
          <Input type="search" placeholder="search" className="searchIcon" />
        </Col>
      )
    } else return ''
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <Row className="mt-3">
        <Col md={12} sm={12} xs={12}>
          <Card className="sc-card mb-3">
            <div className="d-flex justify-content-between flex-wrap px-3 mb-3">
              <Nav className="sc-nav-tabs sc-sfui-text-semibold flex-nowrap">
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === 1 ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle(1)
                    }}>
                    Tasting Host Rewards
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === 2 ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle(2)
                    }}>
                    Promotional Rewards
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`sc-nav-tabs__item ${
                    activeTab === 3 ? 'sc-nav-tabs__item--active' : ''
                  }`}>
                  <NavLink
                    className="sc-nav-tabs__link"
                    onClick={() => {
                      toggle(3)
                    }}>
                    Coupon Types
                  </NavLink>
                </NavItem>
              </Nav>
              <Col className="d-flex sc-nav-tabs__action align-items-center justify-content-end p-0 mt-3 mt-lg-0 mb-2 mb-lg-0 border-bottom-xs-0">
                {getTabHeading()}
              </Col>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}></TabPane>
              <TabPane tabId={2}>
                <PromotionalRewards />
              </TabPane>
              <TabPane tabId={3}>
                <CouponTypes />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RewardsManager
