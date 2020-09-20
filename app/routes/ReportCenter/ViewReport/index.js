import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

import {columns} from './tableConfig'
import {Card, Row, Col, CardBody} from 'reactstrap'

import ButtonGroup from './components/ButtonGroup'
import FilterRow from './components/FilterRow'
import FilterOptions from './components/FilterOptions'
import ReportTable from './components/ReportTable'

const ViewReport = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => setIsOpen(!isOpen)

  let params = useParams()
  const {report} = params

  const getColumns = () => {
    return columns[report].columns.map((field, index) => {
      return {id: index, dataField: field, sort: true, text: field}
    })
  }

  let _filters = columns[report].filters

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="bg-white rounded p-3">
          <CardBody className="py-2 bg-white text-black rounded">
            <ButtonGroup />
            <FilterRow toggleOpen={toggleOpen} isOpen={isOpen} />
            <FilterOptions isOpen={isOpen} filters={_filters} />
            <ReportTable columns={getColumns()} title={report} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewReport
