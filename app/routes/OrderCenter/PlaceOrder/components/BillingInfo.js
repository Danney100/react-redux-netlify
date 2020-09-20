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

export default function BillingInfo() {
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
              Billing Information
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Name On Card *
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
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
                    <Input type="text" />
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
                  <Col
                    sm={{size: '8', offset: '4'}}
                    style={{display: 'flex', justifyContent: 'start'}}>
                    <Button className="d-flex bg-info d-flex">
                      <i
                        className="fa fa-clipboard mr-2 "
                        style={{display: 'flex', flexDirection: 'column-reverse'}}></i>
                      Use Default Address For Billing
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Country
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="select" placeholder=""></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Street 1 *
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
                    City *
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    State/Province *
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="select" placeholder="">
                      <option>Alaska</option>
                      <option>AE</option>
                      <option>AP</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>Califonia</option>
                      <option>Colorado</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Postal Code *
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex justify-content-end">
                    Phone Number
                  </Label>
                  <Col sm={8}>
                    <Input type="text" />
                  </Col>
                </FormGroup>
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
