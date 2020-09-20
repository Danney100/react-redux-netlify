import React from 'react'
import {Row, Col, Card, CardBody, Button} from 'components'
import PropTypes from 'prop-types'
import moment from 'moment'

const printIframe = (id) => {
  const iframe = document.frames ? document.frames[id] : document.getElementById(id)
  const iframeWindow = iframe.contentWindow || iframe
  iframe.focus()
  iframeWindow.print()
  return false
}

const OverPaid = ({order}) => {
  const date = new Date(order.data.meta.timestamps.created_at)
  const formattedDate = moment(date).format('YYYY-MM-DD')

  return (
    <div>
      <iframe
        id="receipt"
        src="/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal"
        style={{display: 'none'}}
        title="Receipt"
      />
      <Card className="mb-3 mt-3 rounded">
        <CardBody className="p-3">
          <CardBody className="border p-3 mb-3">
            Thank You! Your order has been received! Please print this for your records and let your
            friends know about your purchase.
            <CardBody className="p-0 d-flex justify-content-center">
              <Button
                className="rounded mt-2 bg-warning border-0"
                onClick={() => printIframe('receipt')}>
                <i className="fa fa-print mr-2"></i>
                Print This Page
              </Button>
            </CardBody>
          </CardBody>
          <CardBody>
            <Row>
              <Col
                md={2}
                sm={6}
                xs={6}
                className="d-flex justify-content-end font-weight-bold text-dark p-0">
                Display ID:
              </Col>
              <Col md={10} sm={6} xs={6} className="text-dark">
                {order.data.id}
              </Col>
            </Row>
            <Row>
              <Col
                md={2}
                sm={6}
                xs={6}
                className="d-flex justify-content-end font-weight-bold text-dark p-0">
                Order Date:
              </Col>
              <Col md={10} sm={6} xs={6} className="text-dark">
                {formattedDate}
              </Col>
            </Row>
            <Row>
              <Col
                md={2}
                sm={6}
                xs={6}
                className="d-flex justify-content-end font-weight-bold text-dark p-0">
                Order Owner Display ID:
              </Col>
              <Col md={10} sm={6} xs={6} className="text-dark">
                {order.data.relationships.customer.data.id}
              </Col>
            </Row>
            <Row>
              <Col
                md={2}
                sm={6}
                xs={6}
                className="d-flex justify-content-end font-weight-bold text-dark p-0">
                Commission Date:
              </Col>
              <Col md={10} sm={6} xs={6} className="text-dark">
                {formattedDate}
              </Col>
            </Row>
          </CardBody>
        </CardBody>
      </Card>
    </div>
  )
}

OverPaid.propTypes = {
  order: PropTypes.object,
}

export default OverPaid
