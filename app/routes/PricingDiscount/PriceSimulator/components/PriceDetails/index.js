import React, {useState} from 'react'
import { 
    Card, 
    CardBody, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    InputGroupAddon, 
    InputGroup, 
    Col 
} from 'reactstrap'

const PriceDetails = () => {
    const [count, setCount] = useState(120)
    return (
      <Card className="my-4">
        <CardBody>
          <h2 className="sub-title">Price Details</h2>
          <hr />
          <Form>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                SKU
              </Label>
              <Col md={6} sm={7}>
                <Input type="text" placeholder="Select SKU …" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Country
              </Label>
              <Col md={6} sm={7}>
                <Input type="select" placeholder="Select">
                  <option>United States</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Currency
              </Label>
              <Col md={6} sm={7}>
                <Input type="select" placeholder="Select" className="input-value">
                  <option>US Dollars</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Order Date Time
              </Label>
              <Col md={6} sm={7}>
                <Input type="date" placeholder="7/9/2020" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Quantity
              </Label>
              <Col md={6} sm={7}>
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
                    style={{background: '#f7f7f7'}}
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
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Shopping Cart
              </Label>
              <Col md={6} sm={7}>
                <Input type="select" placeholder="Select">
                  <option>Corporate Website</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3} sm={4} className="label d-flex justify-content-sm-end">
                Price Classification
              </Label>
              <Col md={6} sm={7}>
                <Input type="select" placeholder="Select">
                  <option>Retail</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
}

export default PriceDetails
