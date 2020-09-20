import React, {useState} from 'react'
import {
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const PersonalzationTable = () => {
  const [modal, setModal] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const closeBtnOne = (
    <button className="close" onClick={toggleNested}>
      &times;
    </button>
  )

  return (
    <div className="mt-3">
      <Row>
        <Col className="pagination justify-content-end">
          <Button onClick={toggle} color="spotify">
            <i className="fa fa-plus mr-2"></i>
            Add Personalzation
          </Button>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Adress
        </ModalHeader>
        <ModalBody className="mx-5">
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              <span className="text-dark">
                There are missing or invalid fields. Please correct them and try again.
              </span>
              <Button onClick={toggleNested} color="secondary" className="mt-3 float-right">
                Continue
              </Button>
            </ModalBody>
          </Modal>
          <Form>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex text-dark">
                Nick Name *
              </Label>
              <Col sm={6}>
                <Input type="text"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                First Name *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Last Name *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Company
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Country *
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option defaultValue=""></option>
                  <option>United States</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Street1 *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                City *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                State *
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option></option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Phone number *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Street2
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Validated
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option defaultValue=""></option>
                  <option>Unknown</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Residential
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option defaultValue="">Yes</option>
                  <option>No</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark"></Label>
              <Col sm={4} className="ml-3">
                <Input type="checkbox" />
                <span>Default</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark"></Label>
              <Col sm={4} className="ml-3">
                <Input type="checkbox" />
                <span>Mailing</span>
              </Col>
            </FormGroup>
          </Form>
          <Row className="m-0">
            <Col>
              <Button onClick={toggle} color="danger">
                <i className="fa fa-times-circle mr-2"></i>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggleNested} color="primary">
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div className="border mt-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th className="align-middle">
                <span>Display Order</span>
              </th>
              <th className="align-middle">
                <span>Name</span>
              </th>
              <th className="align-middle">
                <span>Description</span>
              </th>
              <th className="align-middle">
                <span>Input Type</span>
              </th>
              <th className="align-middle">
                <span>Enabled</span>
              </th>
              <th className="align-middle">
                <span>Required</span>
              </th>
              <th className="align-middle">
                <span>Default</span>
              </th>
              <th className="align-middle">
                <span></span>
              </th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Col>
            <Button onClick={toggle} color="danger">
              <i className="fa fa-times-circle mr-2"></i>
              Cancel
            </Button>
          </Col>
          <Col className="pagination justify-content-end">
            <Button onClick={toggleNested} color="primary">
              <i className="fa fa-check-circle mr-2"></i>
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PersonalzationTable
