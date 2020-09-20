import React from 'react'
import {Card, CardBody, Input, Form, FormGroup, Label} from 'reactstrap'

const Filter = () => {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="filter">Filter</span>
        <hr />
        <Form inline className="justify-content-center">
          <FormGroup className="mb-2 mb-sm-3 mb-md-0">
            <Label for="process" className="mr-sm-2 filter-label">
              Process
            </Label>
            <Input type="select" name="process" id="process">
              <option>Monthly Compensation</option>
              <option>Weekly Compensation</option>
              <option>Daily Compensation</option>
            </Input>
          </FormGroup>
          <FormGroup className="mx-5 mb-2 mr-sm-3 mb-sm-3 mb-md-0">
            <Label for="run" className="mr-sm-2 filter-label">
              Run
            </Label>
            <Input type="select" name="run" id="run">
              <option>Month 07/02/2020 - 07/08/2020</option>
              <option>Month 07/03/2020 - 07/09/2020</option>
              <option>Month 07/04/2020 - 07/10/2020</option>
              <option>Month 07/05/2020 - 07/11/2020</option>
            </Input>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Filter
