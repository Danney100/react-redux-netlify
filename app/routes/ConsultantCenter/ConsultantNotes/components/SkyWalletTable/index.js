import React from 'react'
import {Table} from 'reactstrap'
import WalletButton from '../WalletButton'

const SkyWalletTable = () => {
  return (
    <div>
      <h5>
        <span className="text-dark">Sky Wallet Balances</span>
      </h5>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Balance Type</span>
              </th>
              <th>
                <span>Balance</span>
              </th>
              <th style={{width: '220px'}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fast Start Bonus Credits </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
            <tr>
              <td>Gift Card </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
            <tr>
              <td>Host Order Credit </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
            <tr>
              <td>Personal Sales Sample Credits </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
            <tr>
              <td>Refund - Credits </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
            <tr>
              <td>Refund Credits </td>
              <td>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default SkyWalletTable
