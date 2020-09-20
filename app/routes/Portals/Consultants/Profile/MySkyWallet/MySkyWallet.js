import React, {useEffect, useContext, useState} from 'react'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import BonusCredits from './components/BonusCredits'
import Coupons from './components/Coupons'
import GiftCard from './components/GiftCard'
import HostOrderCredit from './components/HostOrderCredit'
import PurchasedGiftCard from './components/PurchasedGiftCard'
import RefundCredits from './components/RefundCredits'
import SampleCredits from './components/SampleCredits'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MySkyWallet = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Profile > Sky Wallet')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Sky Wallet</p>
        </Col>
      </Row>
      <Row>
        <CommonDemo
          item="danger"
          content="Your SkyWallet is used to manage all your commission earnings, available credits,
           and coupons. Use your SkyWallet to view available balances and transfer balances 
           (where applicable). Open balances will be available during order payment processing to
            use as payments (cash and credits) or discounts(coupons) on orders."
        />
      </Row>
      <Row xs={12} sm={12} md={12}>
        <Col className="mx-2">
          <SampleCredits />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <GiftCard />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <RefundCredits />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <BonusCredits />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <RefundCredits />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <HostOrderCredit />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <Coupons />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <PurchasedGiftCard />
        </Col>
      </Row>
    </div>
  )
}

export default MySkyWallet
