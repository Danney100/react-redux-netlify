import React from 'react'
import {Row, Col, Card, Input, CardBody, CardTitle, ListGroup, Label} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'
import PaginationsList from 'routes/components/PaginationList/index'
import CouponTable from './CouponTable'

const useStyles = makeStyles({
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  style: {
    fontSize: '14px',
    fontFamily: 'Avenir-Heavy',
    color: '#403839',
  },
})

const Coupons = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex">
                <div>
                  <span className={classes.title}>Coupons</span>
                </div>
              </CardTitle>
            </CardBody>
            <Col className="mb-0">
              <Row>
                <span className={`${classes.style} mt-4 pl-4 mr-3`}>
                  <Label>Coupon Code</Label>
                </span>
                <Col xs={12} sm={12} md={2} className="mt-3 mr-5">
                  <Input />
                </Col>
                <Col xs={12} sm={12} md={8} className="mt-3 d-flex justify-content-end">
                  <CommonButton title="+ Add Coupon Code" buttonType="addCouponButton" />
                </Col>
              </Row>
            </Col>
            <div>
              <ListGroup>
                <CouponTable />
                <PaginationsList />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Coupons
