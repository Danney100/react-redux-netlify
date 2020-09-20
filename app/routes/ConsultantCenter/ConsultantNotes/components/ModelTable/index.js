import React from 'react'
import {Table, Col, Row, Pagination, PaginationLink, PaginationItem} from 'reactstrap'

const ModelTable = () => {
  return (
    <div>
      <div className="mt-2">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Transaction Date</span>
              </th>
              <th>
                <span>Amount</span>
              </th>
              <th>
                <span>Balance</span>
              </th>
              <th>
                <span>Details and Join</span>
              </th>
            </tr>
          </thead>
        </Table>
        <Row className="ml-1 d-flex justify-content-between">
          <Col>
            <Pagination size="md" className="pagination" aria-label="Page navigation example">
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
          </Col>
          <Col>
            <span className="text-dark">No items to display</span>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ModelTable
