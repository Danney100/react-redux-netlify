import React from 'react'
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardGroup,
  CardBody,
  Form,
  FormGroup,
  CustomInput,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  checkColor: {
    color: '#DE8B6D',
  },
})

const ConfigurationTwo = () => {
  const classes = useStyles()

  return (
    <CardGroup className="mt-3">
      <Card className="mr-sm-2 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Product Types</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="a1"
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
                <CustomInput type="checkbox" id="b1" label="Wine" />
                <CustomInput type="checkbox" id="c1" label="Merchandise" />
                <CustomInput type="checkbox" id="d1" label="Business Basics Kit" />
                <CustomInput type="checkbox" id="e1" label="Gift Cards" />
                <CustomInput type="checkbox" id="f1" label="Warehouse Supplies" />
                <CustomInput type="checkbox" id="g1" label="Service" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Card className="mx-sm-1 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Order</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="aa1"
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
                <CustomInput type="checkbox" id="bb1" label="Exclude Ship w/Hold" />
                <CustomInput type="checkbox" id="cc1" label="Exclude Orders w/Back Ordered Lines" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Card className="ml-sm-2 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Consolidation</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="aaa1"
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
                <CustomInput type="checkbox" id="bbb1" label="Consolidated Orders" />
                <CustomInput type="checkbox" id="ccc1" label="Non-Consolidated" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </CardGroup>
  )
}

export default ConfigurationTwo
