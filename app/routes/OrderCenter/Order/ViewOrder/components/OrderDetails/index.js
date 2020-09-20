import React from 'react'
import {Row, Col, CardTitle} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Map} from 'immutable'
import EditIcon from 'routes/components/CustomIconButton/EditIcon'
import CloseIcon from 'routes/components/CustomIconButton/CloseIcon'

const OrderDetails = (props) => {
  const orderDetails = props.order.getIn(['orderDetails'], Map()).toJS()

  if (orderDetails === undefined) {
    return ''
  }

  if (Object.keys(orderDetails).length === 0) {
    return ''
  }

  return (
    <Row>
      <Col>
        <Row className="ml-4">
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Order Information</CardTitle>
            <Row>
              <Col className="h6 mt-2" xs={12} sm={12} md={12} lg={12}>
                Order Owner
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                nj m (Customer C207403)
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Order Number
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} className="h6 sc-avenir-roman">
                060740ac-67a5-4168-aa55-55e9ac204d3f
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Order Date
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                5/29/2020 5:43 PM
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Origin
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                Replicated Websites
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="h6">
                Event Id
              </Col>
              <Row className="ml-4">
                <Col xs={4}>
                  <EditIcon />
                </Col>
                <Col xs={4}>
                  <CloseIcon />
                </Col>
              </Row>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                P28028
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Order Status</CardTitle>
            <Row>
              <Col className="h6 mt-2" xs={12} sm={12} md={12} lg={12}>
                Order Status
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                Posted
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Order Lock Status
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                Unlocked
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Payment Status
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                Paid
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Posted Date
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                5/29/2020 5:44 PM
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="h6">
                Ship Hold
              </Col>
              <Col xs={8}>
                <EditIcon />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                Yes
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Commission Information</CardTitle>
            <Row>
              <Col xs={5} className="h6">
                Commission Owner
              </Col>
              <Col xs={7}>
                <EditIcon />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                John Sheere Consultant 5266
              </Col>
            </Row>
            <Row>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Commissionable
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} className="h6 sc-avenir-roman">
                060740ac-67a5-4168-aa55-55e9ac204d3f
              </Col>
            </Row>
            <Row>
              <Col xs={5} className="h6">
                Commission Date
              </Col>
              <Col xs={7}>
                <EditIcon />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                5/29/2020 5:43 PM
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Shipping Information</CardTitle>
            <Row className="mt-2 ml-1">
              <Row>
                <Col xs={9} sm={9} className="h6">
                  Shipping Address
                </Col>
                <Col xs={2} className="ml-2">
                  <EditIcon />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.first_name +
                    ' ' +
                    orderDetails.shipping_address.last_name}
                </Col>
                <Col xs={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.line_1}
                </Col>
                <Col xs={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.line_2}
                </Col>
                <Col xs={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.city +
                    ', ' +
                    orderDetails.shipping_address.country}
                </Col>
                <Col xs={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.phone_number}
                </Col>
                <Col xs={12} md={12} lg={12} className="h6 sc-avenir-roman">
                  {orderDetails.shipping_address.postcode}
                </Col>
              </Row>
            </Row>

            <Row>
              <Col xs={7} sm={5} className="h6">
                Shipping Method
              </Col>
              <Col xs={4}>
                <EditIcon />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                5/29/2020 5:43 PM
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Compensation Details</CardTitle>
            <Row>
              <Col className="h6 mt-2" xs={12} sm={12} md={12} lg={12}>
                Consultant Price
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $25.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Qv
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                25.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Cv
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                17.05
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Rv
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                25.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Taxable
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $47.00
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} className="my-3">
            <CardTitle tag="h5">Payment Details</CardTitle>
            <Row>
              <Col className="h6 mt-2" xs={12} sm={12} md={12} lg={12}>
                Subtotal
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $25.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Estimated Sales Tax
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $2.12
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Shipping
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $22.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Discounts
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 mb-3 sc-avenir-roman">
                ($0.00)
              </Col>
            </Row>
            <Row>
              <Col xs={5} sm={12} md={7} tag="h5">
                Grand Total
              </Col>
              <Col>{orderDetails.meta.display_price.with_tax.amount}</Col>
            </Row>
            <Row>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Payments
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                ($49.12)
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Refunds
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 sc-avenir-roman">
                $0.00
              </Col>
              <Col className="h6 mt-3" xs={12} sm={12} md={12} lg={12}>
                Credit Memos
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="h6 mb-3 sc-avenir-roman">
                ($0.00)
              </Col>
            </Row>
            <Row>
              <Col xs={5} sm={12} md={7} tag="h5">
                Balance Due
              </Col>
              <Col className="text-left">$0.00</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

OrderDetails.propTypes = {
  order: PropTypes.object,
  orderDetails: PropTypes.string,
}
const mapStateToProps = ({order}) => ({order})

export default connect(mapStateToProps)(OrderDetails)
