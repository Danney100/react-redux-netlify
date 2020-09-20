import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import PaymentTable from './PaymentTable'

const {PaymentDemo} = DemoData

const PaymentContent = () => {
  return (
    <div>
      <CommonDemo content={PaymentDemo} />
      <PaymentTable />
    </div>
  )
}

export default PaymentContent
