import React from 'react'
import {Row, Col} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

const Heading = ({toggle}) => {
  const history = useHistory()

  const routeChange = () => {
    history.push('/products/gift-card-create')
  }

  return (
    <Row className="pt-3 pt-lg-0 mb-3">
      <Col sm="auto" className="mr-auto mt-2">
        <span className="title">Gift Cards</span>
      </Col>
      <Col sm="auto" className="justify-content-right">
        <CommonButton
          title="Set Default Code Format"
          buttonType="cancelButton"
          onClick={toggle}
          wrapperClass="m-0 mr-3 mt-2"
          width={250}
          height={40}
        />
        <CommonButton
          title="Create Gift Cards"
          buttonType="addItemButton"
          onClick={routeChange}
          wrapperClass="m-0 mt-2"
          width={240}
          height={40}
        />
      </Col>
    </Row>
  )
}

Heading.propTypes = {
  toggle: PropTypes.func,
}

export default Heading
