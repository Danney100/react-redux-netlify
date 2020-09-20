import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import OrderTable from './OrderTable'

const {OrderDemo} = DemoData

const OrderContent = () => {
  return (
    <div>
      <CommonDemo content={OrderDemo} />
      <OrderTable />
    </div>
  )
}

export default OrderContent
