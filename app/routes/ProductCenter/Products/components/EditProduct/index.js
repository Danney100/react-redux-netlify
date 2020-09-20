import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

import BasicInfo from './BasicInfo'
import OtherInfo from './OtherInfo'

import wine from 'images/wineimg/wine1.jpg'

const EditProduct = ({details}) => {
  return (
    <div>
      <Row className="mt-3 text-black">
        <Col sm={4}>
          <BasicInfo details={details} />
        </Col>
        <Col sm={4}>
          <OtherInfo details={details} />
        </Col>
        <Col sm={4}>
          <Card className="mb-3">
            <CardBody className="p-0">
              <img src={wine} alt="" className="img-fluid rounded" />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={8}>
          <Card className="mb-3">
            <CardBody>
              <Row className="text-black">
                Description
                <br />
                {parse(details.moltin_product.description)}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

EditProduct.propTypes = {
  details: PropTypes.object,
}

export default EditProduct
