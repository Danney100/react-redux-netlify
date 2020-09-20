import React from 'react'
import {Row, FormGroup, Label, Col, Form, Button, Input} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'

const FilterRow = () => {
  return (
    <div className="ml-3 my-5">
      <Row className="pb-sm-3">
        <Col className="label">Gift Cards Generated Between:</Col>
      </Row>
      {/* <Form inline>
        <FormGroup className="mr-3 mr-sm-0 mt-3 mb-0">
          <Label sm={1} className="label mr-2 pl-0 pl-sm-3">start</Label>
          <Input className="filter-value" type="date" />
        </FormGroup>
        <FormGroup className="mr-3 mr-sm-0 mt-3 mb-0">
          <Label sm={1} className="label mr-2 pl-0 pl-sm-3">End</Label>
          <Input className="filter-value" type="date" />
        </FormGroup>
        <CommonButton title="Filters" buttonType="addButton"  wrapperClass="mt-3 mr-4" width={143} height={40}/>
      </Form> */}
      <Form>
        <Row form>
          <Col sm={6} md={4} lg={3}>
            <FormGroup row>
              <Label sm="auto" for="examplePassword">
                Start
              </Label>
              <Col sm={9} md={8} className="p-sm-0">
                <Input type="date" />
              </Col>
            </FormGroup>
          </Col>
          <Col sm={6} md={4} className="pl-sm-3">
            <FormGroup row>
              <Label sm="auto" for="examplePassword">
                End
              </Label>
              <Col sm={9} md={8} className="p-sm-0">
                <Input type="date" />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <CommonButton title="Filters" buttonType="addButton" width={143} height={35} />
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default FilterRow
