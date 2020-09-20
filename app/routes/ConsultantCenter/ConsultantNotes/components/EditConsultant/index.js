import React from 'react'
import {useSelector} from 'react-redux'
import {Row, Col, Card, CardBody} from 'reactstrap'
import {Map} from 'immutable'
import moment from 'moment'

const EditConsultant = () => {
  const consultantDetails = useSelector(({consultant}) =>
    consultant.get('consultantDetails', Map()).toJS(),
  )

  if (!Object.keys(consultantDetails).length) {
    return ''
  }

  return (
    <Row className="mt-3">
      <Col sm={6}>
        <Card className="mb-3">
          <CardBody>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                First Name
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.first_name}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Last Name
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.last_name}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Company Name
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.company_name}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Email
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.email}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Home Phone Number
              </Col>
              <Col md={6} sm={6} xs={6}>
                1 (038) 374-9
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Cell Phone Number
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.phone}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6}>
        <Card className="mb-3">
          <CardBody>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Customer Count
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.customers.length}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                JoinDate
              </Col>
              <Col md={6} sm={6} xs={6}>
                {moment(consultantDetails.JoinDate).format('MM/DD/YYYY')}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Type
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.PersonType}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-end p-0">
                Rank
              </Col>
              <Col md={6} sm={6} xs={6}>
                {consultantDetails.PriceClassification}
              </Col>
            </Row>
            <Row />
            <Row />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default EditConsultant
