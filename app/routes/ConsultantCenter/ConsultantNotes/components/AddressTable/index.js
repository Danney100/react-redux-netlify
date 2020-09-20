import React, {useState} from 'react'
import {
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Pagination,
  Button,
  PaginationLink,
  PaginationItem,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import Demodata from '../../../ConsultantCreate/components/DemoData.json'
import AddressButton from '../AddressButton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  addButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    fontSize: 13,
  },
  cancelButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 180,
    fontSize: 13,
  },
  continueButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    marginTop: 20,
    float: 'right',
    width: 180,
    fontSize: 13,
  },
  saveButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 180,
    fontSize: 13,
  },
})

const AddressTable = () => {
  const classes = useStyles()
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
    <div>
      <Row>
        <Col>
          <h4>
            <span className="text-dark font-weight-bold">Addresses</span>
          </h4>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Adress
        </ModalHeader>
        <ModalBody className="mx-3">
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              <span className="text-dark">
                There are missing or invalid fields. Please correct them and try again.
              </span>
              <Button onClick={toggleNested} color="secondary" className={classes.continueButton}>
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
          <Row>
            <Col>
              <Button onClick={toggle} className={classes.cancelButton}>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggleNested} className={classes.saveButton}>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Street1</span>
              </th>
              <th>
                <span>Street2</span>
              </th>
              <th>
                <span>City</span>
              </th>
              <th>
                <span>State</span>
              </th>
              <th>
                <span>Zip</span>
              </th>
              <th>
                <span>Country Name</span>
              </th>
              <th>
                <span>Default</span>
              </th>
              <th>
                <span>Mailing</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{Demodata.CreditCard.Street1}</th>
              <th>{Demodata.CreditCard.Street2}</th>
              <th>{Demodata.CreditCard.City}</th>
              <th>{Demodata.CreditCard.State}</th>
              <th>{Demodata.CreditCard.PostalCode}</th>
              <th>{Demodata.CreditCard.Country}</th>
              <th>Yes</th>
              <th>Yes</th>
              <th>
                <AddressButton />
              </th>
            </tr>
          </tbody>
        </Table>
        <div className="mx-2 mt-3 d-flex justify-content-between">
          <div>
            <Pagination
              size="md"
              className="pagination justify-content-end"
              aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">0</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#"></PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <div>
            <span>No items to display</span>
          </div>
        </div>
        <Row>
          <Col className="pagination justify-content-end">
            <Button onClick={toggle} className={classes.addButton}>
              Add New CreditCard
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddressTable
