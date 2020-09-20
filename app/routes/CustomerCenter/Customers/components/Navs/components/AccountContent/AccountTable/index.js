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
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'

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
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
  paginationStyle: {
    height: 40,
    width: 30,
  },
  paginationCenterLink: {
    height: 40,
    width: 40,
  },
  paginationCenterItem: {
    backgroundColor: '#6c6766',
  },
})

const AccountTable = () => {
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
          <span className={classes.title}>Accounts</span>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className={classes.modelTitle}>
          New Account
        </ModalHeader>
        <ModalBody>
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
              <Label for="input" sm={6}>
                Account Type
              </Label>
              <Col sm={6}>
                <Input type="select" className="rounded-0"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={6}>
                Display ID
              </Label>
              <Col sm={6}>
                <Input className="rounded-0"></Input>
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
        <Table responsive striped>
          <thead className={classes.theadFont}>
            <tr>
              <th>
                <span className="ml-2">Display ID</span>
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
      <Row className="mt-3 mx-2">
        <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem active className={classes.paginationCenterItem}>
              <PaginationLink className={classes.paginationCenterLink}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last className={classes.paginationStyle} />
            </PaginationItem>
          </Pagination>
        </Col>
        <Col className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
          <Label className={classes.tbodyFont}>No items to display</Label>
        </Col>
      </Row>
      <Row className="mb-3 mr-2">
        <Col className="pagination justify-content-end">
          <CommonButton title="Add New Account" buttonType="addButton" onClick={toggle} />
        </Col>
      </Row>
    </div>
  )
}

export default AccountTable
