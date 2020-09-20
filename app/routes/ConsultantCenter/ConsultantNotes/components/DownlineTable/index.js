import React from 'react'
import {Table, Row, Label, Input, Col, Pagination, PaginationLink, PaginationItem} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const DownlineTable = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col sm={{size: 2}}>
          <h5>
            <span className="text-dark font-weight-bold">Downline</span>
          </h5>
        </Col>
        <Col sm={2} className="my-1">
          <Input type="select" name="select" id="exampleSelect">
            <option>Enroller</option>
            <option>Sponsor</option>
          </Input>
        </Col>
        <Col sm={{size: 2, offset: 6}} className="my-1 pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Seq</span>
              </th>
              <th>
                <span>Level</span>
              </th>
              <th>
                <span>Display</span>
              </th>
              <th>
                <span>First Name</span>
              </th>
              <th>
                <span>Last Name</span>
              </th>
              <th>
                <span>Join Data</span>
              </th>
              <th>
                <span>Type</span>
              </th>
            </tr>
            <tr>
              <td colSpan={7}>
                <Row className="d-flex justify-content-between">
                  <Col className="d-flex">
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
                  </Col>
                  <Col>
                    <Input style={{width: 100}} type="select" name="select" id="exampleSelect">
                      <option>All</option>
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </Input>
                  </Col>
                  <Col>
                    <Label>
                      <span>items per page</span>
                    </Label>
                  </Col>
                  <Col className="pagination justify-content-end">
                    <Label>
                      <span>No items to display</span>
                    </Label>
                  </Col>
                </Row>
              </td>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  )
}

export default DownlineTable
