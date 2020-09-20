import React from 'react'
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'

export default function EditPerson() {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    history.push(path)
  }

  return (
    <div>
      <Row className="m-2">
        <Col>
          <Card type="border" className="mb-3 mt-3 rounded">
            <CardBody className="p-3">
              <CardBody className="border p-3 text-dark mb-3">
                Items marked with * are required
              </CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="m-2">
        <Col>
          <Card className="mb-3">
            <CardHeader tag="h6" className="font-italic  bg-primary text-white">
              Contact Information
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    FirstName
                  </Label>
                  <Col sm={5}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    LastName
                  </Label>
                  <Col sm={5}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    LastName2
                  </Label>
                  <Col sm={5}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    Company Name
                  </Label>
                  <Col sm={5}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    Email
                  </Label>
                  <Col sm={5}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    Home Phone
                  </Label>
                  <Col sm={3}>
                    <Input type="text" />
                  </Col>
                  <Col sm={2} className="d-flex justify-content-center align-items-center">
                    <Label check>
                      <Input type="checkbox" /> Make Primary
                    </Label>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={4}
                    className="d-flex justify-content-end font-weight-light">
                    Cell Phone
                  </Label>
                  <Col sm={3}>
                    <Input type="text" />
                  </Col>
                  <Col sm={2} className="d-flex justify-content-center align-items-center">
                    <Label check>
                      <Input type="checkbox" /> Make Primary
                    </Label>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Col className="d-flex justify-content-between">
        <FormGroup row>
          <Button onClick={routeChange} className="ml-4" color="danger">
            <i className="fa fas fa-times-circle mr-1"></i>
            Cancel
          </Button>
        </FormGroup>
        <FormGroup row>
          <Button onClick={routeChange} className="mr-4" color="success">
            <i className="fa fas fa-check-circle mr-1"></i>
            Save
          </Button>
        </FormGroup>
      </Col>
    </div>
  )
}
