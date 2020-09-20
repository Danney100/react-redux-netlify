import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'

export default function Shippinginfo() {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    history.push(path)
  }

  return (
    <div>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 6, offset: 2}}
            sm={{size: 6, offset: 4}}>
            <CardHeader
              tag="h6"
              className="mb-0 mt-0 d-flex justify-content-start bg-primary text-white">
              Shipping Address
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Nick Name*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    First name*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Last name*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Company
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Country*
                  </Label>
                  <Col sm={8}>
                    <Input type="select" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Street 1*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Street 2
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    City*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    State*
                  </Label>
                  <Col sm={8}>
                    <Input type="select" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Postal Code*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Phone number*
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <Col sm={{size: 8, offset: 4}}>
                  <Label check className="mx-3">
                    <Input type="checkbox" /> Default
                  </Label>
                </Col>
                <Col sm={{size: 8, offset: 4}} className="mt-3">
                  <Label check className="mx-3">
                    <Input type="checkbox" /> Mailing
                  </Label>
                </Col>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Col sm={{size: 6, offset: 3}} className="d-flex justify-content-between">
        <FormGroup row>
          <Button onClick={routeChange} className="ml-2" color="danger">
            <i className="fa fas fa-times-circle mr-1"></i>
            Cancel and return
          </Button>
        </FormGroup>
        <FormGroup row>
          <Button onClick={routeChange} className="mr-2" color="success">
            <i className="fa fas fa-check-circle mr-1"></i>
            Save and continue
          </Button>
        </FormGroup>
      </Col>
    </div>
  )
}
