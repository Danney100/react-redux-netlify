import React from 'react'
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  CustomInput,
  Input,
  Label,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  checkColor: {
    color: '#DE8B6D',
  },
})

const ConfigurationThree = () => {
  const classes = useStyles()

  return (
    <Row className="my-3">
      <Col lg="4" className="pr-1 mb-3 mr-2 mr-lg-0 mb-lg-0">
        <Card className="text-dark">
          <CardBody>
            <CardTitle className="border-bottom">
              <Row>
                <Col className="h4">Tasting Statuses</Col>
                <Col className="d-flex justify-content-end">
                  <Form>
                    <FormGroup>
                      <div>
                        <CustomInput
                          type="checkbox"
                          id="a2"
                          label="Select All"
                          className={classes.checkColor}
                        />
                      </div>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardTitle>
            <Form>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="b2" label="Booked" />
                  <CustomInput type="checkbox" id="c2" label="Open" />
                  <CustomInput type="checkbox" id="d2" label="Open Host Order" />
                  <CustomInput type="checkbox" id="e2" label="Closed" />
                </div>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col lg="8" className="pl-2">
        <Card className="pb-3 ml-2 ml-lg-0 text-dark">
          <CardBody>
            <CardTitle className="border-bottom">
              <Row>
                <Col className="h4 pb-1">Set Shipment Line Status To</Col>
              </Row>
            </CardTitle>
            <Form>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Sent
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Picked
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Packed
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Shipped
                </Label>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ConfigurationThree
