import React, {useState} from 'react'
import {Card, CardBody, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'

import CommonDemo from 'routes/components/CommonDemo'

const ApplicationConditions = () => {
  const [allRank, setAllRank] = useState(false)
  const [allCountries, setAllCountries] = useState(false)

  return (
    <Card className="my-3">
      <CardBody>
        <span className="card-title">Application Conditions</span>
        <hr />
        <CommonDemo
          wrapperClass="mx-0"
          content="Configure the conditions that will trigger the funds 
                    to be dispersed by this payout method."
        />
        <Row className="justify-content-center">
          <Col xs={10} sm={9} md={11} lg={9}>
            <Form>
              <Row>
                <Col sm={6} className="pl-0 pr-3">
                  <FormGroup>
                    <Label for="consultantRanks" className="input-label">
                      Consultant Ranks
                    </Label>
                    <Input
                      type="text"
                      name="consultantRanks"
                      id="consultantRanks"
                      placeholder="Select Ranks …"
                    />
                  </FormGroup>
                  <FormGroup className="ml-4">
                    <Label for="consultantRanks">
                      <Input type="checkbox" onClick={() => setAllRank(!allRank)} />
                      <span className={`${allRank ? 'active' : 'inactive'}`}>All</span>
                    </Label>
                  </FormGroup>
                </Col>
                <Col sm={6} className="p-0 pl-md-2">
                  <FormGroup>
                    <Label for="countries" className="input-label">
                      Countries
                    </Label>
                    <Input
                      type="text"
                      name="countries"
                      id="countries"
                      placeholder="Select Countries …"
                    />
                  </FormGroup>
                  <FormGroup className="ml-4">
                    <Label for="countries">
                      <Input type="checkbox" onClick={() => setAllCountries(!allCountries)} />
                      <span className={`${allCountries ? 'active' : 'inactive'}`}>All</span>
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ApplicationConditions
