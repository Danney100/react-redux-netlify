import React, {useState} from 'react'
import {Modal, ModalBody, ModalHeader, Row, Col, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import iconDelete from 'images/commonIcons/delete.svg'

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
    float: 'right',
    width: 180,
    fontSize: 13,
  },
})

const AddressDeleteButton = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )

  return (
    <div>
      <div color="link" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col>
            <div className={classes.imgSize}>
              <img src={iconDelete} className={classes.imageSize} />
            </div>
          </Col>
          <Col>Delete</Col>
        </Row>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
        <ModalBody>
          <Row className="pagination justify-content-center mb-3">
            <span className="text-dark">Are you sure you want to delete this?</span>
          </Row>
          <Row>
            <Col>
              <Button onClick={toggle} className={classes.cancelButton}>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggle} className={classes.continueButton}>
                Continue
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default AddressDeleteButton
