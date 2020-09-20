import React from 'react'
import {Table, Col, Row, Label, PaginationItem, Pagination, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

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

const PartiesContent = () => {
  const classes = useStyles()

  return (
    <div className="mt-3">
      <Row className="mx-2">
        <Col sm={{size: 6}} lg={{size: 6}}>
          <span className={classes.title}>Parties</span>
        </Col>
        <Col
          sm={{size: 3, offset: 3}}
          lg={{size: 2, offset: 4}}
          className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <Table responsive striped>
        <thead className={classes.theadFont}>
          <tr>
            <th>
              <span className="ml-2">TastingID</span>
            </th>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Tasting Data</span>
            </th>
            <th>
              <span>Address</span>
            </th>
            <th>
              <span>Orders</span>
            </th>
            <th>
              <span>Status</span>
            </th>
            <th>
              <span>Type</span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
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
          <Label className={classes.tbodyFont}>No items to display</Label>
        </Col>
      </Row>
    </div>
  )
}

export default PartiesContent
