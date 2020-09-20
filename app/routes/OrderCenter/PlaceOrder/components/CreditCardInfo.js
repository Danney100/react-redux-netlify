import React from 'react'
import {Row, Col, Card, CardHeader, CardBody, Button} from 'components'
import {useHistory} from 'react-router-dom'

const CreditCardInfo = () => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    history.push(path)
  }

  return (
    <Card className="mb-3" style={{height: '240px'}}>
      <CardHeader className="rounded-0 align-items-center bg-primary text-white d-flex justify-content-between">
        Credit Card Information
        <Button onClick={() => routeChange()} className="border-0 bg-success">
          <i className="fa fa-pencil-square-o mr-1" aria-hidden="true"></i>
          Edit
        </Button>
      </CardHeader>
      <CardBody>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Name on Card
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            Jill Doe
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Card Number
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            **** **** **** 4922
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Card Type
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            <i className="fa fa-cc-visa ml-2 fa-2x"></i>
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            VisaExpiration Date
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            06/20
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CreditCardInfo
