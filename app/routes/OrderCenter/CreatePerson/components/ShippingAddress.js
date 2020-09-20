import React from 'react'
import {Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input} from 'components'
import PropTypes from 'prop-types'
import {Controller} from 'react-hook-form'
import Select from 'react-select'
import {states} from './state'

const ShippingAddress = (props) => {
  let {control, errors, setValue} = props
  const {shipping} = errors

  const handleCountryChange = (selectedOption) => {
    setValue('shipping.country', selectedOption.value)
  }

  const handleCountyChange = (selectedOption) => {
    setValue('shipping.county', selectedOption.label)
  }

  return (
    <Card className="mb-3">
      <CardHeader tag="h6" className="my-0 font-italic rounded-top bg-primary text-white">
        Shipping Address
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Name
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="shipping.name" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              First Name&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.first_name"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.first_name && (
                <span className="text-danger">{shipping.first_name.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Last Name&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.last_name"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.last_name && (
                <span className="text-danger">{shipping.last_name.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Company
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.company_name"
                control={control}
                defaultValue=""
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Country&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={
                  <Select
                    options={[{label: 'United States', value: 'US'}]}
                    onChange={handleCountryChange}
                  />
                }
                name="shipping.country"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.country && (
                <span className="text-danger">{shipping.country.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Street 1&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.line_1"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.line_1 && (
                <span className="text-danger">{shipping.line_1.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Street 2
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="shipping.line_2" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              City
            </Label>
            <Col sm={8}>
              <Controller as={Input} name="shipping.city" control={control} defaultValue="" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              State&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={<Select options={states} onChange={handleCountyChange} />}
                name="shipping.county"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.county && (
                <span className="text-danger">{shipping.county.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Postal Code&nbsp;*
            </Label>
            <Col sm={8}>
              <Controller
                as={<Input type="number" />}
                name="shipping.postcode"
                control={control}
                defaultValue=""
                rules={{required: 'This field is required.'}}
              />
              {shipping && shipping.postcode && (
                <span className="text-danger">{shipping.postcode.message}</span>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Phone Number
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.phone_number"
                control={control}
                defaultValue=""
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="input" sm={4} className="d-flex justify-content-end">
              Special Instructions
            </Label>
            <Col sm={8}>
              <Controller
                as={Input}
                name="shipping.instructions"
                type="textarea"
                control={control}
                defaultValue=""
              />
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

ShippingAddress.propTypes = {
  demotrigger: PropTypes.bool.isRequired,
  DemoData: PropTypes.object.isRequired,
  errors: PropTypes.object,
  control: PropTypes.object,
  setValue: PropTypes.func,
}

export default ShippingAddress
