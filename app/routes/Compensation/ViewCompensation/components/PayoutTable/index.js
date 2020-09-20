import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Card, CardBody, Col, Row} from 'reactstrap'

import CommonButton from 'routes/components/CommonButton'
import options from 'routes/components/CommonPagination'

const PayoutTable = () => {
  const data = [
    {Payout: 'Uni-Level Bonus', 'Total Paid': '27.67', Currency: 'USD'},
    {Payout: 'Total Paid', 'Total Paid': '699.44', Currency: 'USD'},
    {Payout: 'Personal Sales Commission', 'Total Paid': '1,520.23', Currency: 'USD'},
    {Payout: 'Net Pay', 'Total Paid': '671.77', Currency: 'USD'},
    {Payout: 'Gross Pay', 'Total Paid': '699.44', Currency: 'USD'},
    {Payout: 'Carry Over to Next Statement', 'Total Paid': '699.44', Currency: 'USD'},
    {Payout: 'Balance From Previous Statement', 'Total Paid': '820.79', Currency: 'USD'},
    {Payout: 'Adjustments', 'Total Paid': '0.00', Currency: 'USD'},
  ]

  const columns = [
    {
      dataField: 'Payout',
      text: 'Payout',
      sort: true,
    },
    {
      dataField: 'Total Paid',
      text: 'Total Paid',
      sort: true,
    },
    {
      dataField: 'Currency',
      text: 'Currency',
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
          keyField="Payout"
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

export default PayoutTable
