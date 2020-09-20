import React from 'react'
import {Table, Col, Row, Label, PaginationItem, Pagination, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AddressButton from '../AddressButton'
import DemoData from 'routes/CustomerCenter/CustomerCreate/components/DemoData.json'

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

const NotesTable = () => {
  const classes = useStyles()
  return (
    <div className="mt-3">
      <Table responsive striped>
        <thead className={classes.theadFont}>
          <tr>
            <th>
              <span className="ml-2">Street1</span>
            </th>
            <th>
              <span>Street2</span>
            </th>
            <th>
              <span>City</span>
            </th>
            <th>
              <span>State</span>
            </th>
            <th>
              <span>Zip</span>
            </th>
            <th>
              <span>Country Name</span>
            </th>
            <th>
              <span>Default</span>
            </th>
            <th>
              <span>Mailing</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.street_1}</th>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.street_2}</th>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.city}</th>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.state}</th>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.postal_code}</th>
            <th className={classes.tbodyFont}>{DemoData.CreditCard.country}</th>
            <th className={classes.tbodyFont}>Yes</th>
            <th className={classes.tbodyFont}>Yes</th>
            <th>
              <AddressButton />
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

export default NotesTable
