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
  PaginationLink,
  Pagination,
  Media,
  ListGroupItem,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
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
    width: 180,
    float: 'right',
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
  },
})

const AdjustmentsTable = () => {
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
  const Demo =
    "To make an adjustment, enter the amount to adjust by. The adjustment will be made in the consultant's local currency. Set the adjustment date for when the adjustment will become active and ready to run on a compensation cycle."
  const closeBtnOne = (
    <button className="close" onClick={toggleNested}>
      &times;
    </button>
  )

  return (
    <div>
      <Row>
        <Col sm={{size: 6}}>
          <h5>
            <span className="text-dark font-weight-bold">Financial Adjustments</span>
          </h5>
        </Col>
        <Col sm={{size: 2, offset: 4}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add/Edit Adjustment
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
                    <p>{Demo}</p>
                  </span>
                </Media>
              </Media>
            </ListGroupItem>
          </div>
          <Form className="mt-3 mx-3">
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Adjustment
              </Label>
              <Col sm={8}>
                <Row>
                  <Col lg={4}>
                    <Input type="select" name="select" placeholder="Add">
                      <option>Add</option>
                      <option>Substract</option>
                    </Input>
                  </Col>
                  <Col lg={4}>
                    <Input type="text"></Input>
                  </Col>
                  <Col lg={4}>
                    <Input type="select" name="select" placeholder="US-Master Currency">
                      <option>US-Master Currency</option>
                    </Input>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Adjustment Date
              </Label>
              <Col sm={8}>
                <Input type="date" name="date" id="input" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Adjustment Type
              </Label>
              <Col sm={8}>
                <Input type="select">
                  <option>Commission Reversal</option>
                  <option>Other</option>
                  <option>Party Commission Applied To Settlement</option>
                  <option>Party Commission Paid</option>
                  <option>Party Fee</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4}>
                Is Taxable
              </Label>
              <Col sm={8}>
                <Input type="checkbox" name="select" id="input" placeholder=""></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Description
              </Label>
              <Col sm={8}>
                <Input></Input>
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
        <Table responsive>
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
                <span> &nbsp; </span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          </thead>
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
          <Col className="pagination justify-content-end mt-1 mb-3">
            <Button onClick={toggle} className={classes.addButton}>
              Add New Adjustment
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdjustmentsTable
