import React, {useState} from 'react'
import {
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
  Media,
  ListGroupItem,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import iconEdit from 'images/commonIcons/edit.svg'

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

const WalletEditButton = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoOne =
    'The available credit balance for this type is displayed below. You can add or remove credits for this type for this person using the field below. Simply edit the amount, enter a description for the change and select Save Changes. Select Cancel to return without making any changes.'

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add/Edit Adjustment
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
              <Label for="input" sm={4} className="d-flex">
                Balance
              </Label>
              <Label sm={1}>$0.00</Label>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                Adjustment
              </Label>
              <Col sm={8}>
                <Row>
                  <Col lg={6} className="mb-3">
                    <Input type="select" name="select" placeholder="Add">
                      <option>Add</option>
                      <option>Substract</option>
                    </Input>
                  </Col>
                  <Col lg={6}>
                    <Input type="text"></Input>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className="d-flex">
                New Balance
              </Label>
              <Label sm={6}>$0.00</Label>
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
              <Button onClick={toggle} className={classes.saveButton}>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div color="danger" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col>
            <div className={classes.imgSize}>
              <img src={iconEdit} className={classes.imageSize} />
            </div>
          </Col>
          <Col>Edt</Col>
        </Row>
      </div>
    </div>
  )
}

export default WalletEditButton
