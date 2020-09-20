import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {useSelector} from 'react-redux'
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
})

const Name = (props) => {
  const {register, demoTrigger, DemoData, errors, editData} = props
  const classes = useStyles()
  const data = useSelector(({customer}) => customer.get('customerDetails').toJS())
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Name</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>First Name*</Label>
              <Input
                type="text"
                name="first_name"
                defaultValue={
                  demoTrigger ? DemoData.first_name[0] :
                  editData ? data.first_name : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {errors['first_name']  && (
                <span className="text-danger">{errors['first_name'].message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Last Name*</Label>
              <Input
                type="text"
                name="last_name"
                defaultValue={
                  demoTrigger ? DemoData.last_name[0] :
                  editData ? data.last_name : ''
                }
                innerRef={register({required: 'This field is required.'})}
              />
              {errors['last_name']  && (
                <span className="text-danger">{errors['last_name'].message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Middle Name</Label>
              <Input
                type="text"
                name="middle_name"
                defaultValue={
                  demoTrigger ? DemoData.middle_name[0] :
                  editData ? data.middle_name : ''
                }
                innerRef={register}
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Nick Name</Label>
              <Input
                type="text"
                name="nick_name"
                defaultValue={
                  demoTrigger ? DemoData.nick_name[0] :
                  editData ? data.nick_name : ''
                }
                innerRef={register}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Company Name</Label>
              <Input
                type="text"
                className={classes.input}
                name="company_name"
                defaultValue={
                  demoTrigger ? DemoData.company_name[0] :
                  editData ? data.company_name : ''
                }
                innerRef={register}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

Name.propTypes = {
  demoTrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
  editData: PropTypes.bool,
}

export default Name
