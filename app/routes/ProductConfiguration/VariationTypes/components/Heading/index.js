import React from 'react'
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'
import CommonButton from 'routes/components/CommonButton'

const Heading = ({toggle, setVariationData}) => {
  const toggleForm = () => {
    toggle()
    setVariationData({})
  }
  return (
    <Row className="pt-3 pt-lg-0">
      <Col sm="auto" className="mr-auto">
        <span className="title">Variation Types</span>
      </Col>
      <Col className="pt-2 pl-0" sm="auto">
        <CommonButton
          title="Add Variation Type"
          buttonType="addItemButton"
          wrapperClass="float-lg-right ml-3"
          onClick={toggleForm}
        />
      </Col>
    </Row>
  )
}

Heading.propTypes = {
  toggle: PropTypes.func,
  setTypeName: PropTypes.func,
  setTypeDescription: PropTypes.func,
  setVariationData: PropTypes.func,
}

export default Heading
