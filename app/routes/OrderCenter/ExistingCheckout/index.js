import React, {useContext, useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col} from 'reactstrap'
import {Map, List} from 'immutable'
import MoonLoader from 'react-spinners/MoonLoader'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'

import CommonButton from 'routes/components/CommonButton'
import WelcomeBack from './components/WelcomeBack'
import BillingMethod from './components/BillingMethod'
import ShippingAddress from './components/ShippingAddress'
import VerificationsCard from './components/VerificationCard'
import Heading from './components/Heading'
import AppContext from 'components/App/AppContext'
import {useSelector, useDispatch} from 'react-redux'
import {cartUserDetailsWatcher} from 'duck/watcher'
import {cartCheckoutWacher} from 'duck/watcher'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .sub-heading': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .label': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      color: '#6c6766',
    },
    '& .card-label': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#403839',
    },
    '& .card-value': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      color: '#6c6766',
    },
    '& .btn-ques': {
      fontFamily: 'SFUIText-Bold',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .pay-later': {
      backgroundColor: 'white',
      color: '#6c6766',
      '&:hover': {
        backgroundColor: 'white !important',
      },
      '&:focus': {
        backgroundColor: 'white !important',
      },
    },
    '& .term-line': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.36,
      color: '#6c6766',
    },
    '& .warn': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1.36,
      color: '#403839',
    },
    '& .here-text': {
      fontWeight: 600,
      color: '#403839',
      textDecoration: 'underline',
    },
  },
})

const ExistingCheckout = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const [shipAdd, setShipAdd] = useState(0)
  const [billAdd, setBillAdd] = useState(0)

  const {register, handleSubmit, errors} = useForm()

  const {setTitle} = context
  useEffect(() => {
    setTitle('Oder Center > Checkout')
  }, [])

  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const cartUserId = useSelector(({cart}) => cart.get('cartUserId'))
  const cartId = useSelector(({cart}) => cart.get('cartID'))

  const dispatch = useDispatch()

  const user = useSelector(({cart}) => cart.get('user', Map({})).toJS())
  const addresses = useSelector(({cart}) => cart.get('addresses', List([])).toJS())

  const override = ` display: block; margin: 0 auto `
  const token = useSelector(({user}) => user.get('token'))
  const history = useHistory()

  useEffect(() => {
    if (cartUserId) {
      dispatch(cartUserDetailsWatcher())
    }
  }, [cartUserId])

  const handleContinue = (data) => {
    const checkoutPayload = {
      cartId: cartId,
      token: token,
      data: {
        customer: {
          id: cartUserId,
        },
        billing_address: {...addresses[billAdd]},
        shipping_address: addresses?.[shipAdd].id,
        host_order: false,
      },
      history: history,
      currentPath: history.location.pathname,
    }

    dispatch(cartCheckoutWacher(checkoutPayload))
    let path = '/order-center/create-new-order/shopping/viewcart/createperson/placeorder'
    history.push(path)
  }

  if (isLoading) {
    return <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} css={override} />
  }

  if (!Object.entries(user).length) {
    return ''
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <WelcomeBack data={user} />
      <BillingMethod data={addresses} billAdd={billAdd} setBillAdd={setBillAdd} />
      <ShippingAddress data={addresses} shipAdd={shipAdd} setShipAdd={setShipAdd} />
      <VerificationsCard register={register} errors={errors} />
      <Row className="my-4">
        <Col className="d-flex justify-content-sm-end">
          <CommonButton
            title="Continue"
            buttonType="addItemButton"
            wrapperClass="mx-0"
            onClick={handleSubmit(handleContinue)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ExistingCheckout
