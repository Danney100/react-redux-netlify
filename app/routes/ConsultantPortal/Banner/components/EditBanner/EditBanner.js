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

const EditBanner = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Consultant Portal > Banners > Edit Banner')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/consultant-portal/banner')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Edit Banner</span>
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
          <span className="sub-title">Edit Banner</span>
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
            <Col md={{size: 3, offset: 2}}>
              <Row className="mt-5">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Countries</span>
              </Row>
              <Row className="ml-3 mt-3 mb-5">
                <Input type="checkbox" />
                <span className={classes.subcheck}> United States</span>
              </Row>
              <Row className="mt-5">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Consultant Types</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Circle Consultant</span>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-5">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Languages</span>
              </Row>
              <Row className="ml-3 mt-3 mb-5">
                <Input type="checkbox" />
                <span className={classes.subcheck}> English</span>
              </Row>
              <Row className="mt-5">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Consultant Statuses</span>
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
                <span className={classes.subcheck}> Hold</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Suspended</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Financial Hold</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Cancelled</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Incomplete</span>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-5">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Consultant Rank Types</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Associate Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Senior Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Executive Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Associate Manager</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Senior Manager</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Executive Manager</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Associate Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Senior Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Executive Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Managing Director</span>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" onClick={routeChange} />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default EditBanner
