import React from 'react'
import {Row, Col} from 'components'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'

const Heading = () => {
  const history = useHistory()
  const routeChange = () => {
    history.push('/products/display-category-edit')
  }

  return (
    <Row className="mt-3 mt-lg-0">
      <Col sm={6}>
        <h2 className="title">Display Category Manager</h2>
      </Col>
      <Col sm={6} className="d-flex justify-content-end">
        <CommonButton
          title="Add New Display Category"
          buttonType="addItemButton"
          onClick={routeChange}
        />
      </Col>
    </Row>
  )
}

export default Heading
