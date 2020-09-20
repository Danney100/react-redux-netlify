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

const Configuration = () => {
  const classes = useStyles()

  return (
    <CardGroup className={classes.root}>
      <Card className="mr-sm-2 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Warehouses</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="a"
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
                <CustomInput type="checkbox" id="b" label="Farmers Branch" />
                <CustomInput type="checkbox" id="c" label="Sonoma" />
                <CustomInput type="checkbox" id="d" label="77 Promotions" />
                <CustomInput type="checkbox" id="e" label="Wine Club" />
                <CustomInput type="checkbox" id="f" label="Non Resalable Product" />
                <CustomInput type="checkbox" id="g" label="Cellar Reserve" />
                <CustomInput type="checkbox" id="h" label="Warehouse Supplies" />
                <CustomInput type="checkbox" id="i" label="Cellar Shore" />
                <CustomInput type="checkbox" id="j" label="Merch" />
                <CustomInput type="checkbox" id="k" label="Tanks" />
                <CustomInput type="checkbox" id="l" label="Alpha" />
                <CustomInput type="checkbox" id="m" label="sd" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Card className="mx-sm-1 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Order Types</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="aa"
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
                <CustomInput type="checkbox" id="bb" label="Include Tasting Orders" />
                <CustomInput type="checkbox" id="cc" label="Include Non-Tasting Orders" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Card className="ml-sm-2 text-dark">
        <CardBody>
          <CardTitle className="border-bottom">
            <Row>
              <Col className="h4">Shipping Methods</Col>
              <Col className="d-flex justify-content-end">
                <Form>
                  <FormGroup>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="aaa"
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
                <CustomInput type="checkbox" id="bbb" label="Farmers Branch" />
                <CustomInput type="checkbox" id="ccc" label="SSS Ground (7-12 business)" />
                <CustomInput type="checkbox" id="ddd" label="2-Day Air" />
                <CustomInput type="checkbox" id="eee" label="Overnight" />
                <CustomInput type="checkbox" id="fff" label="Pick Up-Farmers Branch,TX(FREE)" />
                <CustomInput type="checkbox" id="ggg" label="AK/HI2 Day" />
                <CustomInput type="checkbox" id="hhh" label="Merch Sold in Local Pickup" />
                <CustomInput type="checkbox" id="iii" label="SS Host Ground Shipping" />
                <CustomInput type="checkbox" id="kkk" label="Special Bulk Shipping" />
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </CardGroup>
  )
}

export default Configuration
