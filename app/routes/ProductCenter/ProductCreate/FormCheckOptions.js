import React from 'react'
import {Col, FormGroup, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const FormCheckOptions = ({register}) => {
  return (
    <>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="virtual_product" />
          <span>Virtual Product</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="subscription_only" />
          <span>Subscription Only</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="change_shipping" />
          <span>Charge Shipping</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="change_handling" />
          <span>Charge Handling</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="universal_pricing_exempt" />
          <span>Universal Pricing Exempt</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="excluded_tasting_host_rewards_cal" />
          <span>Excluded from Tasting Host Rewards Calculations</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="excluded_customer_promo_rewards_cal" />
          <span>Excluded from Customer Promotional Rewards Calculations</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="excluded_consultant_promo_rewards_cal" />
          <span>Excluded from Consultant Promotional Rewards Calculations</span>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
          <Input type="checkbox" innerRef={register} name="under_safety_stock" />
          <span>Show Warning When Under Safety Stock</span>
        </Col>
      </FormGroup>
    </>
  )
}

FormCheckOptions.propTypes = {
  register: PropTypes.func,
}
export default FormCheckOptions
