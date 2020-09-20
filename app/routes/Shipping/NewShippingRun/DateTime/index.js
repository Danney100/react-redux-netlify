import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  CardTitle,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonMargin: {
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
  },
})

export const DateTime = () => {
  const classes = useStyles()
  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="text-dark font-weight-bold">Date/Time</span>
                </div>
              </CardTitle>
            </CardBody>
            <Form>
              <Row className="mx-1 my-2">
                <Col md="3" className="d-flex align-items-center">
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Number of days past
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <Input type="text" name="text" placeholder="7" />
                </Col>
                <Col md="1" className="d-flex align-items-center">
                  <Label>Days</Label>
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col md="3" className="d-flex align-items-center">
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Date Range
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <Input type="select" name="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col md={{size: 3, offset: 3}}>
                  <FormGroup>
                    <Label for="exampleCity">Form</Label>
                    <Input type="datetime-local" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleState">To</Label>
                    <Input type="datetime-local" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col className={classes.buttonMargin}>
                  <Button className={classes.buttonStyle}>Add Filter</Button>
                </Col>
              </Row>
              <Row form className="mx-2 mt-3">
                <Col sm={{size: 2, offset: 3}}>
                  <Row>
                    <Col sm="3" className="mb-1">
                      <Button color="light" className="rounded-circle mr-2">
                        <i className="fa fas fa-times"></i>
                      </Button>
                    </Col>
                    <Col sm="9">
                      <FormGroup>
                        <Input type="text" name="select" id="exampleSelect" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={{size: 1}} className="d-flex justify-content-center">
                  <Label>from</Label>
                </Col>
                <Col md={{size: 1}}>
                  <FormGroup>
                    <Input type="text" name="select" id="exampleSelect" />
                  </FormGroup>
                </Col>
                <Col md={{size: 1}} className="d-flex justify-content-center">
                  <Label>to</Label>
                </Col>
                <Col md={{size: 1}}>
                  <FormGroup>
                    <Input type="text" name="select" id="exampleSelect" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DateTime
