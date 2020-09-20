import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'
import PropTypes from 'prop-types'
import moment from 'moment'

const BasicInfo = ({details}) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Display Name
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.name}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            SKU
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.sku}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Internal Name
          </Col>
          <Col md={6} sm={6} xs={6}>
            Business
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Type
          </Col>
          <Col md={6} sm={6} xs={6}>
            Merchandise
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Status
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.status}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
            Date Created
          </Col>
          <Col md={6} sm={6} xs={6}>
            {moment(details.moltin_product.meta.timestamps.creat_at).format('YYYY-MM-DD')}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

BasicInfo.propTypes = {
  details: PropTypes.object,
}

export default BasicInfo
