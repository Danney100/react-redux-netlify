import React from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import ShippingCharge from './ShippingCharge'
import HandlingCharge from './HandlingCharge'
import OrderId from './OrderId'
import OrderAmount from './OrderAmount'
import ProductId from './ProductId'
import OrderOrigin from './OrderOrigin'
import ProductClassifications from './ProductClassifications'

const ItemLists = (props) => {
  const {selectItem} = props
  if (selectItem === 1) {
    return <ShippingCharge />
  } else if (selectItem === 2) {
    return <HandlingCharge />
  } else if (selectItem === 3) {
    return <ProductClassifications />
  } else if (selectItem === 4) {
    return <OrderId />
  } else if (selectItem === 5) {
    return <OrderAmount />
  } else if (selectItem === 6) {
    return <ProductId />
  } else if (selectItem === 7) {
    return <OrderOrigin />
  } else if (selectItem === 8) {
    return (
      <Form>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> default
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

ItemLists.propTypes = {
  selectItem: PropTypes.number.isRequired,
}

export default ItemLists
