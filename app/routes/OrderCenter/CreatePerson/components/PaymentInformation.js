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
} from 'components'
import PropTypes from 'prop-types'

const PaymentInformation = (props) => (
  <Card className="mb-3">
    <CardHeader tag="h6" className="mb-0 mt-0 font-italic rounded-top bg-primary text-white">
      Payment Information
    </CardHeader>
    <CardBody>
      <Row>
        <Col sm={{size: 8, offset: 4}}>
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <CardHeader
              tag="h6"
              className="mb-0 mt-0 rounded-top d-flex justify-content-end bg-success text-white">
              Secure Payment Form
              <i className="fa fa-lock ml-2 d-flex flex-column-reverse"></i>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Name On Card
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.NameOnCard : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col
                    sm={{size: '8', offset: '4'}}
                    style={{display: 'flex', justifyContent: 'center'}}>
                    <i className="fa fa-cc-visa ml-2 fa-2x"></i>
                    <i className="fa fa-cc-mastercard ml-2 fa-2x"></i>
                    <i className="fa fa-cc-amex ml-2 fa-2x"></i>
                    <i className="fa fa-cc-discover ml-2 fa-2x"></i>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Card Number
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.CardNumber : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Expiration Date
                  </Label>
                  <Col sm={4} className="mb-2">
                    <Input type="select" name="select" placeholder="">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Input>
                  </Col>
                  <Col sm={4}>
                    <Input type="select" name="select" placeholder="">
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    CVV
                  </Label>
                  <Col sm={4} lg={2} xs={10}>
                    <Input type="select">
                      <option></option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Button
                      className="rounded-0 d-flex w-100 justify-content-center bg-warning border-0"
                      sm={12}
                      md={12}
                      lg={12}>
                      <i className="fa fa-clipboard mr-1 d-flex flex-column-reverse"></i>
                      Use Default Address For Billing
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Country
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.Country : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Street 1
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.Street1 : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Street 2
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.Street2 : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    City
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.City : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    State
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.State : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Postal Code
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.PostalCode : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Phone Number
                  </Label>
                  <Col sm={8}>
                    <Input type="select">
                      <option>{props.demotrigger ? props.DemoData.PhoneNumber : ''}</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <FormGroup row className="d-flex justify-content-end">
            <Button className="rounded mr-3 bg-primary border-0">Continue</Button>
          </FormGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

PaymentInformation.propTypes = {
  demotrigger: PropTypes.bool.isRequired,
  DemoData: PropTypes.object.isRequired,
}

export default PaymentInformation
