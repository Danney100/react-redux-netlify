import React, {useState} from 'react'
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Media,
  ListGroupItem,
  InputGroupAddon,
  InputGroup,
} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import BootstrapTable from 'react-bootstrap-table-next'

import iconTransfer from 'images/commonIcons/transfer.svg'
import PaginationsList from 'routes/components/PaginationList/index'

const useStyles = makeStyles({
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
  },
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    marginTop: 10,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  Radius: {
    borderRadius: 6,
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

const columns = [
  {
    dataField: 'TransactionDate',
    text: 'Transaction Date',
    sort: true,
  },
  {
    dataField: 'DetailsandJoin',
    text: 'Details and Join',
    sort: true,
  },
  {
    dataField: 'Amount',
    text: 'Amount',
    sort: true,
  },
  {
    dataField: 'Balance',
    text: 'Balance',
    sort: true,
  },
]

const CommonCards = (props) => {
  const {title, data} = props
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggle = () => setModal(!modal)
  const closeBtn = <button className="close" onClick={toggle}></button>
  const Demo =
    'Choose the recipient to whom you wish to transfer Sky Wallet funds. You can transfer up to the amount of funds in your Sky Wallet account.'
  const closeBtnOne = (
    <button className="close" onClick={toggleNested}>
      &times;
    </button>
  )
  const [count, setCount] = useState(0.00)

  return (
    <div className="mt-4">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom ml-2 mr-2">
          <p className={classes.subtitle}>Transfer Funds</p>
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
                Choose Recipient
              </Label>
              <Col sm={8}>
                <Input type="select" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Transfer Amount
              </Label>
              <Col sm={8}>
                <InputGroup>
                  <InputGroupAddon
                    className="pointer"
                    addonType="prepend"
                    onClick={() => setCount(count - 1)}>
                    -
                  </InputGroupAddon>
                  <Input
                    placeholder="Amount"
                    type="text"
                    value={count}
                    readOnly
                    className="text-center"
                  />
                  <InputGroupAddon
                    className="pointer"
                    addonType="append"
                    onClick={() => setCount(count + 1)}>
                    +
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4}>
                Balance Before Transfer
              </Label>
              <Col sm={8}>
                <div className="mt-2">$60.00</div>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4}>
                Balance Before Transfer
              </Label>
              <Col sm={8}>
                <div className="mt-2">$60.00</div>
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
      <div>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
          <div>
            <div tag="h5">
              <Row className="border-bottom ml-2 mr-2">
                <Col xs={8} className="d-flex justify-content-start">
                  <p className={classes.subtitle}>{title}</p>
                </Col>
                <Col xs={4} className="d-flex justify-content-end mt-4">
                  <div onClick={toggle}>
                    <div className={`${classes.edit} d-flex flex-row`}>
                      <div>
                        <img src={iconTransfer} />
                      </div>
                      <div className="ml-2">Transfer Fund</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="ml-2 mr-2 mt-2">
              <BootstrapTable
                keyField="id"
                columns={columns}
                data={data}
                bordered={false}
                striped
                wrapperClasses="table-responsive"
                noDataIndication={'no results found'}
              />
            </div>
            <div className="ml-3">
                <PaginationsList />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

CommonCards.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default CommonCards
