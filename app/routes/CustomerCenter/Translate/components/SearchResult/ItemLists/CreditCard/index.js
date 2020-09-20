import React from 'react'
import {Table} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  font1: {
    fontSize: 14,
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  font2: {
    fontSize: 14,
    color: '#6c6766',
    fontFamily: 'SFUIText-Medium',
  },
})

const CreditCard = () => {
  const classes = useStyles()

  return (
    <Table striped>
      <thead>
        <tr>
          <th className={classes.font1}>Field</th>
          <th></th>
          <th className={classes.font1}>English</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classes.font2}>Billing Address</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Cannot add expired credit card.</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Card Number</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Are you sure you want to delete this address?</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Cannot delete mailing address</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>City</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Company</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Confirm</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Country</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Country Name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Default</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Edit</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Edit Address</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>First Name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>First name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Invalid postal code</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Last Name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Last name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Last name 2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Last name 2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Mailing</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>New Address</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Nic Name</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>No</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CreditCard
