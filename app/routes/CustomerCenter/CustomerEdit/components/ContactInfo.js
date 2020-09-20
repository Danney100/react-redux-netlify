import React from 'react'
import PropTypes from 'prop-types'
import iconVector from 'images/commonIcons/vector.svg'
import {Col, Card, Label, FormGroup, Input, Row, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  input: {
    marginLeft: 24,
    marginTop: 8,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
  check: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
    marginTop: 20,
    marginBottom: 21,
  },
  buttonMargin: {
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
    fontFamily: 'SFUIText-Heavy',
    fontSize: 14,
    color: '#ffffff',
    width: 100,
    height: 40,
  },
  primary: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
  },
  radiusButton: {
    borderRadius: 100,
    width: 83,
    backgroundColor: '#e6e0dd !important',
  },
  home: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
    marginLeft: 10,
  },
  phone: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    width: 155,
    color: '#6c6766',
  },
  option: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
})

const ContactInfo = () => {
  const classes = useStyles()
  return (
    <Card className="mb-3">
      <div tag="h5">
        <p className={classes.name}>
          Contact Information
          <hr className={classes.border} />
        </p>
      </div>
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Email*</Label>
              <Input className={classes.option} defaultValue="idstctestcust@gmail.com" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" /> Opt-Out of Company Emails
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" /> Opt-Out of Consultant Emails
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mx-1 my-2">
          <Col md={{size: 3, offset: 2}}>
            <FormGroup>
              <Label className={classes.title}>Phone Number*</Label>
              <Input className={classes.option} type="select">
                <option>Home</option>
                <option>Work</option>
                <option>Cellular</option>
                <option>Fax</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mt-2">
              <Label className={classes.title}></Label>
              <Input />
            </FormGroup>
          </Col>
          <Col className={classes.buttonMargin}>
            <Button className={classes.buttonStyle}>Add</Button>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col>
                <Input type="radio" name="primary" placeholder="" />
                <span className={classes.primary}>Primary</span>
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col>
                <Input type="radio" name="primary" placeholder="" />
                <span className={classes.primary}>Not Primary</span>
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Col sm={{size: 5, offset: 2}}>
          <Row>
            <Col sm="1" className="mb-1">
              <Button color="light" className="rounded-circle ">
                <img className="sc-btn-action__img " src={iconVector} />
              </Button>
            </Col>
            <Col sm="3">
              <FormGroup>
                <Input type="select" name="select" placeholder="" className={classes.home}>
                  <option>Home</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup>
                <Input type="select" name="select" placeholder="" className={classes.phone}>
                  <option>972-876-9292</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup className={classes.home}>
                <Input
                  type="text"
                  defaultValue="primary"
                  name="select"
                  id="exampleSelect"
                  className={classes.radiusButton}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm="1" className="mb-1">
              <Button color="light" className="rounded-circle ">
                <img className="sc-btn-action__img " src={iconVector} />
              </Button>
            </Col>
            <Col sm="3">
              <FormGroup>
                <Input type="select" name="select" placeholder="" className={classes.home}>
                  <option>Home</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup>
                <Input type="select" name="select" placeholder="" className={classes.phone}>
                  <option>972-876-9292</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </div>
    </Card>
  )
}

ContactInfo.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default ContactInfo
