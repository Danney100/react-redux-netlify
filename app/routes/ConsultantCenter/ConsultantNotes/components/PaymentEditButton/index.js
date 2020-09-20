import React, {useState} from 'react'
import {
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
import {makeStyles} from '@material-ui/core/styles'
import iconEdit from 'images/commonIcons/edit.svg'

const useStyles = makeStyles({
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
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

const PaymentEditButton = () => {
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
      <div color="link" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col>
            <div className={classes.imgSize}>
              <img src={iconEdit} className={classes.imageSize} />
            </div>
          </Col>
          <Col>Edit</Col>
        </Row>
      </div>
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
                <Input type="select" name="select" placeholder="" className="rounded-0">
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
                <Input type="select" name="select" placeholder="" className="rounded-0">
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
                <Input type="select" name="select" placeholder="" className="rounded-0">
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
                <Input type="select" name="select" placeholder="" className="rounded-0">
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
    </div>
  )
}

export default PaymentEditButton
