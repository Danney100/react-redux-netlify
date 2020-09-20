import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import CustomerTable from '../../CustomerTable'

const {CustomerDemo} = DemoData

const CustomerContent = () => {
  return (
    <div>
      <CommonDemo content={CustomerDemo} />
      <div className="mx-3">
        <CustomerTable />
      </div>
    </div>
  )
}

export default CustomerContent
