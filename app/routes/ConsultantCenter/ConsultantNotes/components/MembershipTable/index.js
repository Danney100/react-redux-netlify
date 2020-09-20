import React from 'react'
import {Table, Pagination,Row, Col, PaginationLink, PaginationItem} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const MembershipTable = () => {
  return (
    <div>
      <Row>
        <Col sm={{size: 4}}>
          <h5>
            <span className="text-dark font-weight-bold">Memberships</span>
          </h5>
        </Col>
        <Col sm={{size: 2, offset: 6}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>SKU</span>
              </th>
              <th>
                <span>Product Name</span>
              </th>
              <th>
                <span>Subscription ID</span>
              </th>
              <th>
                <span>Orders Created</span>
              </th>
              <th>
                <span>Frequency</span>
              </th>
              <th>
                <span>Date Created</span>
              </th>
              <th>
                <span>Last Processed Date</span>
              </th>
              <th>
                <span>Next Processing Date</span>
              </th>
              <th>
                <span>Date Cancelled</span>
              </th>
              <th>
                <span>Shipping Method</span>
              </th>
              <th>
                <span></span>
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
                <PaginationLink href="#">
                  0
                </PaginationLink>
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

export default MembershipTable
