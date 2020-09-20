import React, {useState} from 'react'
import {Row, Col, Card, CardBody, Button, ButtonGroup, Collapse} from 'reactstrap'

import OrderButtonGroup from './components/OrderButtonGroup'
import OrderDetails from './components/OrderDetails'
import OrderItems from './components/OrderItems'
import OrderNav from './components/OrderNav'

const ViewOrder = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-3 mt-3">
          <CardBody className="py-2 bg-primary">
            <Row className="text-white">
              <Col sm={8} lg={8} className="my-auto">
                <i className="fa fa-shopping-cart"></i>
                <span className="big ml-1"> Order Search: 1045342</span>
              </Col>
              <Col className="text-lg-right text-center" lg={4} sm={4}>
                <ButtonGroup size="sm">
                  <Button color="info">
                    <i className="fa fas fa-fast-backward mr-1"></i>
                    <span>First</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-step-backward mr-1"></i>
                    <span>Prev</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-step-forward mr-1"></i>
                    <span>Next</span>
                  </Button>
                  <Button color="info">
                    <i className="fa fas fa-fast-forward mr-1"></i>
                    <span>Last</span>
                  </Button>
                </ButtonGroup>
                <i
                  onClick={toggleOpen}
                  style={{cursor: 'pointer'}}
                  className={isOpen ? 'fa far fa-angle-up ml-2' : 'fa far fa-angle-down ml-2'}></i>
              </Col>
            </Row>
          </CardBody>
          <Collapse isOpen={isOpen} className="m-3">
            <OrderButtonGroup />
            <OrderDetails />
            <OrderItems />
            <OrderNav />
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewOrder
