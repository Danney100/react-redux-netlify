import React from 'react'
import {Col, FormGroup, Label, CustomInput} from 'reactstrap'

const Carts = () => {
  const carts = [
    'All Shopping Carts',
    'Corporate Website',
    'Replicated Websites',
    'Website Party',
    'Consultant Join',
    'Portal Consultant',
    'Portal Customer',
    'Portal Party',
    'Flight Consultant',
    'Flight Customer',
  ]

  return (
    <FormGroup row className="my-3">
      <Label for="websites" sm={3} className="pt-0 text-lg-right">
        Carts
      </Label>
      {carts.map((cart, index) => {
        return index != 0 ? (
          <Col sm={{offset: '3', size: '9'}} className="mb-1" key={index}>
            <CustomInput type="checkbox" label={cart} id={`cart_${index}`} name={cart} />
          </Col>
        ) : (
          <Col sm={9} key={index}>
            <CustomInput type="checkbox" label={cart} id={`cart_${index}`} name={cart} />
          </Col>
        )
      })}
    </FormGroup>
  )
}

export default Carts
