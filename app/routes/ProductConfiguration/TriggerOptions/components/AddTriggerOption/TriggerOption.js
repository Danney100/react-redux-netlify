import React from 'react'
import {Card, CardBody, Row, Col, Form, FormGroup, Label, Input, CardHeader} from 'reactstrap'

const TriggerOption = () => {
  return (
    <Card>
      <CardHeader className="bg-primary text-white" tag="h5">
        Trigger Option
      </CardHeader>
      <CardBody>
        <Card>
          <Row className="border text-black m-0 p-2 rounded">
            <Col lg={1} sm={1} xs={2} className="text-center">
              <span className="fa-stack fa-lg">
                <i className="fa fas fa-question-circle fa-2x text-warning"></i>
              </span>
            </Col>
            <Col sm={11} lg={11} xs={10}>
              <span>
                Each trigger option requires a unique name. You can also add an optional description
                for internal purposes and dictate the order in which different trigger options would
                apply if more than one is triggered.
              </span>
            </Col>
          </Row>
        </Card>
        <Form className="">
          <FormGroup row className="my-3 text-black">
            <Label sm="3" className="text-lg-right" for="display_name">
              Display Name
            </Label>
            <Col sm="5">
              <Input type="text" id="display_name" />
            </Col>
          </FormGroup>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right text-black" for="description">
              Description
            </Label>
            <Col sm="5">
              <Input type="textarea" id="description" />
            </Col>
          </FormGroup>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right text-black" for="apply_order">
              Apply Order
            </Label>
            <Col sm="5">
              <Input type="number" id="apply_order" />
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default TriggerOption
