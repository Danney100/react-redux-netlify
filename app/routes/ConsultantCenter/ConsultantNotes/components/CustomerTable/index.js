import React from 'react'
import {Table, Pagination, Row, Col, PaginationLink, PaginationItem} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const CustomerTable = () => {
  return (
    <div>
      <Row>
        <Col md={{size: 6}}>
          <h5>
            <span className="text-dark font-weight-bold">Personally-Sponsored Consultants</span>
          </h5>
        </Col>
        <Col md={{size: 2, offset: 4}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Display ID</span>
              </th>
              <th>
                <span>First Name</span>
              </th>
              <th>
                <span>Last Name</span>
              </th>
              <th>
                <span>Email</span>
              </th>
              <th>
                <span>Join Date</span>
              </th>
              <th>
                <span>Type</span>
              </th>
              <th>
                <span>Status</span>
              </th>
            </tr>
          </thead>
        </Table>
        <div className="p-1 d-flex justify-content-between">
          <div className="d-flex">
            <Pagination
              size="md"
              className="pagination justify-content-end"
              aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">0</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#"></PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <div>
            <span>No items to display</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerTable
