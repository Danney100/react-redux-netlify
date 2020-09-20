import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const Websites = () => {
  const websites = [
    'All Websites',
    'Customer Portal',
    'Consultant Portal',
    'Flight',
    'Customer Website',
  ]

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Websites
      </Label>
      {websites.map((website, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput type="checkbox" label={website} id={`website_${index}`} name={website} />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput type="checkbox" label={website} id={`website_${index}`} name={website} />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default Websites
