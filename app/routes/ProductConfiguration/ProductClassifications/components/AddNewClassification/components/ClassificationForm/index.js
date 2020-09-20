import React from 'react'
import {Col, Label, Input, InputGroupAddon, InputGroup, FormGroup, Form} from 'reactstrap'
import PropTypes from 'prop-types'

const ClassificationForm = ({register, errors, count, setCount}) => {
  return (
    <Form className="mt-3">
      <FormGroup row>
        <Label for="name" sm={4} lg={3} className="text-dark text-sm-right">
          Name
        </Label>
        <Col sm={6}>
          <Input
            type="text"
            name="name"
            innerRef={register({required: 'This field is required.'})}
          />
          {errors && errors.name && <span className="text-danger">{errors.name.message}</span>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={4} lg={3} className="text-dark text-sm-right">
          Description
        </Label>
        <Col sm={6}>
          <Input
            type="textarea"
            name="description"
            innerRef={register({required: 'This field is required.'})}
          />
          {errors && errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="order" sm={4} lg={3} className="text-dark text-sm-right">
          Max Per Order
        </Label>
        <Col sm={6}>
          <InputGroup>
            <InputGroupAddon
              className="pointer"
              addonType="prepend"
              onClick={() => setCount(count - 1)}>
              -
            </InputGroupAddon>
            <Input
              placeholder="Amount"
              type="text"
              value={count}
              name="max_per_order"
              className="text-center"
              innerRef={register({
                validate: (value) => {
                  return value > 0 || 'Please enter value greater than 0.'
                },
              })}
              readOnly
            />
            <InputGroupAddon
              className="pointer"
              addonType="append"
              onClick={() => setCount(count + 1)}>
              +
            </InputGroupAddon>
          </InputGroup>
          {errors && errors.max_per_order && (
            <span className="text-danger">{count <= 0 ? errors.max_per_order.message : ''}</span>
          )}
        </Col>
      </FormGroup>
    </Form>
  )
}
ClassificationForm.propTypes = {
  register: PropTypes.func,
  setCount: PropTypes.func,
  count: PropTypes.number,
  errors: PropTypes.object,
}
export default ClassificationForm
