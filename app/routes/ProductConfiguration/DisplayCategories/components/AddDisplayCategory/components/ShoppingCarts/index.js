import React, {useState} from 'react'
import {Card, CardBody, Row, Col, FormGroup, Input, Label} from 'reactstrap'

const ShoppingCarts = () => {
  const sites = [
    'Corporate Website',
    'Replicated Websites',
    'Website Party',
    'Consultant Join',
    'Portal Consultant',
    'Portal Customer',
    'Portal Party',
    'Flight',
    'Flight Consultant',
    'Consultant Subscription',
    'Flight Customer',
    'Customer Subscription',
    'Promotional Rewards',
    'Host Rewards',
  ]
  const [isCheckAll, setCheckAll] = useState(false)

  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm={6}>
            <span className="sub-title">Shopping Carts</span>
          </Col>
          <Col sm={6} className="d-flex mt-1 justify-content-lg-end ml-4 ml-lg-0">
            <Label check className={`${isCheckAll ? 'active' : 'label'}`}>
              <Input type="checkbox" onClick={() => setCheckAll(!isCheckAll)} /> Select All
            </Label>
          </Col>
        </Row>
        <hr />
        <Row className="mx-3 mx-md-5 px-md-5">
          {sites.map((site, index) => {
            return (
              <Col lg={4} md={6} sm={12} xs={12} key={index}>
                <FormGroup row className="ml-0 checkbox">
                  <Input type="checkbox" />
                  <Label className="label">{site}</Label>
                </FormGroup>
              </Col>
            )
          })}
        </Row>
      </CardBody>
    </Card>
  )
}

export default ShoppingCarts
