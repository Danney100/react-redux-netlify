import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'

const Data = ({title, value}) => (
  <Col sm="auto" className="pr-2">
    <div className="d-flex flex-row">
      <div style={{color: '#707070'}} className="w-100 sc-avenir-light">
        {title}
      </div>
      <div className="card-value sc-avenir-heavy">{value}</div>
    </div>
  </Col>
)

Data.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

const ValueCard = () => {
  return (
    <Card className="my-3">
      <CardBody>
        <Row>
          <Data title="Party Subtotal Excluding Ineligible Items" value="$518.40" />
          <Data title="Number of Paid Orders" value="2" />
          <Data title="Number of Booking" value="0" />
        </Row>
      </CardBody>
    </Card>
  )
}

export default ValueCard
