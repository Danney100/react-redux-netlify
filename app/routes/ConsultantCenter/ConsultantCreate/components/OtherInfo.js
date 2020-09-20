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
})

const OtherInfo = (props) => {
  const {register, errors, getValues, checkDateOfBirth} = props
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Other Information</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Join Date</Label>
              <Input
                className={classes.content}
                innerRef={register}
                type="datetime-local"
                name="JoinDate"
              />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Date of Birth*</Label>
              <Input
                className={classes.content}
                innerRef={register({validate: value => checkDateOfBirth(value)})}
                type="date"
                name="date_of_birth"></Input>
              {errors && errors.date_of_birth && (
                <span className="text-danger">Date of Birth must be greater than 21</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Consultant Type</Label>
              <Input type="select" name="ConsultantType" innerRef={register}>
                <option>{props.demotrigger ? props.DemoData.CustomerType : ''}</option>
                <option>Consultant</option>
                <option>Circle Consultant</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Business Type</Label>
              <Input type="select" name="BusinessType" innerRef={register}>
                <option>{props.demotrigger ? props.DemoData.BusinessType : ''}</option>
                <option>individual</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Tax Exempt</Label>
              <Input type="select" name="TaxExempt" innerRef={register}>
                <option>{props.demotrigger ? props.DemoData.TaxExempt : ''}</option>
                <option>No</option>
                <option>Yes</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Username*</Label>
              <Input
                type="text"
                innerRef={register({required: 'This field is required.'})}
                name="username"
                defaultValue=""
              />
              {errors && errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Password*</Label>
              <Input
                type="password"
                innerRef={register({required: 'This field is required.'})}
                name="password"
                defaultValue=""
              />
              {errors && errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Confirm Password*</Label>
              <Input
                type="password"
                name="confirm_password"
                innerRef={register({
                  validate: (value) => {
                    const {password} = getValues()
                    return value === password || 'The passwords do not match'
                  },
                })}
                defaultValue=""
              />
              {errors && errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Website URL*</Label>
              <Input
                type="text"
                innerRef={register({required: 'This field is required.'})}
                name="website_url"
              />
              {errors && errors.website_url && (
                <span className="text-danger">{errors.website_url.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Language</Label>
              <Input type="select" name="TranslationLanguage" innerRef={register}>
                <option></option>
                <option>English</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Consultant Status</Label>
              <Input type="select" name="ConsultantStatus" innerRef={register}>
                <option></option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Hold</option>
                <option>Suspended</option>
                <option>Financial Hold</option>
                <option>Incomplete</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Gender</Label>
              <Input type="select" name="Gender" innerRef={register}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Not Applicable</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Block Portal</Label>
              <Input type="select" name="BlockPortal" innerRef={register}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Block Website</Label>
              <Input type="select" name="BlockWebsite" innerRef={register}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Replicated Site URL*</Label>
              <Input
                type="text"
                innerRef={register({required: 'This field is required.'})}
                name="replicated_site_url"
              />
              {errors && errors.replicated_site_url && (
                <span className="text-danger">{errors.replicated_site_url.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-3">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" innerRef={register} name="locked_out" /> Locked Out
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" innerRef={register} name="igonre_inactivity_check" /> Ignore
                Inactivity Check
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
  getValues: PropTypes.func,
}

export default OtherInfo
