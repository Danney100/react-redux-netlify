import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  Label,
  Input,
  Form,
  Media,
  Alert,
} from 'components'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'

const AddNewShippingFile = () => {
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle(
      'Shipping > Shipping File Center > Shipping File Configuration > Add New Shipping File Import Configuration',
    )
  }, [])

  return (
    <div>
      <div className="my-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1>Add/Edit Shipping File Import Configuration</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="p-3">
              <Alert color="primary" className="mt-3">
                <Media>
                  <Media left middle className="mr-3">
                    <span className="fa-stack fa-lg">
                      <i
                        className="fa fa-circle fa-stack-2x text-primary-03"
                        aria-hidden="true"></i>
                      <i
                        className="fa fa-fw fa-check fa-stack-1x fa-inverse alert-icon"
                        aria-hidden="true"></i>
                    </span>
                  </Media>
                  <Media body>
                    <h6 className="alert-heading mb-1">
                      Use the shipping import file settings to configure different templates used
                      when importing order shipping information. You can configure as many templates
                      as needed, saving each with a unique name. The most important information to
                      identify in each import file template is the Shipment ID and Tracking Number
                      columns. These are used to associate the tracking information to the order,
                      using the Shipment ID. Note that the Shipment ID is different than the Order
                      ID.
                    </h6>
                    <a className="text-secondary" href="#">
                      Features Guide Link
                      <i className="fa fa-fw fa-long-arrow-right ml-1" aria-hidden="true"></i>
                    </a>
                  </Media>
                </Media>
              </Alert>
              <Row className="m-0 mt-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                <Col sm={12} className="p-0"></Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <Form>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        Configuration Name
                      </Label>
                      <Col sm={5}>
                        <Input type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        Description
                      </Label>
                      <Col sm={5}>
                        <Input type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        Import Type
                      </Label>
                      <Col sm={5}>
                        <Input type="select"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        File Type
                      </Label>
                      <Col sm={5}>
                        <Input type="select"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="md-form">
                      <Label for="numberExample" sm={4} className="d-flex justify-content-end">
                        Shipment ID Column
                      </Label>
                      <Col sm={5}>
                        <Input type="number"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="md-form">
                      <Label for="numberExample" sm={4} className="d-flex justify-content-end">
                        Tracking Number Column
                      </Label>
                      <Col sm={5}>
                        <Input type="number"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        Field Delimiter
                      </Label>
                      <Col sm={5}>
                        <Input type="select"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="input" sm={4} className="d-flex justify-content-end">
                        Tracking Number Delimiter
                      </Label>
                      <Col sm={5}>
                        <Input type="select"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={{size: '5', offset: '4'}} style={{left: '20px'}}>
                        <Input className="text-warning" type="checkbox" name="select" />
                        <span className="text-warning">Default Close Shipment</span>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Row className="d-flex justify-content-end">
            <Col className="text-lg-right text-right">
              <Button
                onClick={() =>
                  routeChange('/shipping/shipping-file-center/import-configration-manage')
                }
                className="mr-3"
                style={{width: 170}}
                color="secondary">
                Cancel
              </Button>
              <Button
                onClick={() =>
                  routeChange('/shipping/shipping-file-center/import-configration-manage')
                }
                style={{width: 170}}
                color="info">
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default AddNewShippingFile
