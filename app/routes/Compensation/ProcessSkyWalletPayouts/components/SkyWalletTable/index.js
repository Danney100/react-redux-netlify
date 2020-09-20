import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Card, CardBody} from 'reactstrap'

import options from 'routes/components/CommonPagination'

const SkyWalletTable = () => {
  const data = []
  const columns = [
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sort: true,
    },
    {
      dataField: 'Method',
      text: 'Method',
      sort: true,
    },
    {
      dataField: 'Last Run Date',
      text: 'Last Run Date',
      sort: true,
    },
    {
      dataField: 'Run ID',
      text: 'Run ID',
      sort: true,
    },
    {
      dataField: 'Note',
      text: 'Note',
      sort: true,
    },
  ]
  return (
    <Card className="my-3">
      <CardBody>
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

export default SkyWalletTable
