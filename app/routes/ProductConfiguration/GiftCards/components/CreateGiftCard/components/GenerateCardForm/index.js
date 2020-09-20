import React, {useState} from 'react'
import {Col, Label, Input, InputGroupAddon, InputGroup, FormGroup, Form} from 'reactstrap'

const GenerateCardForm = () => {
  const [count, setCount] = useState(0)

  return (
    <Form className="mt-3">
      <FormGroup row>
        <Label for="name" sm={4} lg={3} className="text-dark text-sm-right">
          Gift Card Code Format
        </Label>
        <Col sm={6}>
          <Input type="text" id="name" placeholder="AA##-A#A#" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="order" sm={4} lg={3} className="text-dark text-sm-right">
          Number of codes to generate
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
              readOnly
              className="text-center"
            />
            <InputGroupAddon
              className="pointer"
              addonType="append"
              onClick={() => setCount(count + 1)}>
              +
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="cardValue" sm={4} lg={3} className="text-dark text-sm-right">
          Gift Card Value
        </Label>
        <Col sm={3} className="mb-3 mb-sm-0">
          <Input type="text" id="cardValue" placeholder="10.00" />
        </Col>
        <Col sm={3}>
          <Input type="select" id="country" />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default GenerateCardForm
