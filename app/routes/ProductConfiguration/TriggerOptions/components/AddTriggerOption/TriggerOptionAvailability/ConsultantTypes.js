import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const ConsultantTypes = () => {
  const consultant_types = ['All Consultant Types', 'Consultant', 'Circle Consultant']

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Consultant Types
      </Label>
      {consultant_types.map((consultant_type, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput
              type="checkbox"
              label={consultant_type}
              id={`consultant_types_${index}`}
              name={consultant_type}
            />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput
              type="checkbox"
              label={consultant_type}
              id={`consultant_types_${index}`}
              name={consultant_type}
            />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default ConsultantTypes
