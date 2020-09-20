import React, {useState} from 'react'
import {Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import PropTypes from 'prop-types'

import FormCheckOptions from './FormCheckOptions'

const ProductForm = ({
  joinOptions,
  classifications,
  taxCodes,
  types,
  memberships,
  register,
  errors,
}) => {
  const [showClassifications, setShowClassifications] = useState(false)

  return (
    <Form>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Internal Name&nbsp;*
        </Label>
        <Col sm={5}>
          <Input
            type="text"
            innerRef={register({required: 'This field is required.'})}
            name="name"
          />
          {errors && errors.name && <span className="text-danger">{errors.name.message}</span>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          SKU&nbsp;*
        </Label>
        <Col sm={5}>
          <Input
            type="text"
            innerRef={register({required: 'This field is required.'})}
            name="sku"
          />
          {errors && errors.sku && <span className="text-danger">{errors.sku.message}</span>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Product Type&nbsp;*
        </Label>
        <Col sm={5}>
          <Input
            type="select"
            innerRef={register({required: 'This field is required.'})}
            name="product_type">
            <option value="">{''}</option>
            {types.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              )
            })}
          </Input>
          {errors && errors.product_type && (
            <span className="text-danger">{errors.product_type.message}</span>
          )}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Product Status&nbsp;*
        </Label>
        <Col sm={5}>
          <Input
            type="select"
            innerRef={register({required: 'This field is required.'})}
            name="status">
            <option value="live">Active</option>
            <option value="draft">Inactive</option>
          </Input>
          {errors && errors.status && <span className="text-danger">{errors.status.message}</span>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Price
        </Label>
        <Col sm={5}>
          <Input type="number" innerRef={register} name="price.amount" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Weight (oz)
        </Label>
        <Col sm={5}>
          <Input type="number" innerRef={register} name="weight" step=".01" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Product Tax Code&nbsp;*
        </Label>
        <Col sm={5}>
          <Input
            type="select"
            innerRef={register({required: 'This field is required.'})}
            name="tax_code">
            {taxCodes.map((taxCode) => {
              return (
                <option key={taxCode.id} value={taxCode.id}>
                  {taxCode.name}
                </option>
              )
            })}
          </Input>
          {errors && errors.tax_code && (
            <span className="text-danger">{errors.tax_code.message}</span>
          )}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Tax ID
        </Label>
        <Col sm={5}>
          <Input type="text" innerRef={register} name="tax_id" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Memberships
        </Label>
        <Col sm={5}>
          <Input type="select" innerRef={register} name="membership">
            <option value="">None</option>
            {memberships.map((membership) => {
              return (
                <option key={membership.id} value={membership.id}>
                  {membership.name}
                </option>
              )
            })}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Join Options
        </Label>
        <Col sm={5}>
          <Input type="select" innerRef={register} name="join_option">
            <option value="">None</option>
            {joinOptions.map((joinOption) => {
              return (
                <option key={joinOption.id} value={joinOption.id}>
                  {joinOption.name}
                </option>
              )
            })}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Gift Card Product?
        </Label>
        <Col sm={5}>
          <Input type="select" innerRef={register} name="gift_card_product">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Donation Configuration
        </Label>
        <Col sm={5}>
          <Input type="select" innerRef={register} name="donation_configuration">
            <option>None</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Product Classifications
        </Label>
        {showClassifications && (
          <Col sm={5} className="mb-2">
            <Input type="select" innerRef={register} name="product_classification">
              <option value="" />
              {classifications.map((classification) => {
                return (
                  <option key={classification.id} value={classification.id}>
                    {classification.name}
                  </option>
                )
              })}
            </Input>
          </Col>
        )}
        <Col
          sm={{offset: showClassifications ? 4 : 0, size: 5}}
          className="text-lg-left text-right">
          <Button color="spotify" onClick={() => setShowClassifications(true)}>
            <i className="fa fa-plus mr-2" />
          </Button>
        </Col>
      </FormGroup>
      <FormCheckOptions register={register} />
    </Form>
  )
}

ProductForm.propTypes = {
  joinOptions: PropTypes.array,
  classifications: PropTypes.array,
  taxCodes: PropTypes.array,
  types: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object,
  memberships: PropTypes.array,
}

export default ProductForm
