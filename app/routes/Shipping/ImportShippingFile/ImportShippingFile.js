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

const ImportShippingFile = () => {
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Shipping > Import Shipping File')
  }, [])

  return (
    <div>
      <div className="my-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1>Import Shipping File</h1>
        <div className="col-example text-left">
          <Button
            style={{width: 200}}
            onClick={() => routeChange('/shipping/import-shipping-file/import-configuration-edit')}
            color="info"
            size="lg">
            New Config
          </Button>
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
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
                      Import your vendor's shipping file to append tracking numbers to their
                      associated orders in Flight, allowing you to track and close shipments. Select
                      the configuration name and upload the shipping file by clicking ‘Select file’.
                      Check ‘Close shipments’ to update orders status to shipped (all line items on
                      the order must be shipped).
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
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex text-secondary justify-content-end">
                        Field Delimiter
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="select"></Input>
                      </Col>
                      <Col
                        sm={3}
                        className="text-lg-right text-right mb-2 d-flex justify-content-start ">
                        <Button style={{width: 170}} color="info">
                          Edit Config
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex text-secondary justify-content-end">
                        Configuration Name
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="text"></Input>
                      </Col>
                      <Col
                        sm={3}
                        className="text-lg-right text-right mb-2 d-flex justify-content-start ">
                        <Button style={{width: 170}} color="info">
                          Select File
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={{size: '5', offset: '4'}} style={{left: '30px'}}>
                        <Input className="text-warning" type="checkbox" name="select" />
                        <span className="text-warning mr-5">Close Shipment</span>
                        <Input className="text-warning" type="checkbox" name="select" />
                        <span className="text-warning">File Has Header Row</span>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex text-secondary justify-content-end">
                        Shippment ID Column Index
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="text" value="2"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex  text-secondary  justify-content-end">
                        Tracking Number Column Index
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="text" value="3"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex text-secondary justify-content-end">
                        File Delimiter
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="text" value="Comma"></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mx-3">
                      <Label
                        for="input"
                        sm={4}
                        className="d-flex text-secondary justify-content-end">
                        Tracking File Delimiter
                      </Label>
                      <Col
                        sm={5}
                        className="mb-2 text-lg-right text-right mb-1 d-flex justify-content-end">
                        <Input type="text" value="Comma"></Input>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
            <Col className="d-flex justify-content-end">
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

export default ImportShippingFile
