import React from 'react'
import {Row, Col, Card, CardTitle, Button} from 'reactstrap'

const OrderDetails = () => {
  return (
    <Row className="mt-3">
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100">
          <CardTitle tag="h5">Order Information</CardTitle>
          <div className="table-responsive">
            <table className="table table-striped mb-0 text-black">
              <tbody>
                <tr>
                  <th className="text-black">Order Owner</th>
                  <td className="text-right">mjv mn (Customer C207756)</td>
                </tr>
                <tr>
                  <th className="text-black">Order Number</th>
                  <td className="text-right">780299</td>
                </tr>
                <tr>
                  <th className="text-black">Order Date</th>
                  <td className="text-right">6/18/2020 3:20 AM</td>
                </tr>
                <tr>
                  <th className="text-black">Origin</th>
                  <td className="text-right">Replicated Websites</td>
                </tr>
                <tr>
                  <th className="text-black">
                    Event ID <i className="fa fas fa-pencil mr-1" />
                    <i className="fa fas fa-trash mr-1" />
                  </th>
                  <td className="text-right">P44537</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100">
          <CardTitle tag="h5">Order Status</CardTitle>
          <div className="table-responsive">
            <table className="table table-striped mb-0 text-black">
              <tbody>
                <tr>
                  <th className="text-black">Order Status</th>
                  <td className="text-right">Posted</td>
                </tr>
                <tr>
                  <th className="text-black">Order Lock Status</th>
                  <td className="text-right">
                    <i className="fa fa-unlock-alt"></i>
                    Unlocked
                  </td>
                </tr>
                <tr>
                  <th className="text-black">Payment Status</th>
                  <td className="text-right">Paid</td>
                </tr>
                <tr>
                  <th className="text-black">Posted Date</th>
                  <td className="text-right">6/18/2020 3:23 AM</td>
                </tr>
                <tr>
                  <th className="text-black">
                    Ship Hold <i className="fa fas fa-pencil mr-1" />
                  </th>
                  <td className="text-right">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100">
          <CardTitle tag="h5">Commission Information</CardTitle>
          <div className="table-responsive">
            <table className="table table-striped mb-0 text-black">
              <tbody>
                <tr>
                  <th className="text-black">
                    Commission Owner <i className="fa fas fa-pencil mr-1" />
                  </th>
                  <td className="text-right">michigan consultant Consultant 17041</td>
                </tr>
                <tr>
                  <th className="text-black">Commissionable</th>
                  <td className="text-right">
                    <i className="fa fa-fw fa-money" />
                    Commissionable
                  </td>
                </tr>
                <tr>
                  <th className="text-black">
                    Commission Date <i className="fa fas fa-pencil mr-1" />
                  </th>
                  <td className="text-right">6/18/2020 3:20 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100 text-black bg-light">
          <CardTitle tag="h5">Shipping Information</CardTitle>
          <Row className="mt-2">
            <Col className="h6" sm={12} xs={12} md={12} lg={12}>
              Shipping Address
            </Col>
            <Col className="h6" xs={12} md={12} lg={12}>
              nj b
            </Col>
            <Col xs={12} md={12} lg={12}>
              street 2
            </Col>
            <Col xs={12} md={12} lg={12}>
              Eleele, Hawaii 96705
            </Col>
            <Col xs={12} md={12} lg={12}>
              United States
            </Col>
            <Col xs={12} md={12} lg={12}>
              1 (123) 456-7890
            </Col>
            <Col xs={12} md={12} lg={12} className="mt-1">
              <Button size="sm">
                <i className="fa fas fa-pencil mr-1" />
                Edit Shipping Address
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="h6" sm={12} xs={12} md={12} lg={12}>
              Shipping Method
            </Col>
            <Col xs={12} md={12} lg={12}>
              Alaska & Hawaii 2 Day Air
            </Col>
            <Col xs={12} md={12} lg={12} className="mt-1">
              <Button size="sm">
                <i className="fa fas fa-pencil mr-1" />
                Edit Shipping Method
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100">
          <CardTitle tag="h5">Compensation Details</CardTitle>
          <div className="table-responsive">
            <table className="table table-striped mb-0 text-black">
              <tbody>
                <tr>
                  <th className="text-black">Consultant Price</th>
                  <td className="text-right">$191.00</td>
                </tr>
                <tr>
                  <th className="text-black">QV</th>
                  <td className="text-right">191.00</td>
                </tr>
                <tr>
                  <th className="text-black">CV</th>
                  <td className="text-right">133.70</td>
                </tr>
                <tr>
                  <th className="text-black">RV</th>
                  <td className="text-right">191.00</td>
                </tr>
                <tr>
                  <th className="text-black">Taxable</th>
                  <td className="text-right">$226.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
      <Col sm={4} className="d-flex align-items-stretch">
        <Card className="mb-3 p-3 w-100">
          <CardTitle tag="h5">Payment Details</CardTitle>
          <div className="table-responsive">
            <table className="table table-striped mb-0 text-black">
              <tbody>
                <tr>
                  <th className="text-black">Subtotal</th>
                  <td className="text-right">$191.00</td>
                </tr>
                <tr>
                  <th className="text-black">Estimated Sales Tax</th>
                  <td className="text-right">$10.19</td>
                </tr>
                <tr>
                  <th className="text-black">Shipping</th>
                  <td className="text-right">$35.00</td>
                </tr>
                <tr>
                  <th className="text-black">Discounts</th>
                  <td className="text-right">$0.00</td>
                </tr>
                <tr className="h4">
                  <th className="text-black h4">Grand Total</th>
                  <td className="text-right">$236.19</td>
                </tr>
                <tr>
                  <th className="text-black">Payments</th>
                  <td className="text-right">$236.19</td>
                </tr>
                <tr>
                  <th className="text-black">Refunds</th>
                  <td className="text-right">$0.00</td>
                </tr>
                <tr>
                  <th className="text-black">Credit Memos</th>
                  <td className="text-right">$0.00</td>
                </tr>
                <tr className="h4">
                  <th className="text-black h4">Balance Due</th>
                  <td className="text-right">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default OrderDetails
