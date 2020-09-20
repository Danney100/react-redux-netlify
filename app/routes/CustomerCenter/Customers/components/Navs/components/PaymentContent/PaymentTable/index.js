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
import CommonButton from 'routes/components/CommonButton'
import MainTable from '../MainTable'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 21,
    color: '#403839',
  },
  modelTitle: {
    fontSize: 22,
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  modelLabel: {
    fontSize: 12,
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  modelText: {
    fontFamily: 'SFUIText-Semibold',
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
      <Row className="mx-2">
        <Col sm="6">
          <span className={classes.title}>Credit Card Payment Methods</span>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className={classes.modelTitle}>
          New Payment
        </ModalHeader>
        <ModalBody className="mx-3">
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody className={classes.modelText}>
              There are missing or invalid fields. Please correct them and try again.
              <div className="d-flex float-right mt-5">
                <CommonButton title="Continue" buttonType="continueButton" onClick={toggleNested} />
              </div>
            </ModalBody>
          </Modal>
          <Form>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
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
              <Label for="input" sm={4} className={classes.modelLabel}>
                Card Number
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
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
              <Label for="input" sm={4} className={classes.modelLabel}>
                Country
              </Label>
              <Col sm={8}>
                <Input type="select" name="select" placeholder="">
                  <option defaultValue="United States"></option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Street 1 *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Street 2
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                City *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
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
              <Label for="input" sm={4} className={classes.modelLabel}>
                Postal Code *
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Phone Number
              </Label>
              <Col sm={8}>
                <Input />
              </Col>
            </FormGroup>
          </Form>
          <Row>
            <Col className="d-flex justify-content-end">
              <CommonButton title="Cancel" onClick={toggle} buttonType="cancelButton" />
              <CommonButton title="Save" buttonType="saveButton" onClick={toggleNested} />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <MainTable />
      <Row className="mb-3 mr-2">
        <Col className="pagination justify-content-end">
          <CommonButton title="Add New CreditCard" buttonType="addButton" onClick={toggle} />
        </Col>
      </Row>
    </div>
  )
}

export default PaymentTable
