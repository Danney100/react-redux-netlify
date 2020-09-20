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
import Demodata from '../../../ConsultantCreate/components/DemoData.json'
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

const AddressEditButton = () => {
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
      <Modal isOpen={modal} toggle={toggle} size="md">
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
                <Input type="text" value={Demodata.Name.NickName}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                First Name *
              </Label>
              <Col sm={6}>
                <Input value={Demodata.Name.FirstName}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Last Name *
              </Label>
              <Col sm={6}>
                <Input value={Demodata.Name.LastName}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Company
              </Label>
              <Col sm={6}>
                <Input value={Demodata.Name.CompanyName}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Country *
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option>United States</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Street1 *
              </Label>
              <Col sm={6}>
                <Input value={Demodata.DefaultMailingAddress.Street1}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                City *
              </Label>
              <Col sm={6}>
                <Input value={Demodata.DefaultMailingAddress.City}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                State *
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option>{Demodata.DefaultMailingAddress.State}</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Phone number *
              </Label>
              <Col sm={6}>
                <Input value={Demodata.DefaultMailingAddress.PhoneNumber}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Street2
              </Label>
              <Col sm={6}>
                <Input value={Demodata.DefaultMailingAddress.Street2}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6} className="d-flex  text-dark">
                Validated
              </Label>
              <Col sm={6}>
                <Input type="select" name="select" placeholder="">
                  <option>{Demodata.DefaultMailingAddress.Validated}</option>
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
                  <option>{Demodata.DefaultMailingAddress.Residential}</option>
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
    </div>
  )
}

export default AddressEditButton
