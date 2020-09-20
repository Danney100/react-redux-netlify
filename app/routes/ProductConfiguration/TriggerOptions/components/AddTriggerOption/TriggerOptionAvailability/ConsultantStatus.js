import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const ConsultantStatus = () => {
  const consultant_statuses = [
    'All Consultant Statuses',
    'Active',
    'Inactive',
    'Hold',
    'Suspended',
    'Financial Hold',
    'Cancelled',
    'Incomplete',
  ]

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Consultant Statuses
      </Label>
      {consultant_statuses.map((consultant_status, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput
              type="checkbox"
              label={consultant_status}
              id={`consultant_status_${index}`}
              name={consultant_status}
            />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput
              type="checkbox"
              label={consultant_status}
              id={`consultant_status_${index}`}
              name={consultant_status}
            />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default ConsultantStatus
