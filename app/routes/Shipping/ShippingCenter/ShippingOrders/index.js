import React from 'react'
import {Row, Col, Card, CardBody, Table, CardTitle} from 'reactstrap'

export const ShippingOrders = () => {
  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-1">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="text-dark font-weight-bold">
                    Shipping Run Orders (record 3 of 500)
                  </span>
                </div>
              </CardTitle>
            </CardBody>
            <Row className="mx-3 border-top">
              <Col></Col>
              <Table striped borderless responsive>
                <thead>
                  <tr>
                    <th className="text-dark">Order #</th>
                    <th className="text-dark">Order Date</th>
                    <th className="text-dark">Subject ID</th>
                    <th className="text-dark">Shipping Name</th>
                    <th className="text-dark">Shipping Address</th>
                    <th className="text-dark">Shipping City</th>
                    <th className="text-dark">Shipping state</th>
                    <th className="text-dark">Shipping Zip</th>
                    <th className="text-dark">Shipping Country</th>
                    <th className="text-dark">Order State</th>
                    <th className="text-dark">Order Amount</th>
                    <th className="text-dark">Order Line Item</th>
                    <th className="text-dark">Line Item Shipping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingOrders
