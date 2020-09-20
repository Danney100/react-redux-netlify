import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {states} from 'routes/OrderCenter/CreatePerson/components/state'

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

const MailingAddress = (props) => {
  const {register, errors, demoTrigger, DemoData, editData} = props
  const {shipping_address} = errors
  const data = useSelector(({customer}) => customer.get('customerDetails').toJS())
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Default Mailing Address</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Country*</Label>
              <Input
                type="select"
                className={classes.option}
                name="shipping_address.country"
                value={
                  demoTrigger ? DemoData.country[0] : 
                  editData && data.shipping_address ? data.shipping_address.country : ''
                }
                onChange={() => {}}
                innerRef={register({required: 'This field is required.'})}
              >
                <option value=""></option>
                <option value="US">United States</option>
              </Input>
              {shipping_address && shipping_address.country && (
                <span className="text-danger">{shipping_address.country.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>State*</Label>
              <Input
                type="select"
                className={classes.option}
                name="shipping_address.state"
                value={
                  demoTrigger ? DemoData.state[0] :
                  editData && data.shipping_address ? data.shipping_address.state : ''
                }
                onChange={() => {}}
                innerRef={register({required: 'This field is required.'})}
              >
                <option value=""></option>
                {states.map((state) => {
                  return (
                    <option value={state.value} key={state.value}>
                      {state.label}
                    </option>
                  )
                })}
              </Input>
              {shipping_address && shipping_address.state && (
                <span className="text-danger">{shipping_address.state.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>City*</Label>
              <Input
                type="text"
                name="shipping_address.city"
                defaultValue={
                  demoTrigger ? DemoData.city[0] :
                  editData && data.shipping_address ? data.shipping_address.city : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.city && (
                <span className="text-danger">{shipping_address.city.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Postal Code*</Label>
              <Input
                type="text"
                name="shipping_address.postal_code"
                defaultValue={
                  demoTrigger ? DemoData.postal_code[0] :
                  editData && data.shipping_address ? data.shipping_address.postal_code : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.postal_code && (
                <span className="text-danger">{shipping_address.postal_code.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup className="mr-ml-5  mx-3">
              <Label className={classes.title}>Street1*</Label>
              <Input
                type="text"
                name="shipping_address.street_1"
                defaultValue={
                  demoTrigger ? DemoData.street_1[0] :
                  editData && data.shipping_address ? data.shipping_address.street_1 : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.street_1 && (
                <span className="text-danger">{shipping_address.street_1.message}</span>
              )}
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
                defaultValue={
                  demoTrigger ? DemoData.phone_number[0] :
                  editData && data.shipping_address ? data.shipping_address.phone_number : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {shipping_address && shipping_address.phone_number && (
                <span className="text-danger">{shipping_address.phone_number.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Street2</Label>
              <Input
                type="text"
                name="shipping_address.street_2"
                defaultValue={
                  demoTrigger ? DemoData.street_2[0] :
                  editData && data.shipping_address ? data.shipping_address.street_2 : ''
                }
                innerRef={register}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-4">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Validated</Label>
              <Input
                type="select"
                name="validated"
                className={classes.option}
                value={
                  demoTrigger ? DemoData.validated[0] :
                  editData && data.shipping_address ? data.shipping_address.validated : ''
                }
                onChange={() => {}}
                innerRef={register}
              >
                <option value="Unknown">Unknown</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 ">
              <Label className={classes.title}>Residential</Label>
              <Input
                type="select"
                name="residential"
                className={classes.option}
                value={
                  demoTrigger ? DemoData.residential[0] :
                  editData && data.shipping_address ? data.shipping_address.residential : ''
                }
                onChange={() => {}}
                innerRef={register}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

MailingAddress.propTypes = {
  demoTrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
  editData: PropTypes.bool,
}

export default MailingAddress
