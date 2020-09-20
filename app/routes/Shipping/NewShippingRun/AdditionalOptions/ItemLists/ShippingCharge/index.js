import React from 'react'
import {Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonColor: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
  },
})

const ShippingCharge = () => {
  const classes = useStyles()

  return (
    <div className="mt-2">
      <Row className="mx-1">
        <Col>
          <Label for="exampleCity">Shipping Charge is in between</Label>
        </Col>
      </Row>
      <Row className="ml-1 my-2 pb-3 border-bottom">
        <Col sm="4" className="mt-2">
          <Input type="text" name="city" id="exampleCity" />
        </Col>
        <Col sm="1" className="d-flex mt-2 justify-content-center">
          <Label>and</Label>
        </Col>
        <Col sm="4" className="mt-2">
          <Input type="text" name="state" id="exampleState" />
        </Col>
        <Col sm="3" className="mt-2">
          <Button className={classes.buttonColor}>Add Filter</Button>
        </Col>
      </Row>
      <Row form className="ml-3 mt-3">
        <Col sm={{size: 4}}>
          <Row>
            <Col xs="5" className="mb-1">
              <Button color="light" className="rounded-circle mr-2">
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col xs="7" className="d-flex justify-content-center">
              <FormGroup>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={{size: 1}} className="d-flex justify-content-center">
          <Label>and</Label>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" />
          </FormGroup>
        </Col>
        <Col sm={{size: 1}} className="d-flex justify-content-center">
          <Label>or</Label>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingCharge
