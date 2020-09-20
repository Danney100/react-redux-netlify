import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Button,
  Label,
  Input,
  ListGroupItem,
  Media,
} from 'reactstrap'

import MoonLoader from 'react-spinners/MoonLoader'
import {showErrorNotification} from 'helpers/util'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink as Link, useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'
import SearchDetails from './SearchDetails'
import {useDispatch, useSelector} from 'react-redux'
import {getConsultantDetails} from 'api'
import {setConsultantDetails} from 'duck/actions/consultant'
import {Dropdown, DropdownMenu, DropdownItem, DropdownToggle, NestedDropdown} from 'components'
import {setPortal} from 'duck/actions/process'
import {Map} from 'immutable'

const useStyles = makeStyles({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#403839',
  },
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  title1: {
    fontSize: 22,
    fontWeight: 'DINCondensed-Bold',
    color: '#e94b35',
  },
  title2: {
    fontSize: 22,
    fontWeight: 'DINCondensed-Bold',
    color: '#403839',
  },
  advanced: {
    borderColor: 'white',
    backgroundColor: 'white',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#27BFA3',
  },
  advanced1: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#e94b35',
  },
  enroller: {
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
  },
  note: {
    fontSize: 22,
    fontFamily: 'DINCondensed-Bold',
    color: '#403839',
  },
  sub: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
  },
  advanced2: {
    backgroundColor: 'white',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#423b3c',
  },
  demos: {
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  Radius: {
    borderRadius: 6,
  },
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
    width: 140,
    height: 40,
    fontSize: 13,
  },
  continueButton: {
    backgroundColor: '#e94b35',
    borderColor: '#e94b35',
    '&:hover': {
      backgroundColor: '#e94b35 !important',
      borderColor: '#e94b35',
    },
    '&:focus': {
      backgroundColor: '#e94b35 !important',
      borderColor: '#e94b35',
    },
    width: 140,
    height: 40,
    fontSize: 13,
  },
  content: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#6c6766',
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
    width: 140,
    height: 40,
    fontSize: 13,
  },
  check: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
    marginBottom: 20,
  },
})

const ConsultantSearch = ({isDisplay, isLoading, setIsDisplay, setIsLoading}) => {
  const consultantToDisplay = useSelector(({consultant}) => consultant.get('consultantToDisplay'))
  const details = useSelector(({consultant}) => consultant.get('consultantDetails', Map()).toJS())
  const token = useSelector(({user}) => user.get('token'))
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const payload = {
      id: consultantToDisplay,
      token: token,
    }
    if (consultantToDisplay) {
      setIsDisplay(true)
      setIsLoading(true)
      getConsultantDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setConsultantDetails(res))
          } else {
            console.log(res)
            dispatch(setConsultantDetails(null))
            showErrorNotification(res.response.data.message)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsDisplay(false)
          setIsLoading(false)
        })
    }
  }, [consultantToDisplay])

  const [cancelConsultantModal, setCancelConsultantModal] = useState(false)
  const [changeGenealogyModal, setChangeGenealogyModal] = useState(false)
  const [createCustomerModal, setCreateCustomerModal] = useState(false)
  const [addNewNoteModal, setAddNewNoteModal] = useState(false)

  const cancelConsultantModalToggle = () => setCancelConsultantModal(!cancelConsultantModal)
  const changeGenealogyModalToggle = () => setChangeGenealogyModal(!changeGenealogyModal)
  const createCustomerModalToggle = () => setCreateCustomerModal(!createCustomerModal)
  const addNewNoteModalToggle = () => setAddNewNoteModal(!addNewNoteModal)

  const classes = useStyles()

  const cancelCosultantButton = (
    <button className="close" onClick={cancelConsultantModalToggle}>
      &times;
    </button>
  )
  const changeGenealogyButton = (
    <button className="close" onClick={changeGenealogyModalToggle}>
      &times;
    </button>
  )
  const createCustomerButton = (
    <button className="close" onClick={createCustomerModalToggle}>
      &times;
    </button>
  )
  const addNewNoteButton = (
    <button className="close" onClick={addNewNoteModalToggle}>
      &times;
    </button>
  )

  const DemoOne =
    'To update a persons genealogy relationship, use the manager below. Each genealogy relationship associated with the person that can be changed will be displayed. Type in the ID associated with the new person you are moving the selected person under. The ID entered needs to be associated with a person type in the selected genealogy. For example, you cannot set a consultants enroller as a customer.'

  const history = useHistory()
  const handleRouteChange = () => {
    dispatch(setPortal(2))
    history.push('/consultant-portal')
  }

  return (
    <div className="mt-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-end mb-4">
            <CommonButton title="Edit Consultant" buttonType="saveButton" />
          </div>
          <Card lg={12} md={12} sm={12} xs={12} className={isDisplay && isLoading ? 'sc-loading' : ''}>
            <div className="sc-loading__icon-wrapper">
              <MoonLoader size={32} color={'#de8b6d'} loading={isDisplay && isLoading} />
            </div>
            <CardBody>
              <div>
                <Modal isOpen={cancelConsultantModal} toggle={cancelConsultantModalToggle}>
                  <ModalHeader
                    toggle={cancelConsultantModalToggle}
                    close={cancelCosultantButton}
                    className="border-bottom">
                    <p className={classes.title1}>Cancel Consultant</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <p className={classes.content}>
                        Are you sure you wish to cancel this customer? Any active subscriptions
                        associated with this customer will be expired.
                      </p>
                    </Form>
                    <Row className="d-flex justify-content-between">
                      <Col className="d-flex justify-content-start">
                        <Button
                          onClick={cancelConsultantModalToggle}
                          className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button className={classes.continueButton}>Continue</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={changeGenealogyModal} toggle={changeGenealogyModalToggle}>
                  <ModalHeader
                    toggle={changeGenealogyModalToggle}
                    className="border-bottom"
                    close={changeGenealogyButton}>
                    <p className={classes.title2}>Change Genealogy</p>
                  </ModalHeader>
                  <ModalBody>
                    <div className={classes.Radius}>
                      <ListGroupItem className={classes.demos}>
                        <Media>
                          <Media>
                            <div className={classes.media}>
                              <i className="fa fas fa-check text-primary"></i>
                            </div>
                          </Media>
                          <Media className="ml-4">
                            <span className="text-dark">
                              <p>{DemoOne}</p>
                            </span>
                          </Media>
                        </Media>
                      </ListGroupItem>
                    </div>
                    <Form className="mx-3">
                      <FormGroup row>
                        <Label for="input" sm={4}>
                          Genealogy
                        </Label>
                        <Col sm={8}>
                          <Label lg={6}>From</Label>
                          <Label lg={6}>To</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4}>
                          Enroller
                        </Label>
                        <Col sm={8}>
                          <Row>
                            <Col lg={6} className="mb-3">
                              <p className={classes.enroller}>
                                1001 Corporate Account (Honolulu, Hawaii)
                              </p>
                            </Col>
                            <Col lg={6}>
                              <Input type="select" className="mb-2">
                                <option>Consultant</option>
                              </Input>
                              <Input type="text"></Input>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4} className="d-flex">
                          Sponsor
                        </Label>
                        <Col sm={8}>
                          <Row>
                            <Col lg={6} className="mb-2 ">
                              <p className={classes.enroller}>
                                1001 Corporate Account (Honolulu, Hawaii)
                              </p>
                            </Col>
                            <Col lg={6}>
                              <Input type="text"></Input>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4} className="d-flex">
                          Note
                        </Label>
                        <Col sm={8}>
                          <Input></Input>
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col>
                        <Button
                          onClick={changeGenealogyModalToggle}
                          className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="pagination justify-content-end">
                        <Button onClick={changeGenealogyModalToggle} className={classes.saveButton}>
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={createCustomerModal} toggle={createCustomerModalToggle}>
                  <ModalHeader
                    toggle={createCustomerModalToggle}
                    close={createCustomerButton}
                    className="border-bottom">
                    <p className={classes.note}>Create Customer from Consultant</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <p className={classes.content}>
                        Are you sure you wish to create a new customer from this consultant?
                      </p>
                    </Form>
                    <FormGroup row>
                      <Label for="input" sm={2}>
                        Username
                      </Label>
                      <Col sm={10}>
                        <Input></Input>
                      </Col>
                    </FormGroup>
                    <Row className="d-flex justify-content-between">
                      <Col className="d-flex justify-content-start">
                        <Button
                          onClick={cancelConsultantModalToggle}
                          className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button className={classes.saveButton}>Create</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={addNewNoteModal} toggle={addNewNoteModalToggle}>
                  <ModalHeader
                    toggle={addNewNoteModalToggle}
                    close={addNewNoteButton}
                    className="border-bottom">
                    <p className={classes.note}>Add New Note</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Subject</p>
                        </Label>
                        <Col sm={4}>
                          <Input type="text"></Input>
                        </Col>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Type</p>
                        </Label>
                        <Col sm={4}>
                          <Input type="select" className="rounded-0"></Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Note</p>
                        </Label>
                        <Col sm={10}>
                          <Input className="rounded-0"></Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start"></Label>
                        <Col sm={8} className={`${classes.check} ml-3`}>
                          <Input type="checkbox" />
                          Display As Message
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col>
                        <Button className={classes.cancelButton}>Cancel</Button>
                      </Col>
                      <Col className="pagination justify-content-end">
                        <Button className={classes.saveButton}>Save</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <Row className="d-flex justify-content-between border-bottom ">
                <Col sm="12" md={{size: 6, offset: 0}} className=" d-flex justify-content-start">
                  <p className={classes.title}>Consultant: {details.username}</p>
                </Col>
                <Col className="d-flex justify-content-end">
                  <FormGroup row>
                    <Col className="d-flex justify-content-center justify-content-lg-start">
                      <Dropdown isOpen={isOpen} toggle={toggle}>
                        <DropdownToggle caret className={`${classes.advanced}`}>
                          Advanced Options
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem className={classes.advanced2} onClick={handleRouteChange}>
                            Go to Portal
                          </DropdownItem>
                          <DropdownItem className={classes.advanced2}>Financials</DropdownItem>
                          <DropdownItem className={classes.advanced2}>Downlines</DropdownItem>
                          <DropdownItem
                            onClick={changeGenealogyModalToggle}
                            className={`${classes.advanced2} bg-white border-0 text-dark`}>
                            Change Genealogy
                          </DropdownItem>
                          <DropdownItem className={classes.advanced2}>
                            Qualification Overrides
                          </DropdownItem>
                          <DropdownItem className={classes.advanced2}>
                            Metric Overrides
                          </DropdownItem>
                          <DropdownItem
                            onClick={createCustomerModalToggle}
                            className={classes.advanced2}>
                            Create Customer from Consultant
                          </DropdownItem>
                          <DropdownItem
                            onClick={addNewNoteModalToggle}
                            className={classes.advanced2}>
                            Add New
                          </DropdownItem>
                          <hr className="w-70 mx-auto my-2" />
                          <DropdownItem
                            onClick={cancelConsultantModalToggle}
                            className={classes.advanced1}>
                            Cancel Consultant
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " first />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " previous />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " next />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " last />
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <SearchDetails />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

ConsultantSearch.propTypes = {
  isDisplay: PropTypes.bool,
  isLoading: PropTypes.bool,
  setIsDisplay: PropTypes.func,
  setIsLoading: PropTypes.func,
}

export default ConsultantSearch
