import React, {useState} from 'react'
import {
  Col,
  Card,
  CardHeader,
  FormGroup,
  Modal,
  CardBody,
  Form,
  Label,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Row,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'

import CommonButton from 'routes/components/CommonButton'
import iconEdit from 'images/commonIcons/edit.svg'
import iconRemove from 'images/commonIcons/remove.svg'
import TastingDetails from './TastingDetails'

const useStyles = makeStyles({
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  modalborder: {
    borderRadius: 4,
  },
  header: {
    color: '#ffffff',
    fontSize: 16,
    height: 60,
    fontFamily: 'SFUIText-Bold',
    background: '#28bfa3',
  },
  edit: {
    color: '#ffffff',
    fontSize: 16,
    height: 64,
    fontFamily: 'SFUIText-Bold',
    background: '#6c6766',
  },
  text: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: '#403839',
    marginLeft: 26,
  },
  modaltitle: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 16,
    color: '#403839',
  },
  special: {
    height: 101,
  },
  description: {
    height: '80px',
  },
  root: {
    color: '#423b3c',
    '& .name': {
      color: '#d18f77',
    },
    '& .card-title': {
      color: '#423b3c',
    },
    '& .sc-btn-action__icon': {
      padding: '5px 7px',
      backgroundColor: '#e6e0dd',
      '& img': {
        width: '10px',
        height: '10px',
      },
    },
    '& .sc-edit': {
      color: '#707070',
    },
  },
})
const EditTasting = () => {
  const classes = useStyles()
  const [content, setContent] = useState('')
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <div tag="h5">
              <p className={classes.modaltitle}>Add/Edit Address</p>
              <hr className={`${classes.modalborder}`} />
            </div>
            <Card className="mb-1">
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Nick Name
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      First Name
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Last Name
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Company
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Country
                    </Label>
                    <Col sm={8}>
                      <Input type="select" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Street 1
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Street 2
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      City
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      State
                    </Label>
                    <Col sm={8}>
                      <Input type="select" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Phone Number
                    </Label>
                    <Col sm={8}>
                      <Input />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={{size: 3, offset: 1}}
                      className="d-flex justify-content-start font-weight-light">
                      Special Instructions
                    </Label>
                    <Col sm={8}>
                      <Input className={classes.special} />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Row className="mt-4 mb-4">
              <Col className="d-flex justify-content-end">
                <CommonButton
                  title="Cancel"
                  onClick={toggle}
                  buttonType="filterButton"
                  className="mr-4"
                />
                <CommonButton title="Save" buttonType="addfilterButton" />
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
      </div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>Create or Edit a Tasting</p>
          <hr className={classes.border} />
        </div>
        <div className="mt-3">
          <Row className="d-flex justify-content-between">
            <Col>
              <Row>
                <Col lg="2" className="d-flex justify-content-start mt-2">
                  <p className={classes.text}>Who is hosting</p>
                </Col>
                <Col lg="4" className="d-flex justify-content-end mt-2 mr-4 ml-4">
                  <Input type="select">
                    <option>I Am Hosting</option>
                  </Input>
                </Col>
              </Row>
            </Col>
            <Col lg={{size: 3}} className="d-flex justify-content-end mr-4 mt-2">
              <CommonButton title="+ New Address" onClick={toggle} buttonType="addItemButton" />
            </Col>
          </Row>
          <Row form className="mt-4 p-0 ml-3">
            <Col md="4">
              <CardHeader className={`${classes.header} mr-4`}>Eddie test123 (Primary)</CardHeader>
              <Card className="mr-4 mb-4">
                <div className={`${classes.root} mt-3 p-3`}>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex justify-content-start">Eddie test123</span>
                    <span className="mt-2 sc-btn-action__icon rounded-circle text-center mr-2">
                      <img className="d-flex justify-content-end" src={iconEdit} />
                    </span>
                  </div>
                  <div className="sc-avenir-roman card-title">Primary</div>
                  <div className="mt-2 sc-avenir-roman card-title mb-5">
                    4101 McEwen Rd
                    <br />
                    700
                    <br />
                    Farmers Branch, Texas 75244
                    <br />
                    United States
                    <br />
                    14694780212
                    <br />
                    United States
                  </div>
                  <FormGroup row className="d-flex justify-content-between">
                    <Col md={2} className="d-flex justify-content-center ml-1 mb-2">
                      <img src={iconRemove} />
                    </Col>
                    <Col md={7} className="d-flex justify-content-center mb-2">
                      <CommonButton title="Use This Address" buttonType="addItemButton" />
                    </Col>
                  </FormGroup>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <CardHeader className={`${classes.edit} mr-4`}>Eddie test123</CardHeader>
              <Card className="mr-4">
                <div className={`${classes.root} mt-3 p-3`}>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex justify-content-start">Eddie test123</span>
                    <span className="mt-2 sc-btn-action__icon rounded-circle text-center mr-2">
                      <img className="d-flex justify-content-end" src={iconEdit} />
                    </span>
                  </div>
                  <div className="sc-avenir-roman card-title">Primary</div>
                  <div className="mt-2 sc-avenir-roman card-title mb-5">
                    4101 McEwen Rd
                    <br />
                    700
                    <br />
                    Farmers Branch, Texas 75244
                    <br />
                    United States
                    <br />
                    14694780212
                    <br />
                    United States
                  </div>
                  <FormGroup row className="d-flex justify-content-between">
                    <Col md={2} className="d-flex justify-content-center ml-1 mb-2">
                      <img src={iconRemove} />
                    </Col>
                    <Col md={7} className="d-flex justify-content-center mb-2">
                      <CommonButton title="Use This Address" buttonType="addItemButton" />
                    </Col>
                  </FormGroup>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <CardHeader className={`${classes.header1} mr-4`}>Eddie test123</CardHeader>
              <Card className="mr-4">
                <div className={`${classes.root} mt-3 p-3`}>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex justify-content-start">Eddie test123</span>
                    <span className="mt-2 sc-btn-action__icon rounded-circle text-center mr-2">
                      <img className="d-flex justify-content-end" src={iconEdit} />
                    </span>
                  </div>
                  <div className="sc-avenir-roman card-title">Primary</div>
                  <div className="mt-2 sc-avenir-roman card-title mb-5">
                    4101 McEwen Rd
                    <br />
                    700
                    <br />
                    Farmers Branch, Texas 75244
                    <br />
                    United States
                    <br />
                    14694780212
                    <br />
                    United States
                  </div>
                  <FormGroup row className="d-flex justify-content-between">
                    <Col md={2} className="d-flex justify-content-center ml-1 mb-2">
                      <img src={iconRemove} />
                    </Col>
                    <Col md={7} className="d-flex justify-content-center mb-2">
                      <CommonButton title="Use This Address" buttonType="addItemButton" />
                    </Col>
                  </FormGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <TastingDetails />
      </Card>
    </div>
  )
}

export default EditTasting
