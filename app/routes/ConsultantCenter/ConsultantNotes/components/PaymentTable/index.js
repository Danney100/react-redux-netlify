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
import PaymentButton from '../PaymentButton'
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

const PaymentTable = () => {
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
      <Row className="m-0">
        <Col sm="6">
          <h5 className="mt-2 mb-2 text-dark font-weight-bold">Credit Card Payment Methods</h5>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Payment
        </ModalHeader>
        <ModalBody className="mx-3">
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              There are missing or invalid fields. Please correct them and try again.
              <Button onClick={toggleNested} color="secondary" className={classes.continueButton}>
                Continue
              </Button>
            </ModalBody>
          </Modal>
          <Form>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Name On Card
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{size: '8', offset: '4'}}>
                <i className="fa fa-cc-visa ml-2 fa-2x"></i>
                <i className="fa fa-cc-mastercard ml-2 fa-2x"></i>
                <i className="fa fa-cc-amex ml-2 fa-2x"></i>
                <i className="fa fa-cc-discover ml-2 fa-2x"></i>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Card Number
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Expiration Date
              </Label>
              <Col sm={4}>
                <Input type="select" name="select" placeholder="">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Input>
              </Col>
              <Col sm={4}>
                <Input type="select" name="select" placeholder="">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button className="d-flex" sm={12} md={12} lg={12} color="info">
                  <i className="fa fa-clipboard mr-1 "></i>
                  Use Default Address For Billing
                </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Country
              </Label>
              <Col sm={8}>
                <Input type="select" name="select" placeholder="">
                  <option defaultValue="United States"></option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Street 1 *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Street 2
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                City *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                State *
              </Label>
              <Col sm={8}>
                <Input type="select" name="select" placeholder="">
                  <option></option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>AE</option>
                  <option>AP</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>Califonia</option>
                  <option>Colorado</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Postal Code *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Phone Number
              </Label>
              <Col sm={8}>
                <Input />
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
                <span>Last4ofCC</span>
              </th>
              <th>
                <span>Exp Date</span>
              </th>
              <th>
                <span>Type</span>
              </th>
              <th>
                <span>Name on Card</span>
              </th>
              <th>
                <span>Address</span>
              </th>
              <th>
                <span>Default</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <span>{Demodata.CreditCard.CardNumber}</span>
              </th>
              <th>
                <span>06/2020</span>
              </th>
              <th>
                <span>Visa</span>
              </th>
              <th>
                <span>{Demodata.CreditCard.NameOnCard}</span>
              </th>
              <th>
                <span>761 Wodgi Road Suite 222 Jopgiwaz, Florida 72046 United States</span>
              </th>
              <th>
                <span>Yes</span>
              </th>
              <th>
                <PaymentButton />
              </th>
            </tr>
          </tbody>
        </Table>
        <div className="mx-2 mt-2 d-flex justify-content-between">
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
            <span className="text-dark">No items to display</span>
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

export default PaymentTable
