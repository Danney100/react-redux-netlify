import React, {useState} from 'react'
import {Card, CardHeader, CardBody, Row, Col, Button} from 'components'
import {useHistory} from 'react-router-dom'
import Threshold from './Threshold'

function TriggerOptionThresholds() {
  const [thresholdCount, setThresholdCount] = useState(1)
  const history = useHistory()

  const addThreshold = () => {
    setThresholdCount((prevState) => prevState + 1)
  }

  const removeThreshold = () => {
    if (thresholdCount > 0) {
      setThresholdCount((prevState) => prevState - 1)
    }
  }

  const routeChange = () => {
    history.push('/rewards/trigger-option-manager')
  }

  const renderThresholds = () => {
    let thresholdList = []

    for (let i = 0; i < thresholdCount; i++) {
      thresholdList.push(
        <Threshold addThreshold={addThreshold} removeThreshold={removeThreshold} key={i} />,
      )
    }

    return thresholdList
  }

  return (
    <Row className="mt-3">
      <Col md={12} sm={12} xs={12} className="mb-3">
        <Card>
          <CardHeader className="bg-primary text-white" tag="h5">
            Trigger Option Thresholds
          </CardHeader>
          <CardBody>
            <Card>
              <Row className="border text-black m-0 p-2 rounded">
                <Col lg={1} sm={1} xs={2} className="text-center">
                  <span className="fa-stack fa-lg">
                    <i className="fa fas fa-question-circle fa-2x text-warning"></i>
                  </span>
                </Col>
                <Col sm={11} lg={11} xs={10}>
                  <span>
                    Configure the threshold triggers and results associated with this trigger
                    option. You can optionally add a subscription by selecting the
                    &quot;Subscriptions&quot; button next to any result.
                  </span>
                </Col>
              </Row>
            </Card>
            {thresholdCount === 0 && (
              <Row className="m-0 mt-3">
                <Button>Add Threshold</Button>
              </Row>
            )}
            {renderThresholds()}
          </CardBody>
        </Card>
      </Col>
      <Col xs={6} lg={6}>
        <Button color="danger" onClick={routeChange}>
          <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
        </Button>
      </Col>
      <Col xs={6} lg={6} className="text-right">
        <Button color="success" onClick={routeChange}>
          <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
        </Button>
      </Col>
    </Row>
  )
}

export default TriggerOptionThresholds
