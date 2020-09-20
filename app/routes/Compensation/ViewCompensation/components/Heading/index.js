import React from 'react'
import {Row, Col} from 'reactstrap'

import CommonButton from 'routes/components/CommonButton'

const Heading = () => (
  <Row className="pt-3 pt-lg-0">
    <Col sm="auto" className="mr-auto">
      <span className="title">View Compensation</span>
    </Col>
    <Col className="pt-2" sm="auto">
      <CommonButton
        title="Add Compensation Run"
        buttonType="addItemButton"
        wrapperClass="ml-0 mb-2 ml-md-4 float-lg-right"
      />
    </Col>
    <Col className="pt-2" sm="auto">
      <CommonButton title="Print Checks" buttonType="cancelButton" wrapperClass=" float-lg-right" />
    </Col>
  </Row>
)

export default Heading
