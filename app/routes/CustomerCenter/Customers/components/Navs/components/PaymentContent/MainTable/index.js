import React from 'react'
import {Table, Col, Row, Label, PaginationItem, Pagination, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PaymentButton from '../PaymentButton'

const useStyles = makeStyles({
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
  paginationStyle: {
    height: 40,
    width: 30,
  },
  paginationCenterLink: {
    height: 40,
    width: 40,
  },
  paginationCenterItem: {
    backgroundColor: '#6c6766',
  },
})

const MainTable = () => {
  const classes = useStyles()

  return (
    <div className="mt-3">
      <Table responsive striped>
        <thead className={classes.theadFont}>
          <tr>
            <th>
              <span className="ml-2">Last4ofCC</span>
            </th>
            <th>
              <span>Exp Date</span>
            </th>
            <th>
              <span>Type</span>
            </th>
            <th>
              <span>Name on Card</span>
            </th>
            <th>
              <span>Address</span>
            </th>
            <th>
              <span>Default</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={classes.tbodyFont}>
              <span>4111111111111111</span>
            </th>
            <th className={classes.tbodyFont}>
              <span>06/2020</span>
            </th>
            <th className={classes.tbodyFont}>
              <span>Visa</span>
            </th>
            <th className={classes.tbodyFont}>
              <span>Dora Russell</span>
            </th>
            <th className={classes.tbodyFont}>
              <span>761 Wodgi Road Suite 222 Jopgiwaz, Florida 72046 United States</span>
            </th>
            <th className={classes.tbodyFont}>
              <span>Yes</span>
            </th>
            <th>
              <PaymentButton />
            </th>
          </tr>
        </tbody>
      </Table>
      <Row className="mt-3 mx-2">
        <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem active className={classes.paginationCenterItem}>
              <PaginationLink className={classes.paginationCenterLink}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last className={classes.paginationStyle} />
            </PaginationItem>
          </Pagination>
        </Col>
        <Col className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
          <Label className={classes.tbodyFont}>1-1 of 1 items</Label>
        </Col>
      </Row>
    </div>
  )
}

export default MainTable
