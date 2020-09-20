import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Button, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import american from 'images/commonIcons/american.jpg'
import mastercard from 'images/commonIcons/mastercard.jpg'
import visa from 'images/commonIcons/visa.jpg'
import discover from 'images/commonIcons/discover.png'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  input: {
    marginBottom: 50,
  },
  place: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#adaaaa',
  },
  border: {
    borderRadius: 4,
    color: 'red',
    marginRight: 26,
  },
  option: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
  distance: {
    marginBottom: 30,
  },
  billing: {
    color: '#ffffff',
    fontFamily: 'SFUIText-Medium',
    fontSize: 13,
    backgroundColor: '#de8b6d',
    height: 40,
  },
  american: {
    width: 56,
    height: 36,
    marginLeft: 80,
  },
  visa: {
    width: 62,
    height: 20,
    marginLeft: 80,
    marginTop: 3,
  },
  mastercard: {
    width: 56,
    height: 36,
    marginLeft: 80,
  },
  discover: {
    width: 56,
    height: 36,
    marginLeft: 80,
  },
})

const CreditCard = () => {
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Credit Card</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <FormGroup row>
          <Col sm={{size: '8', offset: '4'}} className="mt-4">
            <img className={classes.visa} src={visa} />
            <img className={classes.mastercard} src={mastercard} />
            <img className={classes.american} src={american} />
            <img className={classes.discover} src={discover} />
          </Col>
        </FormGroup>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Name On Card*</Label>
              <Input />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Card Number</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Edpiration Date</Label>
              <Input className={classes.place} type="text" placeholder="Month" />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 my-2">
              <Label className={classes.title}></Label>
              <Input className={classes.place} type="text" placeholder="Year" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 "></FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label></Label>
              <Button className={classes.billing} sm={12} md={12} lg={12} style={{width: '100%'}}>
                Use Default Address For Billing
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Country*</Label>
              <Input type="select" className={classes.option}>
                <option>United States</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>State*</Label>
              <Input className={classes.option} type="select" defaultValue="">
                <option value={'CA'} key={'CA'}>
                  {'California'}
                </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>City*</Label>
              <Input />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>PostalCode*</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup className="mr-ml-5  mx-3">
              <Label className={classes.title}>Street1*</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-4">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Phone Number*</Label>
              <Input />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 ">
              <Label className={classes.title}>Street2</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

CreditCard.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default CreditCard
