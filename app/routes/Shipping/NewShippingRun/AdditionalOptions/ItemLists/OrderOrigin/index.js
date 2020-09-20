import React from 'react'
import {Row, Col, FormGroup, CustomInput, Form} from 'reactstrap'

const OrderOrigin = () => {
  return (
    <div className="mt-2">
      <Row className="pb-3">
        <Col md="6" className="ml-md-0 ml-5">
          <Form>
            <FormGroup>
              <div>
                <CustomInput type="checkbox" id="website" label="Corporate Website" />
                <CustomInput type="checkbox" id="join" label="Consultant Join" />
                <CustomInput type="checkbox" id="party" label="Portal Party" />
                <CustomInput type="checkbox" id="club" label="Wine Club" />
                <CustomInput type="checkbox" id="consultant" label="Consultantional Subscription" />
                <CustomInput type="checkbox" id="rewards" label="Promotional Rewards" />
                <CustomInput type="checkbox" id="replicated" label="Replicated Websites" />
              </div>
            </FormGroup>
          </Form>
        </Col>
        <Col md="6" className="ml-md-0 ml-5">
          <Form>
            <FormGroup>
              <div>
                <CustomInput type="checkbox" id="portal" label="Portal Consultant" />
                <CustomInput type="checkbox" id="flight" label="Flight" />
                <CustomInput type="checkbox" id="fcustomer" label="Flight Customer" />
                <CustomInput type="checkbox" id="host" label="Host Rewards" />
                <CustomInput type="checkbox" id="wparty" label="Website Party" />
                <CustomInput type="checkbox" id="fconsultant" label="Flight Consultant" />
                <CustomInput type="checkbox" id="subscription" label="Customer Subscription" />
              </div>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default OrderOrigin
