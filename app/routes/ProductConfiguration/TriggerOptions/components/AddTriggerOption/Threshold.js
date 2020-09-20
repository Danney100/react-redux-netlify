import React, {useState} from 'react'
import {Row, Col, Button, Card, Input, CardHeader, CardBody} from 'reactstrap'
import PropTypes from 'prop-types'

const Threshold = ({addThreshold, removeThreshold}) => {
  const [rowCount, setRowCount] = useState(1)

  const addRow = () => {
    setRowCount((prevState) => prevState + 1)
  }

  const removeRow = () => {
    if (rowCount > 0) {
      setRowCount((prevState) => prevState - 1)
    }
  }

  const renderRows = () => {
    const rows = []
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <Row className="m-0 p-3 border border-top-0" key={i}>
          <Col sm="2">Result</Col>
          <Col sm="3">
            <Input type="select">
              <option></option>
              <option value="price_classfiication_change">Price Classification change</option>
              <option value="status_change">Status Change</option>
              <option value="create_subscription">Create Subscription</option>
              <option value="send_coupon">Send Coupon</option>
            </Input>
          </Col>
          <Col sm="7" className="text-right">
            {rowCount > 1 && (
              <Button color="warning" onClick={removeRow}>
                <i className="fa fas fa-minus" />
              </Button>
            )}
            <Button color="success" className="m-1" onClick={addRow}>
              <i className="fa fas fa-plus" />
            </Button>
          </Col>
        </Row>,
      )
    }

    return rows
  }

  return (
    <Card className="mt-3 border-0">
      <CardHeader className="bg-primary">
        <Row>
          <Col sm="auto" className="text-white my-auto">
            <i className="fa fa-ellipsis-v fa-2x pull-left text-white mr-1" />
            Threshold
          </Col>
          <Col className="text-right mt-lg-0 mt-2">
            <Button className="mr-1" color="light">
              Edit Qualification Messages
            </Button>
            <Button color="warning" onClick={removeThreshold}>
              <i className="fa fas fa-minus" />
            </Button>
            <Button color="success" className="ml-1" onClick={addThreshold}>
              <i className="fa fas fa-plus" />
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="p-0 border-0">
        <Row className="m-0  p-3 border">
          <Col sm="2">Trigger 1</Col>
          <Col sm="3">
            <Input type="select">
              <option></option>
              <option value="order_subtotal">Order Subtotal</option>
              <option value="sku">SKU</option>
              <option value="product_classification">Product Classification</option>
              <option value="order_weight">Order Weight</option>
              <option value="item_count">Item Count</option>
            </Input>
          </Col>
        </Row>
        {renderRows()}
      </CardBody>
    </Card>
  )
}

Threshold.propTypes = {
  addThreshold: PropTypes.func,
  removeThreshold: PropTypes.func,
}

export default Threshold
