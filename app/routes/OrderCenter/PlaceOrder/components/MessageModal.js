import React, {useState} from 'react'
import {
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Media,
  ListGroupItem,
} from 'reactstrap'

const MessageModal = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoOne =
    "Is this order a gift?  Add a special touch with a personalized message.  Include a note to your recipient in the box below (up to 275 characters).  For Holiday Gift Sets, we'll print your message on a personalized notecard and include it in the box.  For all other orders, this message will be included on the order invoice included in the shipment.  Note:  The same message will be included with everything in this order.  To create individual gift messages, please create separate orders for each gift."

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom pb-2">
          Edit Gift Message
        </ModalHeader>
        <ModalBody>
          <ListGroupItem className="border">
            <Media>
              <Media className="ml-2">
                <span className="fa-stack fa-lg text-warning">
                  <i className="fa fas fa-question-circle fa-2x"></i>
                </span>
              </Media>
              <Media>
                <span>
                  <p className="ml-3">{DemoOne}</p>
                </span>
              </Media>
            </Media>
          </ListGroupItem>
          <Form className="mt-3">
            <FormGroup>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
          <Row>
            <Col>
              <Button onClick={toggle} color="danger">
                <i className="fa fa-times-circle mr-2"></i>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggle} color="primary">
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Button onClick={toggle} color="info" className="border-0">
        <i className="fa fa-gift mr-2"></i>
        Redeem Gift Card{' '}
      </Button>
    </div>
  )
}

export default MessageModal
