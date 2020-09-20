import React, {useState} from 'react'
import {Col, Row, ListGroupItem} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import ItemLists from './ItemLists/index'

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
    color: '#de8b6d',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  countryNameTwo: {
    borderLeftWidth: 4,
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
})

const SearchResult = () => {
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
      <Row>
        <Col lg="4">
          <ListGroupItem
            onClick={changeItemOne}
            className={selectItem === 1 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-4">
                Consultant Creadit Edit
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-4 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemTwo}
            className={selectItem === 2 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                Consultant Rank Type - Description
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemThree}
            className={selectItem === 3 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                Consultant Rank Type - Name
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2 "></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemFour}
            className={selectItem === 4 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                {' '}
                Consultant Status - Description
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemFive}
            className={selectItem === 5 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                {' '}
                Consultant Status - Name
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemSix}
            className={selectItem === 6 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                Consultant Type - Description
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemSeven}
            className={selectItem === 7 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                Consultant Type - Name
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem
            onClick={changeItemEight}
            className={selectItem === 8 ? classes.countryName : classes.countryNameTwo}>
            <Row>
              <Col xs="10" className="font-weight-bold mt-3">
                Credit Card
              </Col>
              <Col xs="2" className="d-flex align-items-center mt-3 justify-content-end">
                <i className="fa fa-angle-right mr-2"></i>
              </Col>
            </Row>
          </ListGroupItem>
        </Col>
        <Col lg="8" className="border-left pl-4 text-dark d-flex justify-content-center">
          <ItemLists selectItem={selectItem} />
        </Col>
      </Row>
    </div>
  )
}

export default SearchResult
