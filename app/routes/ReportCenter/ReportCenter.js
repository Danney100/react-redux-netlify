import React, {useContext, useEffect, useState} from 'react'
import {Row, Col, Card, ListGroupItem, CardBody, CardTitle} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import ItemLists from './components/index'
import AppContext from 'components/App/AppContext'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  searchStyle: {
    width: 218,
  },
  countryName: {
    color: '#DE8B6D',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
  countryNameTwo: {
    borderLeftWidth: 4,
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
  fontStyle: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
})

const ReportCenter = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Report Center')
  }, [])
  const [selectItemList, setSelectItem] = useState(1)

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

  return (
    <>
      <Row className="justify-content-center justify-content-lg-start p-3">
        <Col lg={1} xs={10} sm={1} className="my-auto">
          <p className={classes.title}>Reports</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <Card className="mb-3">
            <CardBody className="mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-end">
                <div>
                  <CustomSearch className="mr-5" />
                </div>
              </CardTitle>
            </CardBody>
            <Row className="m-0 p-3">
              <Col className="border-right">
                <ListGroupItem
                  onClick={changeItemOne}
                  className={selectItemList === 1 ? classes.countryName : classes.countryNameTwo}>
                  <Row>
                    <Col xs="10"> PEOPLE </Col>
                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                      <i className="fa fa-angle-right mr-2"></i>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem
                  onClick={changeItemTwo}
                  className={selectItemList === 2 ? classes.countryName : classes.countryNameTwo}>
                  <Row>
                    <Col xs="10"> PRODUCTS and SALES </Col>
                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                      <i className="fa fa-angle-right mr-2"></i>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem
                  onClick={changeItemThree}
                  className={selectItemList === 3 ? classes.countryName : classes.countryNameTwo}>
                  <Row>
                    <Col xs="10"> COMPENSATION </Col>
                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                      <i className="fa fa-angle-right mr-2"></i>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem
                  onClick={changeItemFour}
                  className={selectItemList === 4 ? classes.countryName : classes.countryNameTwo}>
                  <Row>
                    <Col xs="10"> MISCELLANEOUS </Col>
                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                      <i className="fa fa-angle-right mr-2"></i>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem
                  onClick={changeItemFive}
                  className={selectItemList === 5 ? classes.countryName : classes.countryNameTwo}>
                  <Row>
                    <Col xs="10"> UNCATEGORIZED </Col>
                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                      <i className="fa fa-angle-right mr-2"></i>
                    </Col>
                  </Row>
                </ListGroupItem>
              </Col>
              <Col md={9} sm={12} xs={12}>
                <ItemLists item={selectItemList} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ReportCenter
