import React from 'react'
import {Row, Col, Card, CardHeader, CardBody, Button} from 'components'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

const ContactInfomation = ({user}) => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    history.push(path)
  }

  return (
    <Card className="mb-3" style={{height: '240px'}}>
      <CardHeader className="rounded-0 align-items-center bg-primary text-white d-flex justify-content-between">
        Contact Information
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
            First Name
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.first_name}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Last Name
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.last_name}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Company Name
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.company_name}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Email
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.email}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end font-weight-bold text-dark p-0">
            Home Phone Number
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.phone}
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-end text-dark font-weight-bold p-0">
            Cell Phone Number
          </Col>
          <Col md={6} sm={6} xs={6} className="text-dark">
            {user.mobile}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

ContactInfomation.propTypes = {
  user: PropTypes.object,
}

export default ContactInfomation
