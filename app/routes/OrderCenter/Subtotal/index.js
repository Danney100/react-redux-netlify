import React, {useState} from 'react'
import {Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OverPaid from './components/Overpaid'
import DetailPanel from './components/DetailPanel'
import MoonLoader from 'react-spinners/MoonLoader'
import {Map} from 'immutable'

const SubTotal = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const user = props.cart.getIn(['user'], Map()).toJS()
  const orderDetails = props.order.getIn(['inProgressOrder'], Map()).toJS()

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  if (!Object.entries(orderDetails).length) {
    return ''
  }

  const billing_address = orderDetails.data.billing_address
  const shipping_address = orderDetails.data.shipping_address
  const price_details = orderDetails.data.meta.display_price
  const order_items = orderDetails.included.items
  const itemCount = props.cart.get('itemCount')

  return (
    <React.Fragment>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button className="rounded-0 bg-success border-0">
            <i className="fa fa-fw fa-shopping-cart mr-1"></i>
            {itemCount}
          </Button>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              className="rounded-0 bg-success border-0 text-white"
              caret></DropdownToggle>
            <DropdownMenu style={{left: '-114px'}}>
              <DropdownItem divider />
              <DropdownItem header>
                <strong>Sub total:{orderDetails.data.meta.display_price.with_tax.formatted}</strong>
              </DropdownItem>
              <DropdownItem>View or Edit Cart</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <OverPaid order={orderDetails} />
          <DetailPanel
            billing_address={billing_address}
            shipping_address={shipping_address}
            price_details={price_details}
            order_items={order_items}
            user={user}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

SubTotal.propTypes = {
  process: PropTypes.object,
  order: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
  cart: state.cart,
  process: state.process,
})

export default connect(mapStateToProps)(SubTotal)
