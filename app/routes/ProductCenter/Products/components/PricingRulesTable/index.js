import React from 'react'
import {Table, Col, Row, Button} from 'reactstrap'

const PricingRulesTable = () => {
  return (
    <div>
      <Row>
        <Col className="pagination justify-content-end">
          <Button color="spotify">
            <i className="fa fa-plus mr-2"></i>
            Creat/Edit Pricing Rules
          </Button>
        </Col>
      </Row>
      <div className="border mt-3 mb-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th>
                <span>Apply</span>
              </th>
              <th>
                <span>Rule Type</span>
              </th>
              <th>
                <span>Name</span>
              </th>
              <th>
                <span>Description</span>
              </th>
              <th>
                <span></span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
            <tr>
              <th>
                <span>
                  <input type="checkbox" className="d flex justifycontent-start"></input>
                </span>
              </th>
              <th>
                <span>Normal</span>
              </th>
              <th>
                <span>Ms 1/2 Case</span>
              </th>
              <th>
                <span>Ms 1/2 Case</span>
              </th>
              <th>
                <span></span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
            <tr>
              <th>
                <span>
                  <input type="checkbox" className="d flex justifycontent-start"></input>
                </span>
              </th>
              <th>
                <span>Normal</span>
              </th>
              <th>
                <span>Ms 1/2 Case</span>
              </th>
              <th>
                <span>Ms 1/2 Case</span>
              </th>
              <th>
                <span></span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
      <div className="text-left d-flex justify-content-between">
        <Button color="danger">
          <i className="fa fa-times mr-2"></i>
          Cancel
        </Button>
        <Button color="info">
          <i className="fa fas fa-check-circle mr-1"></i>
          Save
        </Button>
      </div>
    </div>
  )
}

export default PricingRulesTable
