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
  CardTitle,
  Button,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  checkColor: {
    color: '#DE8B6D',
  },
  titleColor: {
    color: '#27BFA3',
  },
  cancelButton: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
    width: 120,
  },
  createButton: {
    backgroundColor: '#27BFA3 !important',
    borderColor: '#27BFA3 !important',
    width: 120,
  },
})

export const ShippingRun = () => {
  const classes = useStyles()
  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div className={classes.titleColor}>
                  <span className="font-weight-bold">Save This Shipping Run</span>
                </div>
              </CardTitle>
            </CardBody>
            <Form className="mx-3 my-4 text-dark font-weight-bold">
              <Row className="mb-4">
                <Col
                  md={{size: 2, offset: 3}}
                  className="d-flex align-items-center justify-content-first justify-content-md-end">
                  <Label>Save Name</Label>
                </Col>
                <Col md={{size: 4}}>
                  <Input type="text" placeholder="United States" />
                </Col>
              </Row>
              <Row>
                <Col md={{size: 4, offset: 5}}>
                  <FormGroup check inline>
                    <Label check className={classes.checkColor}>
                      <Input type="checkbox" />
                      Some this shipping run&apos;s settings when run
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Card>
          <Row className="my-4">
            <Col md={{size: 2, offset: 8}} className="mb-2 d-flex justify-content-end">
              <Button className={classes.cancelButton}>Cancel</Button>
            </Col>
            <Col md={{size: 2}} className="mb-2 d-flex justify-content-end">
              <Button className={classes.createButton}>Create Run</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingRun
