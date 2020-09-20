import React from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const ProductTypeForm = ({register, errors}) => {
  return (
    <Form className="mt-3">
      <FormGroup row>
        <Label for="name" sm={4} lg={3} className="text-sm-right">
          Name&nbsp;*
        </Label>
        <Col sm={6}>
          <Input type="text" name="name" innerRef={register({required: true})} />
          {errors && errors.name ? <span className="text-danger">This field is required</span> : ''}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={4} lg={3} className="text-sm-right">
          Description&nbsp;*
        </Label>
        <Col sm={6}>
          <Input type="textarea" name="description" innerRef={register({required: true})} />
          {errors && errors.description ? (
            <span className="text-danger">This field is required</span>
          ) : (
            ''
          )}
        </Col>
      </FormGroup>
    </Form>
  )
}

ProductTypeForm.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
}
export default ProductTypeForm
