import React from 'react'
import {Card, CardBody, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'

import CommonDemo from 'routes/components/CommonDemo'

const PayoutSettings = () => {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="card-title">Payout Settings</span>
        <hr />
        <CommonDemo
          wrapperClass="mx-0"
          content="Enter the Minimum Amount that must be earned before a payout will be issued. 
                    Enter an administration fee that will be deducted from the disbursement amount. 
                    Choose if on demand withdrawals are allowed for this payout method and the maximum 
                    amount that may be withdrawn in a 30 day period. These choices will only affect this 
                    Sky Wallet payout method."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
      </CardBody>
      <Row className="justify-content-center">
        <Col xs={10} sm={9} md={11} lg={8}>
          <Form>
            <Row form>
              <Col sm={6} className="pr-3">
                <FormGroup>
                  <Label for="amount" className="input-label">
                    Minimum Amount
                  </Label>
                  <Input type="text" name="amount" id="amount" defaultValue="0.0" />
                </FormGroup>
              </Col>
              <Col sm={6} className="pr-3">
                <FormGroup>
                  <Label for="adminFee" className="input-label">
                    Admin Fee
                  </Label>
                  <Input type="text" name="adminFee" id="adminFee" defaultValue="0.0" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6} className="pr-3">
                <FormGroup>
                  <Label for="withdrawals" className="input-label">
                    On-Demand Withdrawals
                  </Label>
                  <Input type="text" name="withdrawals" id="withdrawals" />
                </FormGroup>
              </Col>
              <Col md={6} className="pr-3">
                <FormGroup>
                  <Label for="withdrawal_Amount" className="input-label">
                    Maximum Withdrawal Amount Within 30 Days
                  </Label>
                  <Input type="text" name="withdrawal_Amount" id="withdrawal_Amount" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default PayoutSettings
