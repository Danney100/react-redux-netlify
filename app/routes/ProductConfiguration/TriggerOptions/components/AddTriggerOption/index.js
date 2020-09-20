import React from 'react'
import TriggerOption from './TriggerOption'
import TriggerOptionAvailability from './TriggerOptionAvailability'
import TriggerOptionThresholds from './TriggerOptionThresholds'
import {Card, Row, Col} from 'components'

const AddTriggerOption = () => {
  return (
    <div className="container-fluid p-0 mt-2">
      <Card className="my-3">
        <Row className="border text-black m-0 p-2 rounded">
          <Col lg={1} sm={1} xs={2} className="text-center">
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
          </Col>
          <Col sm={11} lg={11} xs={10}>
            <span>
              Trigger options can be leveraged for unique shopping scenarios that result in one or
              more post-shopping cart actions. For example, creating a preferred customer experience
              that changes a customer status and creates a subscription when they purchase a
              specific product.
            </span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
      </Card>
      <TriggerOption />
      <TriggerOptionAvailability />
      <TriggerOptionThresholds />
    </div>
  )
}

export default AddTriggerOption
