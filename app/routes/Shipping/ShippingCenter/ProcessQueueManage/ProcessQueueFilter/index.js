import React from 'react'
import {Row, Col, Label, Input, Button, Card, CardBody} from 'reactstrap'

export default function index() {
  return (
    <div>
      <Row className="mt-3">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12}>
            <CardBody className="p-3">
              <div className="my-3 mx-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
                <h4>Process Queue Filter</h4>
              </div>
              <Row form className="mx-2 pb-4 border-bottom">
                <Col sm={2} className="mt-2  d-flex align-items-center">
                  <Label className="text-dark">Process Queued Between:</Label>
                </Col>
                <Col sm={1} className="mt-2 d-flex align-items-center justify-content-center">
                  <Label>start</Label>
                </Col>
                <Col sm={3} className="mt-2">
                  <Input
                    type="date"
                    name="date"
                    style={{backgroundColor: '#f8f9fa'}}
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </Col>
                <Col sm={1} className="mt-2 d-flex align-items-center justify-content-center">
                  <Label>end</Label>
                </Col>
                <Col sm={3} className="mt-2">
                  <Input
                    type="date"
                    name="date"
                    style={{backgroundColor: '#f8f9fa'}}
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </Col>
                <Col xl={{size: 2}} className="mt-2 d-flex justify-content-end">
                  <Button style={{width: 150}}>Filter</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
