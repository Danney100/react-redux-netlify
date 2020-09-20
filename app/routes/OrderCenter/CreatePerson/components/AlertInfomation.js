import React from 'react'
import {Card, CardBody, CardTitle} from 'components'

const AlertInfomation = () => (
  <Card type="border" className="mb-3 mt-3 rounded">
    <CardBody className="p-3">
      <CardTitle tag="h6" className="mb-1 font-italic">
        Your Mentor is:
      </CardTitle>
      <CardBody className="border p-3 text-dark mb-3">Items marked with * are required</CardBody>
    </CardBody>
  </Card>
)

export default AlertInfomation
