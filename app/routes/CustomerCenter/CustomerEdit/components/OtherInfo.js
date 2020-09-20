import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  input: {
    marginBottom: 50,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  content: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
  distance: {
    marginBottom: 30,
  },
  check: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
    marginTop: 20,
    marginBottom: 21,
  },
  option: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
})

const OtherInfo = () => {
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5">
        <p className={classes.name}>
          OtherInfo
          <hr className={classes.border} />
        </p>
      </div>
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Join Date</Label>
              <Input className={classes.content} type="datetime-local" />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Date of Birth*</Label>
              <Input className={classes.content} type="date"></Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>CustomerType</Label>
              <Input className={classes.content} type="select" name="customer_type">
                <option>Preferred</option>
                <option>Guest</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Tax Exempt</Label>
              <Input className={classes.content} type="select" name="tax_exempt">
                <option>No</option>
                <option>Yes</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Username</Label>
              <Input type="text" className={classes.option}></Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Password</Label>
              <Input type="password" name="password" defaultValue="" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Confirm Password</Label>
              <Input type="password" name="confirm_password" defaultValue="" />{' '}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Language*</Label>
              <Input className={classes.content} type="select" name="language">
                <option></option>
                <option>English</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Confirm Status</Label>
              <Input className={classes.content} type="select" name="customer_status">
                <option>Active</option>
                <option>Inactive</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-3">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" /> Locked Out
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" /> Ignore Inactivity Check
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

OtherInfo.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default OtherInfo
