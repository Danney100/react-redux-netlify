import React from 'react'
import {Table} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  theadStyle: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
    backgroundColor: '#fcfaf9',
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
})

const ResultTable = () => {
  const classes = useStyles()

  return (
    <div className="mt-3">
      <Table responsive striped>
        <thead className={classes.theadStyle}>
          <tr>
            <th>
              <span>DataAdded </span>
            </th>
            <th>
              <span>Coupon</span>
            </th>
            <th>
              <span>Coupon Code</span>
            </th>
            <th>
              <span>Start Date</span>
            </th>
            <th>
              <span>End Date</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Balance</span>
            </th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}

export default ResultTable
