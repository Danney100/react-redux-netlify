import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Card, CardBody, Row, Col} from 'reactstrap'

import CommonButton from 'routes/components/CommonButton'
import options from 'routes/components/CommonPagination'
import {data} from './demoData'

const InfoTable = () => {
  const columns = [
    {
      dataField: 'Person',
      text: 'Person',
      sort: true,
    },
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'Pay Rank',
      text: 'Pay Rank',
      sort: true,
    },
    {
      dataField: 'Gross',
      text: 'Gross',
      sort: true,
    },
    {
      dataField: '-CR',
      text: '-CR',
      sort: true,
    },
    {
      dataField: '-CP',
      text: '-CP',
      sort: true,
    },
    {
      dataField: '+ Adj',
      text: '+ Adj',
      sort: true,
    },
    {
      dataField: '+ C/O',
      text: '+ C/O',
      sort: true,
    },
    {
      dataField: 'Net',
      text: 'Net',
      sort: true,
    },
    {
      dataField: '- C/O',
      text: '- C/O',
      sort: true,
    },
    {
      dataField: '- Fee',
      text: '- Fee',
      sort: true,
    },
    {
      dataField: '- Ded',
      text: '- Ded',
      sort: true,
    },
    {
      dataField: 'Paid(M)',
      text: 'Paid(M)',
      sort: true,
    },
  ]
  return (
    <Card className="my-3">
      <CardBody className="p-0">
        <Row className="pt-3 pr-3">
          <Col className="d-flex justify-content-end">
            <CommonButton title="Export to Excel" buttonType="exportItmButton" />
          </Col>
        </Row>
        <hr />
        <BootstrapTable
          keyField="Person"
          columns={columns}
          data={data}
          bordered={false}
          striped
          wrapperClasses="table-responsive"
          noDataIndication={'no results found'}
          pagination={paginationFactory(options)}
        />
      </CardBody>
    </Card>
  )
}

export default InfoTable
