import React from 'react'
import {Card, CardBody, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const CartData = ({name, value, className}) => {
  return (
    <div className={`${className} d-flex flex-row sc-avenir-roman`}>
      <div className="w-100 border-right-0">{name}</div>
      <div className="text-right sc-avenir-medium">{value}</div>
    </div>
  )
}

CartData.propTypes = {
  name: PropTypes.any,
  value: PropTypes.any,
  className: PropTypes.string,
}

const ShoppingCartCard = () => {
  const codeStyle = {
    border: 'none',
    borderRadius: '5px 0px 0px 5px',
  }
  const addCodeStyle = {
    borderRadius: '0px 5px 5px 0px',
    background: '#f7f7f7',
    color: '#6c6766',
  }

  return (
    <Card>
      <CardBody style={{color: '#423b3c'}}>
        <span className="sub-title sc-oswald-semibold">Shopping Cart</span>
        <span
          className="float-right mt-1 sc-aenir-heavy"
          style={{color: '#a09d9d', fontSize: '12px'}}>
          1 item
        </span>
        <hr />
        <CartData name="Epic Pursuit White Wine Spritzer x1" value="$19.00" className="mb-2" />
        <CartData name="14K Mix Pack x1" value="$6.00" />
        <hr />
        <CartData name="Subtotal" value="$25.00" />
        <hr />
        <div className="mb-2 add-coupon">Add Coupon Or Promo Code</div>
        <CartData
          name={<Input type="text" placeholder="Code" style={codeStyle} />}
          value={
            <div className="text-right h-100 pt-2 pr-2" style={addCodeStyle}>
              AddCode
            </div>
          }
        />
        <hr />
        <CartData name="Total" value="$28.00" />
      </CardBody>
    </Card>
  )
}

export default ShoppingCartCard
