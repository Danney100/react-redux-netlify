import React, {useState} from 'react'
import {Modal, ModalBody, ModalHeader, Row, Col, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
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
              <CommonButton onClick={toggle} buttonType="cancelButton" title="Cancel" />
            </Col>
            <Col className="pagination justify-content-end">
              <CommonButton title="Continue" onClick={toggle} buttonType="continueButton" />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default AddressDeleteButton
