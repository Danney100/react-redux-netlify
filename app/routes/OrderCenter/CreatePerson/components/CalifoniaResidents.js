import React from 'react'
import {Row, Col, Card, CardHeader, CardBody} from 'components'

const CalifoniaResidents = () => (
  <Card className="mb-3">
    <CardHeader tag="h6" className="my-0 font-italic rounded-top bg-primary text-white">
      Califonia Residents
    </CardHeader>
    <CardBody>
      <Row>
        <Col>
          <span className="pr-1 mb-3">
            <span>
              <strong>WARNING:</strong>
            </span>
            Drinking distilled spirits, beer, coolers, wine and other alcoholic beverages may
            increase cancer risk, and, during pregnancy, can cause birth defects. For more
            information go to www.P65Warnings.ca.gov/alcohol.
          </span>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default CalifoniaResidents
