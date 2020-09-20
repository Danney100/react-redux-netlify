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
  Label,
  Input,
  Media,
  ListGroupItem,
} from 'reactstrap'

const GiftModal = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoOne =
    'Enter your gift card code here. Your balance will be redeemed fully. There are no partial gift cards accepted.'

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom pb-2">
          Redeem Gift Card
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
            <FormGroup row>
              <Label for="input" sm={{size: 3, offset: 3}} className="d-flex">
                Code
              </Label>
              <Col sm={5}>
                <Input></Input>
              </Col>
            </FormGroup>
          </Form>
          <Row>
            <Col className="pagination justify-content-end">
              <Button onClick={toggle} color="primary">
                Verify
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

export default GiftModal
