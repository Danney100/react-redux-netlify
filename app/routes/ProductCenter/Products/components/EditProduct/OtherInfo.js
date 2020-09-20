import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'
import PropTypes from 'prop-types'

const OtherInfo = ({details}) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Tax Code
          </Col>
          <Col md={6} sm={6} xs={6}>
            Taxable
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Charge Shipping
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.change_shipping ? 'True' : 'False'}
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Charge Handling
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.change_handling ? 'True' : 'False'}
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Virtual Product
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.virtual_product ? 'True' : 'False'}
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Weight
          </Col>
          <Col md={6} sm={6} xs={6}>
            {`${details.weight ? details.weight : 0} oz`}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

OtherInfo.propTypes = {
  details: PropTypes.object,
}

export default OtherInfo
