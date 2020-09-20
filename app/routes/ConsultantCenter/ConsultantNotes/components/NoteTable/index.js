import React, {useState} from 'react'
import {
  Table,
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
  PaginationItem,
  Pagination,
  PaginationLink,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import iconEdit from 'images/commonIcons/edit.svg'
import iconDelete from 'images/commonIcons/delete.svg'
import CommonButton from 'routes/components/CommonButton'

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
    backgroundColor: '#E94B35',
    borderColor: '#E94B35',
    '&:hover': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    '&:focus': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
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

const NoteTable = () => {
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
        <Col sm={{size: 2}}>
          <h5>
            <span className="text-dark font-weight-bold">Notes</span>
          </h5>
        </Col>
        <Col sm={{size: 2, offset: 8}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom pb-2">
          <p className="text-dark font-weight-bold">New Note</p>
        </ModalHeader>
        <ModalBody>
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
          <Form className="mb-5">
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Subject
              </Label>
              <Col sm={8}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark ">
                Note Type
              </Label>
              <Col sm={8}>
                <Input type="select">
                  <option>Call</option>
                  <option>Email</option>
                  <option>Genealogy</option>
                  <option>Incentive Achievement Change</option>
                  <option>Qualification Override Change</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Note
              </Label>
              <Col sm={8}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex text-dark">
                Display As Message
              </Label>
              <Col sm={{size: '8'}}>
                <Input type="checkbox" className="ml-0 mb-0 mt-2" name="select" id="input"></Input>
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
      <div className="mt-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>Date</span>
              </th>
              <th>
                <span>Subject</span>
              </th>
              <th>
                <span>Type</span>
              </th>
              <th>
                <span>Created By</span>
              </th>
              <th>
                <span>Note</span>
              </th>
              <th>
                <span>Display As Message?</span>
              </th>
              <th>
                <span>Opened?</span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6/25/2020</td>
              <td>LLC update</td>
              <td>Email</td>
              <td>Brian Foster</td>
              <td>updated account with EIN & LLC name effective 1/2/2020</td>
              <td>No</td>
              <td>No</td>
              <td>
                <div color="link" className={classes.buttonSize}>
                  <Row>
                    <Col className="md-4">
                      <div className={classes.imgSize}>
                        <img src={iconEdit} className={classes.imageSize} />
                      </div>
                    </Col>
                    <Col className="md-8">Edit</Col>
                  </Row>
                </div>
                <div color="link" className={classes.buttonSize}>
                  <Row>
                    <Col>
                      <div className={classes.imgSize}>
                        <img src={iconDelete} className={classes.imageSize} />
                      </div>
                    </Col>
                    <Col>Delete</Col>
                  </Row>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className="mt-3">
          <Col
            lg="4"
            className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink first />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last />
              </PaginationItem>
            </Pagination>
          </Col>
          <Col className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
            <Label>1-1 of 1 items</Label>
          </Col>
        </Row>
        <Row>
          <Col className="pagination justify-content-end mt-1 mb-3">
            <CommonButton onClick={toggle} buttonType={'addButton'} title={'Add New Note'} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NoteTable
