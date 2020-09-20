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

const StatusName = () => {
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
          <td className={classes.font2}>Inactive</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Incomplete</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.font2}>Suspended</td>
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
      </tbody>
    </Table>
  )
}

export default StatusName
