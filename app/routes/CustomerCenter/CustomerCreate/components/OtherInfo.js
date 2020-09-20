import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
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
})

const OtherInfo = (props) => {
  const {register, errors, getValues, demoTrigger, DemoData, editData} = props
  const data = useSelector(({customer}) => customer.get('customerDetails').toJS())
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>OtherInfo</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Join Date</Label>
              <Input
                type="datetime-local"
                className={classes.content}
                name="join_date"
                defaultValue={
                  editData ? data.join_date : ''
                }
                innerRef={register}
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Date of Birth*</Label>
              <Input
                type="date"
                className={classes.content}
                name="date_of_birth"
                defaultValue={editData ? data.date_of_birth : ''}
                innerRef={register({required: 'This field is required.'})}
              />
              {errors['date_of_birth']  && (
                <span className="text-danger">{errors['date_of_birth'].message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Customer Type</Label>
              <Input
                type="select"
                className={classes.content}
                name="customer_type"
                value={
                  demoTrigger ? DemoData.customer_type[0] :
                  editData ? data.customer_type : ''
                }
                onChange={() => {}}
                innerRef={register}
              >
                <option value=''></option>
                <option value='Retail'>Retail</option>
                <option value='Preferred'>Preferred</option>
                <option value='Guest'>Guest</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Tax Exempt</Label>
              <Input
                className={classes.content}
                type="select"
                name="tax_exempt"
                value={
                  demoTrigger ? DemoData.tax_exempt[0] :
                  editData ? data.tax_exempt : ''
                }
                onChange={() => {}}
                innerRef={register}>
                <option value=''></option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Username&nbsp;*</Label>
              <Input
                type="text"
                name="username"
                defaultValue={
                  demoTrigger ? DemoData.username[0] :
                  editData ? data.username : ''
                }
                innerRef={register({
                  required: 'This field is required.',
                })}/>
              {errors.username && <span className="text-danger">{errors.username.message}</span>}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>{`${editData ? 'New ' : ''}Password${editData ? '' : ' *'}`}</Label>
              <Input
                type="password"
                name="password"
                defaultValue={
                  demoTrigger ? DemoData.password[0] :
                  editData ? data.password : ''
                }
                innerRef={register(editData ? null : {required: 'This field is required.'})}
              />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>{`Confirm ${editData ? 'New ' : ''}Password${editData ? '' : ' *'}`}</Label>
              <Input
                type="password"
                name="confirm_password"
                defaultValue={
                  demoTrigger ? DemoData.password[0] :
                  editData ? data.password : ''
                }
                innerRef={register({
                  validate: (value) => {
                    const {password} = getValues()
                    return value === password || 'The passwords do not match'
                  },
                })}
              />
              {errors.confirm_password && (
                <span className="text-danger">{errors.confirm_password.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Language*</Label>
              <Input className={classes.content} type="select" name="language" innerRef={register}>
                <option>English</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Customer Status</Label>
              <Input
                className={classes.content}
                type="select"
                name="customer_status"
                value={
                  demoTrigger ? DemoData.customer_status[0] :
                  editData ? data.customer_status : ''
                }
                onChange={() => {}}
                innerRef={register}
              >
                <option value=''></option>
                <option value='Inactive'>Inactive</option>
                <option value='Active'>Active</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-3">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" name="locked_out" innerRef={register} /> Locked Out
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" name="ignore_inactivity_check" innerRef={register} /> Ignore Inactivity Check
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

OtherInfo.propTypes = {
  demoTrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
  editData: PropTypes.bool,
}

export default OtherInfo
