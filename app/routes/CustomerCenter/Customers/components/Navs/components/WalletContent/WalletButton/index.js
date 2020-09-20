import React from 'react'
import WalletEditButton from '../WalletEditButton'
import TransactionButton from '../TransactionButton'

const WalletButton = () => {
  return (
    <div className="sc-btn-action-wrapper d-flex flex-wrap align-items-center justify-content-between">
      <WalletEditButton />
      <TransactionButton />
    </div>
  )
}

export default WalletButton
