import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Row, CardBody, Form, FormGroup, Label, Input} from 'reactstrap'
import {states} from 'routes/OrderCenter/CreatePerson/components/state'
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
    marginRight: 26,
  },
  distance: {
    marginBottom: 30,
  },
  option: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
})

const Identification = (props) => {
  const {register, errors} = props
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Identification</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <CardBody>
        <Form>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mx-3 mt-3">
                <Label className={classes.title}>SSN*</Label>
                <Input
                  type="text"
                  innerRef={register({required: 'This field is required.'})}
                  name="ssn"
                  defaultValue=""
                />
                {errors && errors.ssn && <span className="text-danger">{errors.ssn.message}</span>}
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="ml-md-5 mx-3 mt-3">
                <Label className={classes.title}>DL country</Label>
                <Input
                  type="select"
                  innerRef={register}
                  name="DL_country"
                  className={classes.option}>
                  <option value="US">United States</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mx-3 mt-3">
                <Label className={classes.title}>DL state</Label>
                <Input className={classes.option} type="select" name="DL_state" innerRef={register}>
                  {states.map((state, index) => {
                    return <option key={index}>{state.label}</option>
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="ml-md-5 mx-3 mt-3">
                <Label className={classes.title}>Drivers License</Label>
                <Input type="text" innerRef={register} name="drivers_license" defaultValue="" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

Identification.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default Identification
