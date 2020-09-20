import React from 'react'
import {Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input} from 'components'
import PropTypes from 'prop-types'
import {Controller} from 'react-hook-form'

const AccountInformation = (props) => {
  let {control, errors, getValues} = props

  return (
    <Card className="mb-3">
      <CardHeader tag="h6" className="my-0 text-white rounded-top font-italic bg-primary">
        Account Information
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              UserName&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="userName"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {errors.userName && <span className="text-danger">{errors.userName.message}</span>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Password&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="password"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Confirm Password&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="confrimPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: 'This field is required.',
                  validate: (value) => {
                    if (value === getValues()['password']) {
                      return true
                    } else {
                      return 'The passwords do not match'
                    }
                  },
                }}
              />
              {errors.confrimPassword && (
                <span className="text-danger">{errors.confrimPassword.message}</span>
              )}
            </Col>
          </FormGroup>
          {/* <FormGroup row className="d-flex justify-content-end">
            <Button className="rounded mr-3 bg-primary border-0">Continue</Button>
          </FormGroup> */}
        </Form>
      </CardBody>
    </Card>
  )
}

AccountInformation.propTypes = {
  demotrigger: PropTypes.bool.isRequired,
  DemoData: PropTypes.object.isRequired,
  control: PropTypes.object,
  errors: PropTypes.object,
  getValues: PropTypes.func,
}

export default AccountInformation
