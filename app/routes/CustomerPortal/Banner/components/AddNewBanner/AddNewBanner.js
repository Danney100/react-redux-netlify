import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody, Input, FormGroup} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ClassificationForm from './components/ClassificationForm'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .second-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '21px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
    '& .checkboxStyle': {
      marginTop: 5,
    },
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  boxStyle: {
    marginTop: 10,
  },
})

const AddNewBanner = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Customer Portal > Banners > New Banner')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/customer-portal/banner')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Create Banner</span>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="The edit banner page allows the user to update existing banners. 
        The user can update the title, display information, and display conditions."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="my-3">
        <CardBody>
          <span className="sub-title">New Banner</span>
          <hr />
          <ClassificationForm />
        </CardBody>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className="sub-title ml-3 mt-2">Display Conditions</p>
          <hr />
        </div>
        <div>
          <Row className="mx-5 mt-2 mb-4">
            <Col md={{size: 2, offset: 3}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Countries</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> United States</span>
              </Row>
            </Col>
            <Col md={{size: 2}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Languages</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> English</span>
              </Row>
            </Col>
            <Col md={{size: 2}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Customer Types</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Retail</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Preferred</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Guest</span>
              </Row>
            </Col>
            <Col md={{size: 2}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Customer Statuses</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Active</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Inactive</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Cancelled</span>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Reset" buttonType="cancelButton" onClick={routeChange} />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default AddNewBanner
