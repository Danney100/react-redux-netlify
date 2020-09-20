import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Card, Label, FormGroup, Input, Row, CardTitle} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import {useHistory} from 'react-router-dom'
import {CustomInput} from 'components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  font: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
  },
  size: {
    height: '300px',
  },
  boxStyle: {
    marginTop: 10,
  },
})
const MyProfile = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Profile > My Profile')
  }, [])

  return (
    <div>
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>My Profile</p>
        </Col>
      </Row>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <CardTitle tag="h5" className="mx-3 border-bottom">
          <p className={classes.subtitle}>My Profile</p>
        </CardTitle>
        <div className="mt-2">
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>First Name</Label>
                <Input placeholder="Sarah" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Last Name</Label>
                <Input placeholder="Shadonix" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Company</Label>
                <Input placeholder="Company" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Phone</Label>
                <Input placeholder="2147048989" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Mobile</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className=" mt-3">
                <Label className={classes.name}>Email</Label>
                <Input placeholder="sally@yahoo.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mt-1">
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-1">
                <Label className={classes.name}>Date of Birth</Label>
                <Input className={classes.font} type="date" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-1">
                <Label className={classes.name}>Language</Label>
                <Input className={classes.value} type="select">
                  <option>English</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mt-5 mb-5">
            <Col md={{size: 3, offset: 2}}>
              <CustomInput
                type="checkbox"
                id="company"
                label="Opt-Out of Company Emails"
                defaultChecked={true}
              />
            </Col>
            <Col md={{size: 4}}>
              <CustomInput type="checkbox" id="consultant" label="Opt-Out of Consultant Emails" />
            </Col>
          </Row>
        </div>
      </Card>
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default MyProfile
