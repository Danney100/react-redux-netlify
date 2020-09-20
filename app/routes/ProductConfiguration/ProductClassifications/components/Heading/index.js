import React from 'react'
import {Row, Col} from 'reactstrap'

import CommonButton from 'routes/components/CommonButton'
import { useHistory } from 'react-router-dom'

const Heading = () => {
  const history = useHistory()
  const routeChange = ()=>{
    history.push('/products/display-classification-edit')
  }
  return (
  <Row className="pt-3 pt-lg-0">
    <Col sm="auto" className="mr-auto">
      <span className="title">Product Classification Manager</span>
    </Col>
    <Col className="pt-2 pl-0" sm="auto">
      <CommonButton 
        title="Create New Classification" 
        buttonType="addItemButton" 
        wrapperClass="float-lg-right ml-3" 
        onClick={routeChange}
      />
    </Col>
  </Row>
)}

export default Heading
