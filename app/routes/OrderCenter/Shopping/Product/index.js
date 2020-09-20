import React from 'react'
import PropTypes from 'prop-types'
import {Row} from 'reactstrap'
import {ToastContainer} from 'react-toastify'
import {connect} from 'react-redux'

import {addCartItem as cartAddItem} from 'duck/actions/cart'
import {setAllProducts} from 'duck/actions/products'
import * as util from 'helpers/util'
import {addCartItem} from 'api'
import ProductGrid from './components/ProductGrid'
import ProductList from './components/ProductList'

const Product = (props) => {
  function handleAddCartItem(product) {
    const quantity = 1
    const token = props.user.get('token')
    product['quantity'] = 1
    const payload = {
      id: product.id,
      quantity: quantity,
    }
    addCartItem(props.cart.get('cartID'), payload, token)
      .then((res) => {
        if (!res?.hasError) {
          const actionPayload = {
            item: product,
            quantity: quantity,
          }
          props.cartAddItem(actionPayload)
          util.showInfoNotification('Item added to cart')
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
  }

  const {products, display} = props

  const getNodes = () => {
    if (display === 1) {
      return <ProductGrid products={products} handleAddCartItem={handleAddCartItem} />
    } else if (display === 2) {
      return <ProductList products={products} handleAddCartItem={handleAddCartItem} />
    } else {
      return ''
    }
  }

  return (
    <Row>
      <ToastContainer />
      {getNodes()}
    </Row>
  )
}

Product.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array,
  setAllProducts: PropTypes.func,
  cartAddItem: PropTypes.func,
  cart: PropTypes.object,
  display: PropTypes.number,
}

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
})

const mapDispatchToProps = {setAllProducts, cartAddItem}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
