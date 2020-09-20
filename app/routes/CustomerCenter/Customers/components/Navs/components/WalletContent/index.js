import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import SkyWalletTable from './SkyWalletTable'

const {WalletDemo} = DemoData

const WalletContent = () => {
  return (
    <div>
      <CommonDemo content={WalletDemo} />
      <SkyWalletTable />
    </div>
  )
}

export default WalletContent
