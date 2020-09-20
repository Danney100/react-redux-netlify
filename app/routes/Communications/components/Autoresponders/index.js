import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import CommonCard from 'routes/components/CommonCard'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  font: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  size: {
    height: '300px',
  },
  boxStyle: {
    marginTop: 10,
  },
})
const Autoresponders = () => {
  const history = useHistory()
  const routeChange = () => {
    history.push('/communications/autoresponders/edit-autoresponders')
  }
  const classes = useStyles()
  const [content, setContent] = useState('')
  const context = useContext(AppContext)
  const {setTitle} = context
  const data1 = [
    {
      id: 1,
      Type: 'Broadcast Messages Sent',
      Enabled: 'Yes',
      Date: '4/10/2019',
      Recipient: 'Company',
    },
  ]
  const data2 = [
    {
      id: 1,
      Type: 'Compensation Paid Into Sky Wallet',
      Enabled: 'No',
      Date: '11/29/2018',
      Recipient: 'Consultant',
    },
  ]
  const data3 = [
    {
      id: 1,
      Type: 'Compensation Run Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data4 = [
    {
      id: 1,
      Type: 'Confirm Email For Duration',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data5 = [
    {
      id: 1,
      Type: 'Confirm Your Account',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data6 = [
    {
      id: 1,
      Type: 'Consultant Cancelled',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
    {
      id: 2,
      Type: 'Consultant Cancelled',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
    {
      id: 3,
      Type: 'Consultant Cancelled',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
    {
      id: 4,
      Type: 'Consultant Cancelled',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data7 = [
    {
      id: 1,
      Type: 'Consultant Confirm Email With Code',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data8 = [
    {
      id: 1,
      Type: 'Consultant Order Posted',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data9 = [
    {
      id: 1,
      Type: 'Consultant Order Shipped',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data10 = [
    {
      id: 1,
      Type: 'Consultant Public Profile Info Changed',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data11 = [
    {
      id: 1,
      Type: 'Consultant Signup',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data12 = [
    {
      id: 1,
      Type: 'Consultant Subscription Created',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data13 = [
    {
      id: 1,
      Type: 'Consultant Subscription Edited',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data14 = [
    {
      id: 1,
      Type: 'Consultant Subscription Order Payment Declined',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data15 = [
    {
      id: 1,
      Type: 'Consultant Subscription Order Posted',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data16 = [
    {
      id: 1,
      Type: 'Coupon Added To Consultant Sky Wallet  ',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data17 = [
    {
      id: 1,
      Type: 'Coupon Added To Customer Sky Wallet',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data18 = [
    {
      id: 1,
      Type: 'Customer Cancelled',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data19 = [
    {
      id: 1,
      Type: 'Customer Confirm Email With Code',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data20 = [
    {
      id: 1,
      Type: 'Customer Order Posted',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data21 = [
    {
      id: 1,
      Type: 'Customer Order Shipped',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data22 = [
    {
      id: 1,
      Type: 'Customer Profile Info Changed',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data23 = [
    {
      id: 1,
      Type: 'Customer Signup',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data24 = [
    {
      id: 1,
      Type: 'Customer Subscription Created',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data25 = [
    {
      id: 1,
      Type: 'Customer Subscription Edited',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data26 = [
    {
      id: 1,
      Type: 'Customer Subscription Order Payment Declined',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data27 = [
    {
      id: 1,
      Type: 'Customer Subscription Order Posted',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data28 = [
    {
      id: 1,
      Type: 'Forgot Password',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data29 = [
    {
      id: 1,
      Type: 'Lead Signup',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data30 = [
    {
      id: 1,
      Type: 'New Customer Account Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data31 = [
    {
      id: 1,
      Type: 'Party RSVP',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data32 = [
    {
      id: 1,
      Type: 'Send Gift Card Code ',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data33 = [
    {
      id: 1,
      Type: 'Shipping File Import Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data34 = [
    {
      id: 1,
      Type: 'Shipping File Run Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data35 = [
    {
      id: 1,
      Type: 'Subscription Payment Run Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]
  const data36 = [
    {
      id: 1,
      Type: 'Subscription Run Completion',
      Enabled: 'No',
      Date: '2018',
      Recipient: 'Consultant',
    },
  ]

  useEffect(() => {
    setTitle('Communications > Autoresponders')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Autoresponders Manager</p>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="The autoresponder manager allows the user to view and manage a preconfigured list of all autoresponders. An autoresponder is a preset message that will be delivered to the end reciepient when a specific action occurs."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Row>
        <Col className="mb-4 mt-2 d-flex justify-content-end">
          <CommonButton
            title="Expand All"
            buttonType="addBannerButton"
            wrapperClass="float-lg-right ml-3"
            onClick={() => routeChange()}
          />
        </Col>
      </Row>
      <CommonCard title="Broadcast Messages Sent" data={data1} />
      <CommonCard title="Compensation Paid Into Sky Wallet" data={data2} />
      <CommonCard title="Compensation Run Completion" data={data3} />
      <CommonCard title="Confirm Email For Duration" data={data4} />
      <CommonCard title="Confirm Your Account" data={data5} />
      <CommonCard title="Consultant Cancelled" data={data6} />
      <CommonCard title="Consultant Confirm Email With Code" data={data7} />
      <CommonCard title="Consultant Order Posted" data={data8} />
      <CommonCard title="Consultant Order Shipped" data={data9} />
      <CommonCard title="Consultant Public Profile Info Changed" data={data10} />
      <CommonCard title="Consultant Signup" data={data11} />
      <CommonCard title="Consultant Subscription Created" data={data12} />
      <CommonCard title="Consultant Subscription Edited" data={data13} />
      <CommonCard title="Consultant Subscription Order Payment Declined" data={data14} />
      <CommonCard title="Consultant Subscription Order Posted" data={data15} />
      <CommonCard title="Coupon Added To Consultant Sky Wallet" data={data16} />
      <CommonCard title="Coupon Added To Customer Sky Wallet" data={data17} />
      <CommonCard title="Customer Cancelled" data={data18} />
      <CommonCard title="Customer Confirm Email With Code" data={data19} />
      <CommonCard title="Customer Order Posted" data={data20} />
      <CommonCard title="Customer Order Shipped" data={data21} />
      <CommonCard title="Customer Profile Info Changed" data={data22} />
      <CommonCard title="Customer Signup" data={data23} />
      <CommonCard title="Customer Subscription Created" data={data24} />
      <CommonCard title="Customer Subscription Edited" data={data25} />
      <CommonCard title="Customer Subscription Order Payment Declined" data={data26} />
      <CommonCard title="Customer Subscription Order Posted" data={data27} />
      <CommonCard title="Forgot Password" data={data28} />
      <CommonCard title="Lead Signup" data={data29} />
      <CommonCard title="New Customer Account Completion" data={data30} />
      <CommonCard title="Party RSVP" data={data31} />
      <CommonCard title="Send Gift Card Code" data={data32} />
      <CommonCard title="Shipping File Import Completion" data={data33} />
      <CommonCard title="Shipping File Run Completion" data={data34} />
      <CommonCard title="Subscription Payment Run Completion" data={data35} />
      <CommonCard title="Subscription Run Completion" data={data36} />
    </div>
  )
}

export default Autoresponders
