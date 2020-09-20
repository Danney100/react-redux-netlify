import React from 'react'
import {Row, Col, Table, CardImg} from 'components'
import Proptypes from 'prop-types'

import Wine1 from 'images/wineimg/wine1.jpg'
import {Input} from 'reactstrap'

const DetailInfoTable = ({price_details, order_items}) => {
  return (
    <Row className="p-3">
      <Col className="border">
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
                  <th className="bt-0">Subtotal</th>
                  <th></th>
                  <th className="text-right bt-0">{price_details.without_tax.formatted}</th>
                </tr>
                <tr>
                  <th className="bt-0">Shipping</th>
                  <th className="bt-0">
                    <Input type="select">
                      <option>SSS Host Ground Shipping</option>
                      <option>Special Bulk Shipping</option>
                      <option>SSS Ground(7-12 business days)</option>
                      <option>2Day-Air</option>
                      <option>Pick Up Farmers Branch</option>
                      <option>Overnight</option>
                      <option>Merch Solid in Local Pickup</option>
                    </Input>
                  </th>
                  <th className="text-right bt-0">$0.00</th>
                </tr>
                <tr>
                  <th className="bt-0">Estimated Sales Tax</th>
                  <th></th>
                  <th className="text-right bt-0">{price_details.tax.formatted}</th>
                </tr>
                <tr>
                  <th className="bt-0">Total</th>
                  <th></th>
                  <th className="text-right bt-0">{price_details.with_tax.formatted}</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

DetailInfoTable.propTypes = {
  price_details: Proptypes.object,
  order_items: Proptypes.array,
}

export default DetailInfoTable
