import React from 'react'
import {Table, Row, Col, FormGroup, Input} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const LeadTable = () => {
  return (
    <div>
      <Row>
        <Col md={{size: 6}}>
          <h5>
            <span className="text-dark font-weight-bold">Leads</span>
          </h5>
        </Col>
        <Col md={{size: 2, offset: 4}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mt-3 mb-3">
        <Table striped responsive>
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
                <span>Source</span>
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
      </div>
    </div>
  )
}

export default LeadTable
