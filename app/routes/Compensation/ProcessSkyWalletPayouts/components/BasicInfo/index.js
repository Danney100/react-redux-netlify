import React, {useState} from 'react'
import {Card, CardBody, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'

import CommonDemo from 'routes/components/CommonDemo'

const BasicInfo = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Card className="my-3">
      <CardBody>
        <span className="card-title">Basic Info</span>
        <hr />
        <CommonDemo
          wrapperClass="mx-0"
          content="Configure different methods for how your company distributes 
                    earnings with printed checks, direct deposit / ACH, pay cards or Sky Wallet."
          contentThree="Start with a unique Payout Method Name. This will be the name of 
                    the method displayed to users. Add an option description for internal use 
                    only when viewing configured payout methods."
          contentFour="Enable a payout method to be selected by users.
                    Select the Payout Method Type which will determine what configuration requirements 
                    are needed for that method to be available."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
        <Row className="justify-content-center">
          <Col xs={10} sm={9} md={11} lg={9}>
            <Form>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="name" className="input-label">
                      Name
                    </Label>
                    <Input type="text" name="name" id="name" />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="payoutType" className="input-label">
                      Payout Type
                    </Label>
                    <Input type="select" name="payoutType" id="payoutType" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="description" className="input-label">
                  Description
                </Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup className="ml-4">
                <Label>
                  <Input type="checkbox" onClick={() => setEnabled(!enabled)} />
                  <span className={`${enabled ? 'active' : 'inactive'}`}>Enabled</span>
                </Label>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BasicInfo
