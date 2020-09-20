import React from 'react'
import {Row, Col, Card, CardHeader, CardBody} from 'components'
import PropTypes from 'prop-types'

const AgeVerification = (props) => {
  const {register, errors} = props

  return (
    <Card className="mb-3">
      <CardHeader tag="h6" className="my-0 font-italic rounded-top bg-primary text-white">
        Age Verification
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <span className="pr-1">I am at least 21 years of age</span>
            <span>
              <input type="checkbox" name="ageCheckbox" ref={register({required: true})}></input>
              {errors.ageCheckbox && <span className="text-danger">Please select this option</span>}
            </span>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

AgeVerification.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
}

export default AgeVerification
