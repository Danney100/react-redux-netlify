import React from 'react'
import {
  Button,
  Modal,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ButtonGroup,
  Row,
  Col,
} from 'reactstrap'
import PropTypes from 'prop-types'

const TransactionModal = ({toggle, modal}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} style={{maxWidth: '100%'}} className="m-5">
        <Card>
          <CardHeader>
            <Row>
              <Col lg={6} xs={6} sm={6} className="text-black">
                View Payment
              </Col>
              <Col lg={6} xs={6} sm={6} className="text-right my-auto">
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  style={{cursor: 'pointer'}}
                  onClick={toggle}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm={12} xs={12} lg={8} className="my-auto h4">
                Payment on order 780393 - N/A (C207771)
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
              </Col>
            </Row>
            <Row className="bg-light text-black mt-3 m-0 p-3 rounded">
              <Col lg={3} className="text-center text-left-md mb-1">
                <span className="font-weight-bold">Payment Date</span>
                <br />
                <span>6/19/2020</span>
              </Col>
              <Col lg={3} className="text-center text-left-md mb-1">
                <span className="font-weight-bold">PAYMENT AMOUNT</span>
                <br />
                <span>$56.03</span>
              </Col>
              <Col lg={3} className="text-center text-left-md mb-1">
                <span className="font-weight-bold">Type</span>
                <br />
                <span>Credit Card Payment</span>
              </Col>
              <Col lg={3} className="text-center text-left-md mb-1">
                <span className="font-weight-bold">PROCESSED BY</span>
                <br />
                <span>sunnytest@gmail.com</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4} className="d-flex align-items-stretch">
                <Card className="mb-3 p-3 w-100 bg-light text-black">
                  <CardTitle tag="h5">Payment Details</CardTitle>
                  <Row>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Payment Type
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      Credit Card Payment
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Card Type
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      Visa
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Last 4 Digits
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      7454
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Expiration Date
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      12/24
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Name on Card
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      Sunny
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Process Time
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      6/19/2020 12:12 AM
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Accepted
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      Yes
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Gateway
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      IDSTC Internal Credit Card
                    </Col>
                    <Col lg={6} className="text-lg-right font-weight-bold">
                      Transaction ID
                    </Col>
                    <Col lg={6} className="text-lg-left pl-lg-0">
                      6e11a7c1-3400-4abe-8a54-1b403f06aa3c
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col sm={4} className="d-flex align-items-stretch">
                <Card className="mb-3 p-3 w-100 bg-light text-black">
                  <CardTitle tag="h5">Billing Address</CardTitle>
                  <Col className="pl-0">
                    <span>260-C North El Camino Real</span>
                    <br /> <span>Encinitas, CA 92024</span>
                    <br /> <span>United States</span>
                  </Col>
                </Card>
              </Col>
              <Col sm={4} className="d-flex align-items-stretch">
                <Card className="mb-3 p-3 w-100 bg-light text-black">
                  <CardTitle tag="h5">Payment Notes</CardTitle>
                  <Col className="pl-0">
                    <span>Refunded Amount: $0.00</span>
                  </Col>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={6} sm={6} md={6} className="text-left">
                <Button color="success" onClick={toggle}>
                  <i className="fa fa-times-circle-o mr-1" color="info" aria-hidden="true" />
                  Close
                </Button>
              </Col>
              <Col lg={6} xs={6} sm={6} md={6} className="text-right">
                <Button color="warning">
                  <i className="fa fas fa-ban mr-1" />
                  Void Order
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Modal>
    </div>
  )
}

TransactionModal.propTypes = {
  toggle: PropTypes.func,
  modal: PropTypes.bool,
}

export default TransactionModal
