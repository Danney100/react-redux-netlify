import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Card, CardHeader, CardBody, Button, Input} from 'reactstrap'

const BuildableComponentsTable = () => {
  return (
    <div className="mt-3">
      <Card className="mb-3 ">
        <CardHeader tag="h6" className="bg-primary">
          <Row>
            <Col tag="h6" className="font-italic text-white mt-2 d-flex justify-content-start">
              Currency
            </Col>
            <Col className="d-flex justify-content-end">
              <Button className="mr-2 bg-info border-info">
                <i className="fa fa-fw fa-files-o" aria-hidden="true"></i>Copy
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <CardHeader tag="h6" className="bg-primary">
            <Row>
              <Col tag="h6" className="font-italic text-white mt-2 d-flex justify-content-start">
                New Component
              </Col>
              <Col className="d-flex justify-content-end">
                <Button>DisplaySetting</Button>
              </Col>
            </Row>
          </CardHeader>
          <Row className="mt-3">
            <Col sm={6} md={2}>
              <Input type="select">
                <option defaultValue="">SKU</option>
              </Input>
            </Col>
            <Col sm={6} md={2}>
              <Input type="select">
                <option defaultValue="">Item SKU</option>
              </Input>
            </Col>
            <Col sm={6} md={2}>
              <Input type="number" placeholder="0"></Input>
            </Col>
            <Col sm={1} md={2}>
              <Button className="mr-2 bg-info border-info">Adjustments</Button>
              <Button className="ml-1 Secondary">
                <i className="fa fas fa-plus text-white"></i>
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Row>
        <Col>
          <Button color="danger">
            <i className="fa fa-times-circle mr-2"></i>
            Cancel
          </Button>
        </Col>
        <Col className="pagination justify-content-end">
          <Button color="primary">
            <i className="fa fa-check-circle mr-2"></i>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}

BuildableComponentsTable.propTypes = {
  demotrigger: PropTypes.string,
  DemoData: PropTypes.string,
}

export default BuildableComponentsTable
