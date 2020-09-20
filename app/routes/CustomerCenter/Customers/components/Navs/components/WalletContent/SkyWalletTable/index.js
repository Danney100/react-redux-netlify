import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Table} from 'components'
import WalletButton from '../WalletButton'
import {makeStyles} from '@material-ui/core/styles'
import {getWalletBalance} from 'api'
import {showErrorNotification} from 'helpers/util'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 21,
    color: '#403839',
  },
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
})

const SkyWalletTable = ({user, customer}) => {
  const classes = useStyles()
  const token = user.get('token')
  const customerId = customer.get('customerToDisplay')

  const [balance, setBalance] = useState(null)

  useEffect(() => {
    if (customerId) {
      getWalletBalance(customerId, token, 'customer')
      .then((res) => {
        if (!res?.hasError) {
          setBalance(res.balance)
        } else {
          console.log(res)
          showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
    }
  }, [customerId])

  return (
    <div>
      <div className="mx-4">
        <span className={classes.title}>Loyalty Balances</span>
      </div>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead className={classes.theadFont}>
            <tr>
              <th>
                <span className="ml-2">Balance Type</span>
              </th>
              <th>
                <span>Balance</span>
              </th>
              <th className="sc-btn-action-wrapper"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.tbodyFont}>Fast Start Bonus Credits </td>
              <td className={classes.tbodyFont}>
                {balance || (<i className="fa fa-refresh fa-spin"></i>)}
              </td>
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

SkyWalletTable.propTypes = {
  user: PropTypes.object,
  customer: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  customer: state.customer,
})

export default connect(mapStateToProps)(SkyWalletTable)
