import React from 'react'
import {Row, Col, Card, CardHeader, CardBody, Button, Table, CardImg} from '../../../../components'
import PropTypes from 'prop-types'
import Wine1 from 'images/wineimg/wine1.jpg'
import {useHistory} from 'react-router-dom'

const DetailPanel = ({order_items, user, shipping_address, billing_address, price_details}) => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal/transactions'
    history.push(path)
  }

  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col lg={6}>
            <Card className="mb-3" style={{height: '250px'}}>
              <CardHeader tag="h6" className="rounded-top bg-primary font-italic text-white">
                Contact Information
              </CardHeader>
              <CardBody>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    First Name
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.first_name}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Last Name
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.last_name}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Company Name
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.company_name}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Email
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.email}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Home Phone Number
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.phone}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Cell Phone Number
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {user.mobile}
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="mb-3" style={{height: '250px'}}>
              <CardHeader tag="h6" className="rounded-top bg-primary text-white">
                Credit Card Information
              </CardHeader>
              <CardBody>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Name on Card
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    Jill Doe
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Card Number
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    **** **** **** 4922
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Card Type
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    <i className="fa fa-cc-visa ml-2 fa-2x"></i>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    VisaExpiration Date
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    06/20
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="mb-3" style={{height: '250px'}}>
              <CardHeader tag="h6" className="rounded-top bg-primary text-white">
                Shipping Address
              </CardHeader>
              <CardBody>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end text-dark p-0"
                    style={{fontWeight: '700'}}>
                    Country
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.country}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Street 1
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.line_1}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Street 2
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.line_2}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    City
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.city}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    State
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.county}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Postal Code
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.postcode}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Phone Number
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {shipping_address.phone_number}
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="mb-3" style={{height: '250px'}}>
              <CardHeader tag="h6" className="rounded-top bg-primary text-white">
                Billing Address
              </CardHeader>
              <CardBody>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Country
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.country}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Street 1
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.line_1}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Street 2
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.line_2}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    City
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.city}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    State
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.county}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Postal Code
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.postcode}
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className="d-flex justify-content-end font-weight-bold text-dark p-0">
                    Phone Number
                  </Col>
                  <Col md={6} sm={6} xs={6} className="text-dark">
                    {billing_address.phone_number}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-3">
          <Button onClick={routeChange} className="rounded bg-success border-0">
            <i className="fa fa-eye mr-1"></i>
            View Order
          </Button>
        </Row>
        <Row className="p-3">
          <Col lg={12}>
            <Row>
              <Col
                md={12}
                sm={12}
                xs={12}
                className="d-flex justify-content-end font-weight-bold text-dark p-0">
                <Table className="mb-0" striped responsive>
                  <thead>
                    <tr>
                      <th className="bt-0">SKU</th>
                      <th className="bt-0">Item</th>
                      <th className="bt-0">Quantity</th>
                      <th className="bt-0">Individual Price</th>
                      <th className="text-right bt-0">Total Price</th>
                      <th className="text-right bt-0">Rewards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order_items.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-right bt-0">{item.sku}</td>
                          <td className="text-right bt-0">
                            <CardImg
                              top
                              src={Wine1}
                              alt="Card image cap"
                              style={{height: '70px', width: '70px'}}
                            />
                            {item.name}
                          </td>
                          <td className="text-right bt-0">{item.quantity}</td>
                          <td className="text-right bt-0">
                            {item.meta.display_price.with_tax.unit.formatted}
                          </td>
                          <td className="text-right bt-0">
                            {item.meta.display_price.with_tax.value.formatted}
                          </td>
                          <td className="text-right bt-0">$0.00</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col md={{size: '4', offset: '8'}}>
                <Table>
                  <thead>
                    <tr>
                      <th className="bt-0">Sub Total</th>
                      <th className="text-right bt-0">{price_details.without_tax.formatted}</th>
                    </tr>
                    <tr>
                      <th className="bt-0">Shipping</th>
                      <th className="text-right bt-0">$0.00</th>
                    </tr>
                    <tr>
                      <th className="bt-0">Estimated Sales Tax</th>
                      <th className="text-right bt-0">{price_details.tax.formatted}</th>
                    </tr>
                    <tr>
                      <th className="bt-0">Total</th>
                      <th className="text-right bt-0">{price_details.with_tax.formatted}</th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

DetailPanel.propTypes = {
  user: PropTypes.object,
  shipping_address: PropTypes.object,
  billing_address: PropTypes.object,
  price_details: PropTypes.object,
  order_items: PropTypes.array,
}

export default DetailPanel
