import React, {useState, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  FormGroup,
  CardTitle,
  CardBody,
  Input,
  Label,
  Collapse,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form,
  Button,
  ButtonGroup,
} from 'reactstrap'
import {connect, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import OrderDetails from './components/OrderDetails'
import OrderItems from './components/OrderItems'
import OrderNav from './components/OrderNav'
import {getOrderDetials} from 'api'
import {setOrderDetails} from 'duck/actions/order'
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
  title: {
    fontSize: '16px',
    color: '#403839',
    fontFamily: 'Oswald-SemiBold',
  },
  filterTitle: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  inputStyle: {
    fontSize: '14px',
    color: '#adaaaa',
    fontFamily: 'SFUIText-Medium',
  },
  paginationStyle: {
    height: 42.4,
    width: 31,
    marginLeft: 4,
    borderRadius: 5,
    fontSize: 15,
  },
  buttonStyle: {
    height: 40,
    fontSize: '16px',
    color: 'black',
    fontFamily: 'SFUIText-Semibold',
    width: 32,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
  },
  font: {
    color: '#a09d9d',
    fontFamily: 'Avenir-Heavy',
    fontSize: '12px',
  },
  item: {
    color: 'a09d9d',
    fontFamily: 'Avenir-Roman',
    fontSize: '14px',
    width: '145px',
    marginRight: '55px',
    marginTop: '2px',
  },
  button: {
    display: 'flex',
    flexDirection: 'colum',
    alignItems: 'center',
  },
})

const ViewOrder = (props) => {
  const [isOpen] = useState(true)

  const orderToDisplay = props.order.get('orderToDisplay')
  const token = props.user.get('token')
  const dispatch = useDispatch()
  const classes = useStyles()
  const payload = {
    id: orderToDisplay,
    token: token,
  }
  useEffect(() => {
    if (orderToDisplay) {
      getOrderDetials(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setOrderDetails(res.data))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [orderToDisplay])

  return (
    <Row className="p-3">
      <Col>
        <Card className="mb-3">
          <Row className="mt-3 mx-4 d-flex justify-content-between border-bottom">
            <Col
              xs={12}
              sm={12}
              md={7}
              className={`${classes.title} d-flex justify-content-start mt-3`}>
              Order Search: 778328 (record 2 of 500 )
            </Col>
            <Col
              lg="4"
              md={4}
              className="d-flex mb-2 mt-2 mr-0 mb-lg-0 justify-content-lg-end justify-content-center">
              <Pagination aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink first className={classes.paginationStyle} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink previous className={classes.paginationStyle} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next className={classes.paginationStyle} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink last className={classes.paginationStyle} />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
          <OrderDetails />
        </Card>
      </Col>
      <Col md={2} lg={2} className="mb-3">
        <Row>
          <CommonButton className="mr-2 mb-2" title="Ship Order" buttonType="orderButton" />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton className="mr-2 mb-2" title="View Invoice" buttonType="orderButton" />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton className="mr-2 mb-2" title="Financials" buttonType="orderButton" />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton className="mr-2 mb-2" title="Post Order" buttonType="orderButton" />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton className="mr-2 mb-2" title="Lock Order" buttonType="orderButton" />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton
            className="col-md-4 col-lg-2"
            title="Make Non-Commissionable"
            buttonType="orderMakeButton"
          />
        </Row>
        <Row className="mb-4 mt-4">
          <CommonButton className="mr-2 mb-2" title="Void Order" buttonType="orderButton" />
        </Row>
        <Row className="mb-3 mt-3">
          <CommonButton className="mr-2 mb-2" title="View" buttonType="orderButton" />
        </Row>
      </Col>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-2 mt-4">
          <CardBody className="py-2 text-white rounded-top mx-1 border-bottom">
            <Row tag="h5" className="mb-0 d-flex justify-content-between">
              <Col sm={2} className="d-flex justify-content-start">
                <span className={`${classes.title} mt-4`}>Your Cart</span>
              </Col>
              <Col sm={{size: 10}} className="d-flex justify-content-end">
                <Row >
                  <Col md={{size: 1, offset: 3}} className="d-flex justify-content-start">
                    <Label className={`${classes.font} mt-3 ml-4`}>Qty</Label>
                  </Col>
                  <Col md={2} className="d-flex justify-content-start mt-1">
                    <ButtonGroup width="88px" height="40px">
                      <Button outline color="secondary" className={classes.buttonStyle}>
                        -
                      </Button>
                      <Button outline color="secondary" className={classes.buttonStyle}>
                        1
                      </Button>
                      <Button outline color="secondary" className={classes.buttonStyle}>
                        +
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col md={3} className="d-flex justify-content-start">
                    <Input className={`${classes.item} mt-1`} placeholder="Item SKU/Name" />
                  </Col>
                  <Col md={2} className="d-flex justify-content-start mt-1">
                    <CommonButton title="Quick Add Item" buttonType="refundButton" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
          <OrderItems />
          <Row className="mb-3">
            <Col sm={2} xs={12} className="text-lg-left text-center">
              <CommonButton title="Cancel" buttonType="cancelButton" />
            </Col>
            <Col
              sm={10}
              xs={12}
              style={{
                top: '7px',
                height: 'fit-content',
              }}
              className="text-lg-right text-center p-0 pr-2">
              <CommonButton title="Recalculate Tax Only" buttonType="calculateButton" />
              <CommonButton className="mb-1" title="Recalculate Order" buttonType="calculateButton" />
              <CommonButton title="Save" buttonType="saveButton" />
            </Col>
          </Row>
        </Card>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-3 mt-4">
          <Collapse isOpen={isOpen} className="m-3">
            <OrderNav />
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

ViewOrder.propTypes = {
  order: PropTypes.object,
  orderToDisplay: PropTypes.string,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

export default connect(mapStateToProps)(ViewOrder)
