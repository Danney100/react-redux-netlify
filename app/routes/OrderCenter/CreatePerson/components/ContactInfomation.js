import React from 'react'
import {Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input} from 'components'
import PropTypes from 'prop-types'
import {Controller} from 'react-hook-form'

const ContactInfomation = (props) => {
  let {control, errors} = props

  return (
    <Card className="mb-3">
      <CardHeader tag="h6" className="font-italic mb-0 mt-0 rounded-top bg-primary text-white">
        Contact Information
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              FirstName
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="firstName" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              LastName
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="lastName" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              LastName2
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="lastName2" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Company Name
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="companyName" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Email&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="email"
                control={control}
                defaultValue=""
                rules={{required: true}}
              />
              {errors.email && <span className="text-danger">This field is required.</span>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Home Phone
            </Label>
            <Col sm={4}>
              <Controller as={Input} name="homePhone" control={control} defaultValue="" />
            </Col>
            <Col sm={4} className="d-flex justify-content-center align-items-center">
              <Label check>
                <Input type="checkbox" /> Make Primary
              </Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end font-weight-light">
              Cell Phone
            </Label>
            <Col sm={4}>
              <Controller as={Input} name="cellPhone" control={control} defaultValue="" />
            </Col>
            <Col sm={4} className="d-flex justify-content-center align-items-center">
              <Label check>
                <Input type="checkbox" /> Make Primary
              </Label>
            </Col>
          </FormGroup>
          {/* <FormGroup row className="d-flex justify-content-end">
            <Button className="rounded border-0 mr-3 bg-primary">Continue</Button>
          </FormGroup> */}
        </Form>
      </CardBody>
    </Card>
  )
}

ContactInfomation.propTypes = {
  demotrigger: PropTypes.bool.isRequired,
  DemoData: PropTypes.object.isRequired,
  errors: PropTypes.object,
  control: PropTypes.object,
}

export default ContactInfomation
