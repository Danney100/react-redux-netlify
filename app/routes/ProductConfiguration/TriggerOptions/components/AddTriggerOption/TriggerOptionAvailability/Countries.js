import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const Countries = () => {
  const countries = ['All Countries', 'United States']

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Countries
      </Label>
      {countries.map((country, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput type="checkbox" label={country} id={`country_${index}`} name={country} />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput type="checkbox" label={country} id={`country_${index}`} name={country} />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default Countries
