import React from 'react'
import {Row, Col, Card, CardHeader, CardBody, Button} from 'components'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

const BillingAddress = ({address}) => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    history.push(path)
  }

  return (
    <Card className="mb-3" style={{height: '240px'}}>
      <CardHeader className="rounded-0 align-items-center bg-primary text-white d-flex justify-content-between">
        Billing Address
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
            Country
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.country}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Street 1
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.line_1}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Street 2
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.line_2}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            City
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.city}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            State
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.county}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Postal Code
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.postcode}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Phone Number
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {address.phone_number}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

BillingAddress.propTypes = {
  address: PropTypes.object,
}

export default BillingAddress
