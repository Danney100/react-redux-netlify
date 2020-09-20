import React from 'react'
import {Row, Col, Card, CardHeader, CardBody} from 'components'
import PropTypes from 'prop-types'

const TermsAndConditions = (props) => {
  const {register, errors} = props

  return (
    <Card className="mb-3">
      <CardHeader tag="h6" className="mb-0 mt-0 font-italic rounded-top bg-primary text-white">
        Terms and Conditions
      </CardHeader>
      <CardBody>
        <Row className="pr-1 mb-3">
          <Col>
            <span>
              These Terms of Use apply to your use of the Scout & Cellar site at ScoutandCellar.com
              (the “Site”), and to content, information, products, services and materials on the
              Site (collectively, “Content”). Read the full Terms and Conditions here.
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>
              <span>
                I have read and agree to the Terms of Use
                <span className="ml-2">
                  <input type="checkbox" name="tc" ref={register({required: true})} />
                </span>
                {errors.tc && <span className="text-danger">Please select this option</span>}
              </span>
            </strong>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

TermsAndConditions.propTypes = {
  register: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
  errors: PropTypes.object,
}

export default TermsAndConditions
