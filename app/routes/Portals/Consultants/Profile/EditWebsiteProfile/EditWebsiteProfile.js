import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody, Input, CardTitle, FormGroup, Label} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import CommonButton from 'routes/components/CommonButton'
import ContactInformation from './components/ContactInformation'
import ProfileInformation from './components/ProfileInformation'
import CommonDemo from 'routes/components/CommonDemo'

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
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
})

const EditContactInfo = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Profile > Edit Website Profile')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Edit Website Profile</span>
      <CommonDemo
        item="danger"
        wrapperClass="mx-0"
        content="The information you enter on this page will be 
        shown on the contact page of your replicated website. 
        You can share as much or as little information as you want. 
        Please note that this information is also used on the website 
        for customers and joining consultants to find you by name/state
         or zip code. If you do not include that information on this
          page, you will not appear in the search results 
          for name/state or zip code search."
      />
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-bottom">
            <span className="sub-title">Name</span>
          </CardTitle>
          <Col>
            <Row form>
              <Col className="mt-3" md={{size: 5, offset: 1}}>
                <Row form>
                  <span className="mt-2 ml-2">
                    <Label className={classes.name}>Display Name</Label>
                  </span>
                  <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
                    <Input placeholder="Eddie" />
                  </Col>
                </Row>
              </Col>
              <Col className="mt-3" xs={12} sm={12} md={5}>
                <Row form>
                  <span className={`${classes.name} mt-2 ml-2`}>Company Name</span>
                  <Col xs={12} sm={12} md={8}>
                    <Input />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-botttom">
            <span className="sub-title">Contact Information</span>
          </CardTitle>
          <ContactInformation />
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-bottom">
            <span className="sub-title">Profile Information</span>
          </CardTitle>
          <ProfileInformation />
        </CardBody>
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Cancel Change" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default EditContactInfo
