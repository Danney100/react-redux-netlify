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
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
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

const AccountTable = () => {
  const classes = useStyles()
  const toggle = () => setModal(!modal)
  const [modal, setModal] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }

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
          <h5>
            <span className="text-dark font-weight-bold">Accounts</span>
          </h5>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Account
        </ModalHeader>
        <ModalBody>
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
              <Label for="input" sm={4} className="d-flex justify-content-end">
                Account Type
              </Label>
              <Col sm={6}>
                <Input type="select" className="rounded-0"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex justify-content-end">
                Display ID
              </Label>
              <Col sm={6}>
                <Input className="rounded-0"></Input>
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
                <span>Display ID</span>
              </th>
              <th>
                <span>Account Type</span>
              </th>
              <th>
                <span>Created</span>
              </th>
              <th>
                <span></span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Row className="mt-3">
        <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink first />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink previous />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink>0</PaginationLink>
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
          <Label>No items to display</Label>
        </Col>
      </Row>
      <Row>
        <Col className="pagination justify-content-end mt-1 mb-3">
          <Button onClick={toggle} className={classes.addButton}>
            Add New Account
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AccountTable
