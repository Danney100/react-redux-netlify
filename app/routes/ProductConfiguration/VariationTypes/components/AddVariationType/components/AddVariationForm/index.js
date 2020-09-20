import React, {useState} from 'react'
import {Form, FormGroup, Label, Row, Col, Input} from 'reactstrap'
import PropTypes from 'prop-types'

import CommonButton from 'routes/components/CommonButton'
import RenderField from '../RenderField'

const AddVariationForm = ({variation, setVariation, register}) => {
  const [optionType, setOptionType] = useState('')
  const [field, setField] = useState('')
  const [fieldCount, setFieldCount] = useState(0)

  const addField = () => {
    if (optionType) {
      setField(optionType)
      setFieldCount((prevState) => prevState + 1)
    }
  }

  const removeField = () => {
    if (fieldCount > 0) {
      setFieldCount((prevState) => prevState - 1)
    }
  }

  const renderFields = () => {
    const fields = []
    for (let i = 0; i < fieldCount; i) {
      fields.push(<RenderField removeField={removeField} field={field} key={i} />)
    }
    return fields
  }

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="label">
              Variation Type Name<span className="required">*</span>
            </Label>
            <Input
              type="text"
              name="name"
              innerRef={register}
              defaultValue={variation.name}
              onChange={(e) => setVariation({...variation, name: e.target.value})}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="label">
              Variation Type Description<span className="required">*</span>
            </Label>
            <Input
              type="text"
              name="description"
              innerRef={register}
              defaultValue={variation.description}
              onChange={(e) => setVariation({...variation, description: e.target.value})}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label className="label">Default Variations and Order For Type</Label>
        <div className="d-flex flex-row">
          <div className="w-100">
            <Input
              type="text"
              placeholder="Option Type"
              style={{height: '40px'}}
              onChange={(e) => setOptionType(e.target.value)}
            />
          </div>
          <div className="pl-3 flex-shrink-1">
            <CommonButton
              title="Add"
              buttonType="cancelButton"
              onClick={addField}
              wrapperClass="btnConfig ml-0"
            />
          </div>
        </div>
      </FormGroup>
      {fieldCount ? <hr /> : ''}
      {renderFields()}
    </Form>
  )
}

AddVariationForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  variation: PropTypes.object,
  setVariation: PropTypes.func,
  register: PropTypes.func,
}

export default AddVariationForm
