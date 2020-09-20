import React from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  Input,
  CardHeader,
  CardBody,
  CustomInput,
  FormGroup,
  Label,
} from 'reactstrap'
import PropTypes from 'prop-types'
import Select from 'react-select'

const Subscription = ({addSubscription, removeSubscription}) => {
  const time_options = [
    {label: 'Days', value: 1},
    {label: 'Weeks', value: 2},
    {label: 'Months', value: 3},
    {label: 'Years', value: 4},
  ]

  return (
    <Card className="mt-3">
      <CardHeader className="bg-primary">
        <Row>
          <Col sm="auto" className="text-white my-auto">
            <i className="fa fa-ellipsis-v fa-2x pull-left text-white mr-3" />
            SKU
          </Col>
          <Col sm="3">
            <Select
              options={[
                {label: 'Consultant', value: 1},
                {label: 'Circle Consultant', value: 2},
              ]}
            />
          </Col>
          <Col className="text-right mt-lg-0 mt-2">
            <Button color="warning" onClick={removeSubscription}>
              <i className="fa fas fa-minus" />
            </Button>
            <Button color="success" className="ml-1" onClick={addSubscription}>
              <i className="fa fas fa-plus" />
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="3" lg="auto">
            <FormGroup row className="mb-0 pl-1">
              <Label className="m-0 mr-1">Display</Label>
              <CustomInput type="checkbox" id="display" />
            </FormGroup>
          </Col>
          <Col className="p-1" sm="1" lg="auto"></Col>
          <Col className="p-1 my-auto" sm="3" lg="auto">
            Process
          </Col>
          <Col className="p-1" sm="6" lg="1">
            <Input type="select" />
          </Col>
          <Col className="p-1 my-auto" sm="auto">
            Starting
          </Col>
          <Col className="p-1" xs="6" sm="1">
            <Input type="number" />
          </Col>
          <Col className="p-1" xs="5" sm="2">
            <Select options={time_options} defaultValue={time_options[0]} />
          </Col>
          <Col className="p-1 my-auto" sm="auto">
            from join and end after
          </Col>
          <Col className="p-1" xs="6" sm="1">
            <Input type="number" />
          </Col>
          <Col className="p-1 my-auto" xs="6" sm="auto">
            orders
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm="auto" className="mr-2 p-1">
            Shipping method
          </Col>
          <Col sm="4">
            <Select
              options={[
                {label: 'Consultant', value: 1},
                {label: 'Circle Consultant', value: 2},
              ]}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

Subscription.propTypes = {
  addSubscription: PropTypes.func,
  removeSubscription: PropTypes.func,
}

export default Subscription
