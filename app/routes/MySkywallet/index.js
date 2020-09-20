import React, {useContext, useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'

import CommonDemo from 'routes/components/CommonDemo'
import CommonCards from 'routes/components/CommonCards'
import PersonalSalesCard from 'routes/MySkywallet/components/PersonalSalesCard'
import PurchasedGiftCard from 'routes/MySkywallet/components/PurchasedGiftCard'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})
const index = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  const data1 = [
    {
      id: 1,
      TransactionDate: 'Saturday, May 25, 2019 5:37:00 AM',
      DetailsandJoin: '',
      Amount: '$50.00',
      Balance: '$60.00',
    },
    {
      id: 2,
      TransactionDate: 'Thursday, March 15, 2018 11:54:48 PM',
      DetailsandJoin: 'Test adding balance - IDSTC',
      Amount: '$10.00',
      Balance: '$10.00',
    },
  ]
  const data2 = [
    {
      id: 1,
      TransactionDate: '',
      DetailsandJoin: '',
      Amount: '',
      Balance: '',
    },
  ]
  const data3 = [
    {
      id: 1,
      TransactionDate: '',
      DetailsandJoin: '',
      Amount: '',
      Balance: '',
    },
  ]
  const data4 = [
    {
      id: 1,
      TransactionDate: '',
      DetailsandJoin: '',
      Amount: '',
      Balance: '',
    },
  ]
  const data5 = [
    {
      id: 1,
      TransactionDate: '',
      DetailsandJoin: '',
      Amount: '',
      Balance: '',
    },
  ]

  const data6 = [
    {
      id: 2,
      TransactionDate: '',
      DetailsandJoin: '',
      Amount: '',
      Balance: '',
    },
  ]

  useEffect(() => {
    setTitle('My Sky Wallet')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Sky Wallet</p>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="Your SkyWallet is used to manage all your commission earnings, available credits, and coupons. Use your SkyWallet to view available balances and transfer balances (where applicable). Open balances will be available during order payment processing to use as payments (cash and credits) or discounts(coupons) on orders."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <CommonCards title="Personal Sales Sample Credits $60.00" data={data1} />
      <CommonCards title="Gift Card $0.00" data={data2} />
      <CommonCards title="Refund Credits $0.00" data={data3} />
      <CommonCards title="Fast Start Bonus Credits $0.00" data={data4} />
      <CommonCards title="Refund - Credits $0.00" data={data5} />
      <CommonCards title="Host Order Credit $0.00" data={data6} />
      <PersonalSalesCard />
      <PurchasedGiftCard />
    </div>
  )
}

export default index
