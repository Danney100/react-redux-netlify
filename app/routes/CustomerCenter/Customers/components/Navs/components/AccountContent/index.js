import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import AccountTable from './AccountTable'

const {AccountDemo} = DemoData

const AccountContent = () => {
  return (
    <div>
      <CommonDemo content={AccountDemo} />
      <AccountTable />
    </div>
  )
}

export default AccountContent
