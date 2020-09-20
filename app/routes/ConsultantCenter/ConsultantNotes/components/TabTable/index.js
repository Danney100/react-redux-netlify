import React from 'react'
import {Table, Row, Col, Pagination, PaginationLink, PaginationItem} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const Example = () => {
  return (
    <div>
      <Row>
        <Col sm={{size: 2}}>
          <h5>
            <span className="text-dark font-weight-bold">Earning</span>
          </h5>
        </Col>
        <Col sm={{size: 2, offset: 8}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Posted</span>
              </th>
              <th>
                <span>Compensation Run</span>
              </th>
              <th>
                <span>Amount Paid</span>
              </th>
              <th>
                <span>Currency</span>
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

export default Example
