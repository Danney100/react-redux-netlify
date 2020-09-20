import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  ListGroup,
  CardTitle,
  Label,
  FormGroup,
  Button,
  Card,
  Input,
  Table,
} from 'reactstrap'
import MoonLoader from 'react-spinners/MoonLoader'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Map, List, fromJS} from 'immutable'
import CommonButton from 'routes/components/CommonButton'
import {cartDetailsWatcher} from 'duck/watcher'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '16px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
    marginBottom: '10px',
  },
  card_content_fir: {
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Medium',
  },
  card_content_sec: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  card_size_sec1: {
    height: '145px',
  },
  card_size_sec2: {
    height: '165px',
  },
  card_property_name: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  card_property_value: {
    fontSize: '14px',
    color: 'red',
    fontFamily: 'SFUIText-Medium',
  },
  card_property_number: {
    fontSize: '32px',
    color: '#27bfa3',
    fontFamily: 'DINCondensed-Bold',
  },
})

const ViewCart = (props) => {
  const itemCount = props.cart.get('itemCount')
  const cartID = props.cart.get('cartID')
  const cartType = props.cart.get('cartType')
  const cartDetails = props.cart.getIn(['cartDetails'], Map()).toJS()
  const cartItems = fromJS(props.cart.get('items', List())).toJS()
  const classes = useStyles()

  const token = props.user.get('token')

  const history = useHistory()

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart/createperson'
    if (cartType === 'existing') {
      path =
        '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout'
    } else {
      path = '/order-center/create-new-order/shopping/viewcart/createperson'
    }
    history.push(path)
  }

  const routeChange1 = () => {
    let path = '/order-center/create-new-order/shopping'
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('OrderCenter > My Cart')
  }, [])

  useEffect(() => {
    if (itemCount) {
      props.cartDetailsWatcher({cartID, token})
    }
  }, [cartID, itemCount])

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  return (
    <div className="p-3">
      <Row>
        <div className={classes.title}>My Cart</div>
      </Row>
      <Row>
        <Col md="6">
          <Card className="mb-4">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>SCOUT SAFE SHIP</span>
                </div>
              </CardTitle>
            </div>
            <div>
              <Row className="ml-4 mr-4 mt-2 mb-1">
                <span className={`${classes.card_content_fir}`}>
                  Add 1 more bottle without additional shipping charges! With Scout Safe Ship, the
                  shipping rate depends on how many bottles of Clean-Crafted™ wine are in your
                  order. You can order up to 4 bottles total for the same shipping rate! So go
                  ahead, add to cart. As always, your order is backed by our Do The Right Thing
                  Guarantee.
                </span>
              </Row>
              <Row className="ml-4 mb-4 mt-3">
                <span className={`${classes.card_content_sec}`}>Order Weight: 3</span>
              </Row>
            </div>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-2">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>Boost Your Stash For Less Cash!</span>
                </div>
              </CardTitle>
            </div>
            <div className={`${classes.card_size_sec1} ml-4 mr-4 mt-2 mb-1`}>
              <span className={`${classes.card_content_sec}`}>
                Buy at least 6+ bottles to receive 5% off your entire order!
              </span>
            </div>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Card md={12} className="mb-4 mt-2">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>My Cart</span>
                </div>
              </CardTitle>
            </div>
            <ListGroup>
              {Object.keys(cartDetails).length === 0 ? (
                <div className="text-center p-4">No items in cart</div>
              ) : (
                <div className="pl-1">
                  <Col>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th className="align-middle">
                            <span>SKU</span>
                          </th>
                          <th className="align-middle">
                            <span>Item</span>
                          </th>
                          <th className="align-middle">
                            <span>Individual Price</span>
                          </th>
                          <th className="align-middle">
                            <span>Total Price</span>
                          </th>
                          <th className="align-middle">
                            <span>Rewards</span>
                          </th>
                          <th className="align-middle">
                            <span>Quantity</span>
                          </th>
                          <th className="align-middle">
                            <span>Edit Item</span>
                          </th>
                          <th className="align-middle">
                            <span>Totals</span>
                          </th>
                          <th className="align-middle">
                            <span>Product Total</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td className="align-middle">{item.name}</td>
                              <td className="align-middle">{item.description}</td>
                              <td className="align-middle">{`$${item.price['amount'] / 100}`}</td>
                              <td className="align-middle">{`$${
                                (item.price['amount'] * item.quantity) / 100
                              }`}</td>
                              <td className="align-middle">
                                <span>
                                  <Input type="text"></Input>
                                </span>
                              </td>
                              <td className="align-middle">{item.quantity}</td>
                              <td className="align-middle">
                                <span>
                                  <Col>
                                    <Button className="mb-1 mr-1">
                                      <i className="fa fa-refresh" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="mb-1 mr-1">
                                      <i className="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                  </Col>
                                </span>
                              </td>
                              <td className="align-middle">{`$${item.price['amount'] / 100}`}</td>
                              <td className="align-middle">{`$${
                                (item.price['amount'] * item.quantity) / 100
                              }`}</td>
                            </tr>
                          )
                        })}
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total</td>
                          <td>{cartDetails.meta.display_price.with_tax.formatted}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </div>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col md="6" className="mt-2">
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>Quick Add Item</span>
                </div>
              </CardTitle>
            </div>
            <FormGroup row className="mt-4 ">
              <Label for="input" className={`${classes.card_property_name} ml-4`} sm={{size: 2}}>
                SKU
              </Label>
              <Col sm={8} className="mb-2  d-flex justify-content-end">
                <Input
                  type="text"
                  className={`${classes.card_property_value} mx-2 mr-2`}
                  placeholder="Item SKU/Name"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" className={`${classes.card_property_name} ml-4`} sm={{size: 2}}>
                QTY
              </Label>
              <Col sm={5} className="mb-2  d-flex justify-content-end">
                <Input type="number" className={`${classes.card_property_value} mr-2 ml-2`}></Input>
              </Col>
              <Col sm={3} className="mb-2 d-flex justify-content-center ml-3">
                <CommonButton title="Add Item" buttonType="filterButton" />
              </Col>
            </FormGroup>
          </Card>
        </Col>
        <Col md="6" className="mt-2">
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>Add Coupon Or Promo Code</span>
                </div>
              </CardTitle>
            </div>
            <div className={classes.card_size_sec2}>
              <FormGroup row className="mt-4">
                <Col sm={8} className="mb-2  d-flex justify-content-end ml-3">
                  <Input
                    type="text"
                    className={`${classes.card_property_value} mx-2 mr-2`}
                    placeholder="Enter Code"></Input>
                </Col>
                <Col sm={3} className="mb-2 d-flex justify-content-center ml-3">
                  <CommonButton title="Add Code" buttonType="filterButton" />
                </Col>
              </FormGroup>
            </div>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Card md={12} className="mb-3 mt-3">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-start">
                <div>
                  <span className={classes.subtitle}>Product Total</span>
                </div>
              </CardTitle>
            </div>
            <Row className="mt-2">
              <Label for="input" className={`${classes.card_property_name} ml-4`} sm={{size: 1}}>
                Price Total
              </Label>
              <Label for="input" className={`${classes.card_property_name} ml-4`} sm={{size: 1}}>
                $102.00
              </Label>
            </Row>
            <Row>
              <Label for="input" className={`${classes.card_property_name} ml-4`} sm={{size: 1}}>
                Rewards
              </Label>
              <Col className="d-flex justify-content-between">
                <Label
                  for="input"
                  className={`${classes.card_property_name} ml-4 d-flex justifycontent-start`}
                  sm={{size: 1}}>
                  $0.00
                </Label>
                <Label
                  for="input"
                  className={`${classes.card_property_number} mr-4 d-flex justifycontent-end`}>
                  $102.00
                </Label>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="d-flex justify-content-end mt-3">
          <CommonButton
            title="Continue Shopping"
            onClick={routeChange1}
            buttonType="cancelButton"
          />
          <CommonButton title="Checkout" onClick={routeChange} buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

ViewCart.propTypes = {
  cart: PropTypes.object,
  user: PropTypes.object,
  setLoadingStatus: PropTypes.func,
  process: PropTypes.object,
  cartDetailsWatcher: PropTypes.func,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  process: state.process,
  user: state.user,
})

const mapDispatchToProps = {cartDetailsWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart)
