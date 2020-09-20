import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'

const PersonalData = ({name, value}) => {
  return (
    <Col sm={6} lg={3} className="p-0 py-2">
      <Col className="sub-heading sc-avenir-heavy" style={{color: '#6c6766'}}>
        {name}
      </Col>
      <Col className="sc-avenir-light mt-1" style={{color: '#707070'}}>
        {value}
      </Col>
    </Col>
  )
}

PersonalData.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

const ContactInfoCard = () => {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title sc-oswald-semibold">Contact Information</span>
        <hr />
        <Row>
          <PersonalData name="First name" value="Robert" />
          <PersonalData name="Last Name" value="Hamilton" />
          <PersonalData name="Company Name" value="Scount" />
          <PersonalData name="Email" value="testcustomer@test.com" />
          <PersonalData name="Home Phone Number" value="(212) 335-6789" />
          <PersonalData name="Cell Phone Number" value="(212) 345-6789" />
        </Row>
      </CardBody>
    </Card>
  )
}

export default ContactInfoCard
