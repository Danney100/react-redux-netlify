import React from 'react'
import {Row, Col} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import {useHistory} from 'react-router-dom'

const Heading = () => {
  const history = useHistory()
  const routeChange = () => {
    history.push('/join/join-option-edit')
  }
  return (
    <Row className="pt-3 pt-lg-0 mb-3">
      <Col sm="auto" className="mr-auto mt-2">
        <span className="title">Join Option Management</span>
      </Col>
      <Col sm="auto" className="pt-2 justify-content-md-right">
        <CommonButton
          title="Add New Join Option"
          buttonType="addItemButton"
          width={250}
          height={40}
          wrapperClass="ml-0"
          onClick={routeChange}
        />
      </Col>
    </Row>
  )
}

export default Heading
