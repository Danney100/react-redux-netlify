import React, {useState} from 'react'
import {
  Col,
  Row,
  Card,
  Button,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
} from 'reactstrap'

const AvailabilityTable = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <Form className="mt-3">
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Start Date / Time (Europe/Moscow)*
          </Label>
          <Col sm={5}>
            <Input type="datetime-local" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            End Date / Time (Europe/Moscow)*
          </Label>
          <Col sm={5}>
            <Input type="date"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Days From Join
          </Label>
          <Col sm={5}>
            <Input type="number"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Websites
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Check All/None</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Customer Portal</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Consultant Portal</span>
            </Col>
          </FormGroup>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Shopping Carts
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Check All/None</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Corporate Website</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Website Party</span>
            </Col>
          </FormGroup>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Price Classifications
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Check All/None</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Retail</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Preferred</span>
            </Col>
          </FormGroup>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Consultant Types
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Check All/None</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Consultant</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Circle Consultant</span>
            </Col>
          </FormGroup>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Consultant Statuses
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Check All/None</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Active</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Inactive</span>
            </Col>
          </FormGroup>
        </FormGroup>
        <FormGroup row>
          <Label for="input" sm={4} className="d-flex justify-content-end">
            Customer Statuses
          </Label>
          <FormGroup>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span> Active</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Inactive</span>
            </Col>
            <Col className="ml-4 mt-2">
              <Input type="checkbox"></Input>
              <span>Cancelled</span>
            </Col>
          </FormGroup>
        </FormGroup>
      </Form>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardHeader
              tag="h6"
              className="mb-0 mt-0 font-italic bg-primary text-white d-flex justify-content-between">
              <div>
                <span className="big ml-1 text-white">United States</span>
              </div>
              <div className="d-flex text-white" onClick={toggleOpen}>
                <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
              </div>
            </CardHeader>
            <CardBody>
              <Collapse isOpen={isOpen}>
                <Form>
                  <FormGroup row>
                    <Col>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Select / Unselect All</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Alabama</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Arizona</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Connecticut</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Georgia</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Illinois</span>
                      </Row>
                    </Col>
                    <Col className="ml-5 mt-2">
                      <Row className="ml-5 mt-5">
                        <Input type="checkbox" />
                        <span> Alaska</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Arkansas</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> DC</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Guam</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Indiana</span>
                      </Row>
                    </Col>
                    <Col className="ml-5 mt-2">
                      <Row className="ml-5 mt-5">
                        <Input type="checkbox" />
                        <span> AE</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> California</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Delaware</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Hawaii</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Iowa</span>
                      </Row>
                    </Col>
                    <Col className="ml-5 mt-2">
                      <Row className="ml-5 mt-5">
                        <Input type="checkbox" />
                        <span> AP</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Colorado</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Florida</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Idaho</span>
                      </Row>
                      <Row className="ml-5 mt-3">
                        <Input type="checkbox" />
                        <span> Kansas</span>
                      </Row>
                    </Col>
                  </FormGroup>
                </Form>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Col md={3} className="text-lg-left text-right mb-1">
          <Button color="danger">
            <i className="fa fas fa-times-circle mr-1"></i>
            Cancel Changes
          </Button>
        </Col>
        <Col md={9} className="text-lg-right text-right">
          <Button color="info">
            <i className="fa fas fa-check-circle mr-1"></i>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AvailabilityTable
