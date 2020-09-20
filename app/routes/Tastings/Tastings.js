import React, {useEffect, useContext} from 'react'
import AppContext from 'components/App/AppContext'
import {Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import ValueCard from './components/ValueCard'
import BlogCard from './components/BlogCard'
import BillingMethodCard from './components/BillingMethodCard'
import ShippingAddressCard from './components/ShippingAddressCard'
import ContactInfoCard from './components/ContactInfoCard'
import VerificationsCard from './components/VerificationsCard'
import ShoppingCartCard from './components/ShoppingCartCard'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  root: {
    '& .card': {
      border: 'none',
      borderRadius: '5px',
      boxShadow: '0 3px 15px 0 rgba(195, 185, 185, 0.12)',
    },
    '& .form-check-input': {
      position: 'relative',
    },
    '& .title': {
      fontSize: '32px',
      color: '#403839',
    },
    '& .card-value': {
      color: '#6c6766',
      letterSpacing: '0.2px',
      fontWeight: 900,
      marginLeft: '1rem',
      fontSize: ' 14px',
    },
    '& .sub-title': {
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#423b3c',
    },
    '& .sub-heading': {
      lineHeight: 1.43,
      letterSpacing: '0.2px',
      fontWeight: 900,
      color: '#6c6766',
    },
    '& .c-card': {
      fontSize: '13px',
    },
    '& .add-coupon': {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#423b3c',
    },
    '& .btn-secondary': {
      margin: '0',
    },
  },
})

const MainButtonRow = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="mt-2 mt-lg-0">
        <CommonButton buttonType="cancelItemButton" title="Add Gift Message" onClick={() => {}} />
      </div>
      <div className="mt-2 mt-lg-0">
        <CommonButton
          buttonType="cancelItemButton"
          title="Save Order For Later"
          onClick={() => {}}
        />
      </div>
      <div className="mt-2 mt-lg-0">
        <CommonButton buttonType="addItemButton" title="Place Your Order" onClick={() => {}} />
      </div>
    </div>
  )
}

const BlogButton = () => {
  return (
    <Col sm={12} className="p-0">
      <div className="mt-4">
        <CommonButton buttonType="addItemButton" title="Proceed to Cart" onClick={() => {}} />
      </div>
      <div className="mt-3">
        <CommonButton buttonType="cancelItemButton" title="Back to Shopping" onClick={() => {}} />
      </div>
    </Col>
  )
}

const Tastings = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Tastings Manager > Shopping Cart')
  }, [])

  const note =
    ' To split payment for an order select “Save Order For Later” which will return you to the Party Details page. Then select “Pay For Order” where you can select how much you want to pay under “Payment Amount”. You can repeat this process for splitting the balance due on an order over multiple payment methods.'

  return (
    <div className={`${classes.root} mt-2 mt-lg-0 px-3 px-lg-0 pb-5`}>
      <h2 className="title mb-0 sc-din-bold">Shopping Cart</h2>
      <Row>
        <Col md={8} lg={9}>
          <ValueCard />
          <BillingMethodCard />
          <ShippingAddressCard />
          <ContactInfoCard />
          <VerificationsCard />
          <p className="text-justify sc-avenir-roman" style={{color: '#707070'}}>
            {note}
          </p>
          <MainButtonRow />
        </Col>
        <Col md={4} lg={3}>
          <BlogCard />
          <ShoppingCartCard />
          <BlogButton />
        </Col>
      </Row>
    </div>
  )
}

export default Tastings
