import React, {useState} from 'react'
import {Modal, ModalBody, ModalHeader, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'
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
      <Row className="mx-4">
        <span className={classes.title}>Addresses</span>
      </Row>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} close={closeBtn} className={classes.modelTitle}>
          New Adress
        </ModalHeader>
        <ModalBody className="mx-3">
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
            size="lg">
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              <span className={classes.modelText}>
                There are missing or invalid fields. Please correct them and try again.
              </span>
              <div className="d-flex float-right mt-5">
                <CommonButton title="Continue" buttonType="continueButton" onClick={toggleNested} />
              </div>
            </ModalBody>
          </Modal>
          <Form>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                Nick Name *
              </Label>
              <Col sm={6}>
                <Input type="text"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                First Name *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                Last Name *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                Company
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
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
              <Label for="input" sm={6} className={classes.modelLabel}>
                Street1 *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                City *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                State *
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option></option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                Phone number *
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
                Street2
              </Label>
              <Col sm={6}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}>
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
              <Label for="input" sm={6} className={classes.modelLabel}>
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
              <Label for="input" sm={6} className={classes.modelLabel}></Label>
              <Col sm={4} className="ml-3">
                <Input type="checkbox" />
                <span>Default</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className={classes.modelLabel}></Label>
              <Col sm={4} className="ml-3">
                <Input type="checkbox" />
                <span>Mailing</span>
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
      <div className="mt-3 mb-3">
        <MainTable />
        <Row className="mx-2">
          <Col className="pagination justify-content-end">
            <CommonButton title="Add New Address" buttonType="addButton" onClick={toggle} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddressTable
