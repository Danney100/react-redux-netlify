import React, {useMemo} from 'react'
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js'
import {Col, Label, FormGroup} from 'reactstrap'
import PropTypes from 'prop-types'

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [],
  )
  return options
}

const Card = ({showCvv}) => {
  const options = useOptions()
  const _stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!_stripe || !elements) {
      return
    }
    const payload = await _stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <>
      <FormGroup row>
        <Label lg={4} xs={12} sm={12} className="d-flex justify-content-end mt-2 align-middle">
          Card Number
        </Label>
        <Col lg={5} xs={12} sm={12} className="mt-2">
          <CardNumberElement options={options} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label lg={4} xs={12} sm={12} className="d-flex justify-content-end mt-2 align-middle">
          Expiration date
        </Label>
        <Col lg={5} xs={12} sm={12} className="mt-2">
          <CardExpiryElement options={options} />
        </Col>
      </FormGroup>
      {showCvv && (
        <FormGroup row>
          <Label lg={4} xs={12} sm={12} className="d-flex justify-content-end mt-2 align-middle">
            CVC
          </Label>
          <Col lg={5} xs={12} sm={12} className="mt-2">
            <CardCvcElement options={options} />
          </Col>
        </FormGroup>
      )}
    </>
  )
}

Card.propTypes = {
  showCvv: PropTypes.bool,
}

export default Card
