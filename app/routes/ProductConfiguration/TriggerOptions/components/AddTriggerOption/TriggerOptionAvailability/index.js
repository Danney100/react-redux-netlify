import React from 'react'
import {Card, CardHeader, CardBody, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'
import Websites from './Websites'
import Carts from './Carts'
import ConsultantTypes from './ConsultantTypes'
import ConsultantStatus from './ConsultantStatus'
import CustomerStatus from './CustomerStatus'
import Countries from './Countries'

const TriggerOptionAvailability = () => {
  return (
    <Card className="my-3 text-black">
      <CardHeader className="bg-primary text-white" tag="h5">
        Trigger Option Availability
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
                Configure the availability of each trigger option by selecting the persons, shopping
                carts, and countries for whom the type will be eligible.
              </span>
            </Col>
          </Row>
        </Card>
        <Form>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right" for="start_date">
              Start Date / Time (Asia/Calcutta)
            </Label>
            <Col sm="5">
              <Input type="datetime-local" id="start_date" />
            </Col>
          </FormGroup>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right" for="end_date">
              End Date / Time (Asia/Calcutta)
            </Label>
            <Col sm="5">
              <Input type="datetime-local" id="end_date" />
            </Col>
          </FormGroup>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right" for="form_join">
              Days From Join
            </Label>
            <Col sm="5">
              <Input type="number" id="form_join" />
            </Col>
          </FormGroup>
          <FormGroup row className="my-3">
            <Label sm="3" className="text-lg-right" for="person_type">
              Person Type
            </Label>
            <Col sm="5">
              <Input type="select" id="person_type">
                <option defaultChecked></option>
                <option>Consultant</option>
                <option>Customer</option>
              </Input>
            </Col>
          </FormGroup>
          <Websites />
          <Carts />
          <FormGroup row className="my-3">
            <Label sm={3} className="text-lg-right">
              Price Classifications
            </Label>
          </FormGroup>
          <ConsultantTypes />
          <ConsultantStatus />
          <CustomerStatus />
          <Countries />
        </Form>
      </CardBody>
    </Card>
  )
}

export default TriggerOptionAvailability
