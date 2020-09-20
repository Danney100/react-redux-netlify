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
})

const MailingAddress = () => {
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5">
        <h4 className={classes.name}>
          Default Mailing Address
          <hr className={classes.border} />
        </h4>
      </div>
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Country*</Label>
              <Input type="select" className={classes.option}>
                <option>United state</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>State*</Label>
              <Input className={classes.option} type="select" defaultValue="">
                <option>Califonia</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>City*</Label>
              <Input
                className={classes.option}
                type="text"
                name="shipping_address.city"
                defaultValue="Tempa"
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Postal Code*</Label>
              <Input className={classes.option} defaultValue="33602-_ _ _ _" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup className="mr-ml-5  mx-3">
              <Label className={classes.title}>Street1*</Label>
              <Input
                type="text"
                name="shipping_address.postcode"
                className={classes.option}
                defaultValue="1208 E Kennedy Blvd"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Phone Number*</Label>
              <Input
                type="text"
                name="shipping_address.phone_number"
                className={classes.option}
                defaultValue="465-465-4654"
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Street2</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-4">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Validated</Label>
              <Input type="select" name="residential" className={classes.option}>
                <option>Unknown</option>
                <option>known</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 ">
              <Label className={classes.title}>Residential</Label>
              <Input Input type="select" name="residential" className={classes.option}>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

MailingAddress.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default MailingAddress
