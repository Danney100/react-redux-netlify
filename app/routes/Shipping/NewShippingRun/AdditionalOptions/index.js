import React, {useState} from 'react'
import {Col, Row, Button, Modal, ModalBody, ModalHeader, ListGroupItem} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import ItemLists from './ItemLists'

const useStyles = makeStyles({
  buttonColor: {
    backgroundColor: '#27BFA3 !important',
    borderColor: '#27BFA3 !important',
  },
  cancelButton: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
    width: 100,
  },
  saveButton: {
    backgroundColor: '#27BFA3 !important',
    borderColor: '#27BFA3 !important',
    width: 100,
  },
  countryName: {
    color: '#DE8B6D',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
  },
  countryNameTwo: {
    borderLeftWidth: 4,
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
  },
})

const AdditionalOption = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [selectItem, setSelectItem] = useState(1)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const changeItemOne = () => {
    setSelectItem(1)
  }
  const changeItemTwo = () => {
    setSelectItem(2)
  }
  const changeItemThree = () => {
    setSelectItem(3)
  }
  const changeItemFour = () => {
    setSelectItem(4)
  }
  const changeItemFive = () => {
    setSelectItem(5)
  }
  const changeItemSix = () => {
    setSelectItem(6)
  }
  const changeItemSeven = () => {
    setSelectItem(7)
  }
  const changeItemEight = () => {
    setSelectItem(8)
  }

  return (
    <div>
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom pb-3">
          Additional Options
        </ModalHeader>
        <ModalBody className="mx-0">
          <Row>
            <Col lg="4">
              <ListGroupItem
                onClick={changeItemOne}
                className={selectItem === 1 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10"> Shipping Charge </Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemTwo}
                className={selectItem === 2 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10">Handling Charge </Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemThree}
                className={selectItem === 3 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10">Product Classifications</Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemFour}
                className={selectItem === 4 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10"> Order ID</Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemFive}
                className={selectItem === 5 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10"> Order Amount</Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemSix}
                className={selectItem === 6 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10">Product ID & Quantity</Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemSeven}
                className={selectItem === 7 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10">Order Origin </Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                onClick={changeItemEight}
                className={selectItem === 8 ? classes.countryName : classes.countryNameTwo}>
                <Row>
                  <Col xs="10">Tasting Type </Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
            </Col>
            <Col lg="8" className="border-left pl-4 text-dark d-flex justify-content-center">
              <ItemLists selectItem={selectItem} />
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={{size: 3, offset: 6}} className="mb-2 d-flex justify-content-end">
              <Button className={classes.cancelButton}>Cancel</Button>
            </Col>
            <Col md={{size: 3}} className="mb-2 d-flex justify-content-end">
              <Button className={classes.saveButton}>Save</Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Button onClick={toggle} className={classes.buttonColor}>
        Additional Option
      </Button>
    </div>
  )
}

export default AdditionalOption
