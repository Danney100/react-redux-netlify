import React, {useState} from 'react'
import {Row, Col, Button, Card, FormGroup, Label, Input, CardHeader, CardBody} from 'reactstrap'
import PropTypes from 'prop-types'
import Subscription from './Subscription'

const SubscriptionGroup = ({addSubscriptionGrp, removeSubscriptionGrp}) => {
  const [subscriptionCount, setSubscriptionCount] = useState(1)

  const addSubscription = () => {
    setSubscriptionCount((prevState) => prevState + 1)
  }

  const removeSubscription = () => {
    if (subscriptionCount > 0) {
      setSubscriptionCount((prevState) => prevState - 1)
    }
  }

  const renderSubscriptions = () => {
    let grps = []
    for (let i = 0; i < subscriptionCount; i++) {
      grps.push(
        <Subscription
          key={i}
          id={i}
          addSubscription={addSubscription}
          removeSubscription={removeSubscription}
        />,
      )
    }
    return grps
  }

  return (
    <Card className="mt-3">
      <CardHeader className="bg-primary">
        <Row className="align-items-center text-white">
          <Col className="col-md-auto">Group Name</Col>
          <Col lg={3} sm={12} xs={12} className="pl-lg-0">
            <Input />
          </Col>
          <Col lg={3} className="mt-2 mt-lg-0 m-lg-auto">
            <FormGroup row className="m-0">
              <Label className="my-auto">Min Qty</Label>
              <Col lg={8} xs={6} sm={6}>
                <Input type="number" />
              </Col>
            </FormGroup>
          </Col>
          <Col lg={3} className="mt-2 mt-lg-0 m-lg-auto">
            <FormGroup row className="m-0">
              <Label className="my-auto">Max Qty</Label>
              <Col lg={8} xs={6} sm={6}>
                <Input type="number" />
              </Col>
            </FormGroup>
          </Col>
          <Col className="text-right col-md-auto">
            <Button color="warning" onClick={removeSubscriptionGrp}>
              <i className="fa fas fa-minus" />
            </Button>
            <Button color="success" className="ml-1" onClick={addSubscriptionGrp}>
              <i className="fa fas fa-plus" />
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {subscriptionCount === 0 && (
          <Row className="justify-content-center mt-2">
            <span
              onClick={addSubscription}
              className="badge badge-light"
              style={{cursor: 'pointer'}}>
              Add another Subscription
            </span>
          </Row>
        )}
        {renderSubscriptions()}
      </CardBody>
    </Card>
  )
}

SubscriptionGroup.propTypes = {
  addSubscriptionGrp: PropTypes.func,
  removeSubscriptionGrp: PropTypes.func,
}

export default SubscriptionGroup
