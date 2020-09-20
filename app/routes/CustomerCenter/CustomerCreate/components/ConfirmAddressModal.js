import React from 'react'
import PropTypes from 'prop-types'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input} from 'reactstrap'

const ConfirmAddressModal = ({
  trigger,
  setModalTrigger,
  getValues,
  handleSubmit,
  handleAddNewCustomer,
}) => {
  const setToggleModel = () => setModalTrigger(!trigger)

  const {shipping_address} = getValues()

  if (!shipping_address) {
    return ''
  }

  return (
    <Modal isOpen={trigger} toggle={setToggleModel}>
      <ModalHeader toggle={setToggleModel}>
        <span className="text-success">Confirm Address</span>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            Looks like the address information you entered is not accurate. Please either choose to
            re-enter your address information or continue with the matching verified address
            information provided below.
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Col>
              <Input type="radio" name="address" />
              <span style={{fontWeight: '700'}}>Entered Address</span>
            </Col>
            <Col className="px-0">
              <Col>
                <span>{shipping_address.street_1}</span>
              </Col>
              <Col>
                <span>{shipping_address.street_2}</span>
              </Col>
              <Col>
                <span>{`${shipping_address?.city ? shipping_address?.city + ',' : ''} ${
                  shipping_address.state.label
                } ${shipping_address.postal_code}`}</span>
              </Col>
              <Col>
                <span>{shipping_address.country.label}</span>
              </Col>
              <Col>
                <span>{shipping_address.phone_number}</span>
              </Col>
            </Col>
          </Col>
          <Col md={6}>
            <Col>
              <Input type="radio" name="address" defaultChecked={true} />
              <span style={{fontWeight: '700'}}>Validated Address</span>
            </Col>
            <Col className="px-0">
              <Col>
                <span>{shipping_address.street_1}</span>
              </Col>
              <Col>
                <span>{shipping_address.street_2}</span>
              </Col>
              <Col>
                <span>{`${shipping_address?.city ? shipping_address?.city + ',' : ''} ${
                  shipping_address.state.label
                } ${shipping_address.postal_code}`}</span>
              </Col>
              <Col>
                <span>{shipping_address.country.label}</span>
              </Col>
              <Col>
                <span>{shipping_address.phone_number}</span>
              </Col>
            </Col>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button className="ml-1" color="success" onClick={handleSubmit(handleAddNewCustomer)}>
          Continue with selected address
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ConfirmAddressModal.propTypes = {
  trigger: PropTypes.bool,
  setModalTrigger: PropTypes.func,
  getValues: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleAddNewCustomer: PropTypes.func,
}

export default ConfirmAddressModal
