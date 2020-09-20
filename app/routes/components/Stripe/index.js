import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from './Card'

const useStyles = makeStyles({
  cardElements: {
    '& .StripeElement ': {
      display: 'block',
      width: '100%',
      height: 'calc(1.6em + 0.75rem + 2px)',
      padding: '0.575rem',
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.6',
      color: '#6c6766',
      backgroundColor: '#f7f7f7',
      backgroundClip: ' padding-box',
      border: '1px solid #f7f7f7',
      borderRadius: '0.25rem',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
  },
})

export const StripeCard = ({showCvv}) => {
  const stripePromise = loadStripe('pk_test_Q0T5mcPDb1gFAqEzTzjNb7RG00TfXwWp8Y')

  const classes = useStyles()

  return (
    <div className={classes.cardElements}>
      <Elements stripe={stripePromise} className="w-100">
        <Card showCvv={showCvv} />
      </Elements>
    </div>
  )
}

StripeCard.propTypes = {
  showCvv: PropTypes.bool,
}

StripeCard.defaultValue = {
  showCvv: false,
}

export default StripeCard
