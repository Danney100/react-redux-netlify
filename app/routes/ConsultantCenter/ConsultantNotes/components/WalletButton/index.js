import React from 'react'
import {Row} from 'reactstrap'
import WalletEditButton from '../WalletEditButton'
import TransactionButton from '../TransactionButton'

const WalletButton = () => {
  return (
    <div>
      <WalletEditButton />
      <TransactionButton />
    </div>
  )
}

export default WalletButton
