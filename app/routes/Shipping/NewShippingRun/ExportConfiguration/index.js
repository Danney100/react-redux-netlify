import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  CustomInput,
  CardTitle,
  Media,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },
  buttonStyle: {
    backgroundColor: '#DE8B6D !important',
    borderColor: '#DE8B6D !important',
  },
  checkColor: {
    color: '#DE8B6D',
    fontSize: 15
  },
})

export const ExportConfiguration = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
              <CardTitle className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="h5 text-dark font-weight-bold">FTP Export Configuration</span>
                </div>
                <Form>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="enale"
                      label="Enable"
                      className={classes.checkColor}
                    />
                  </div>
                </Form>
              </CardTitle>
            </CardBody>
            <ListGroupItem className={classes.demos}>
              <Media className="d-flex">
                <Media>
                  <div className={classes.media}>
                    <i className="fa fas fa-check text-primary"></i>
                  </div>
                </Media>
                <Media className="ml-4">
                  <span className="text-dark">
                    This is where you configure where you want to automatically export the shipping
                    run file. There are 2 tokens that can be used within the file name that will be
                    replaced when the file is created:
                  </span>
                </Media>
              </Media>
            </ListGroupItem>
            <Form className="text-dark font-weight-bold">
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>File Configuration</Label>
                </Col>
                <Col md="4">
                  <Input type="select" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Protocol</Label>
                </Col>
                <Col md="4">
                  <Input type="select" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Server Address</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Port</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Username</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Password</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col md={{size: 2, offset: 4}}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> Passive Mode
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{size: 2}}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> Enable SSL
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Server Address</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-2">
                <Col
                  md="4"
                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Label>Port</Label>
                </Col>
                <Col md="4">
                  <Input type="text" />
                </Col>
              </Row>
              <Row className="mx-1 my-4">
                <Col md={{size: 4, offset: 4}} className="d-flex justify-content-end">
                  <Button className={classes.buttonStyle}> Test FTP Configuration</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ExportConfiguration
