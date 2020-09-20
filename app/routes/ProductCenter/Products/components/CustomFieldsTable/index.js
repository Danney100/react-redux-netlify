import React from 'react'
import {Form, FormGroup, Label, Col, Input, Button} from 'reactstrap'

const CustomFieldsTable = () => {
  return (
    <Form className="mt-3 mx-5">
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Alcohol By Volume (ABV)
        </Label>
        <Col sm={5}>
          <Input type="text" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="input" sm={4} className="d-flex justify-content-end">
          Flavor*
        </Label>
        <Col sm={5}>
          <Input type="text" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col className=" d-flex justify-content-end">
          <Button color="spotify ">
            <i className="fa fa-check-circle mr-2"></i>
            Save
          </Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default CustomFieldsTable
