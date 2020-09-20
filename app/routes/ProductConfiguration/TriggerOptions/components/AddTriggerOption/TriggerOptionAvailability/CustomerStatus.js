import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const CustomerStatus = () => {
  const customer_statuses = ['All Customer Statuses', 'Active', 'Inactive', 'Cancelled']

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Customer Statuses
      </Label>
      {customer_statuses.map((customer_status, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput
              type="checkbox"
              label={customer_status}
              id={`customer_status_${index}`}
              name={customer_status}
            />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput
              type="checkbox"
              label={customer_status}
              id={`customer_status_${index}`}
              name={customer_status}
            />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default CustomerStatus
