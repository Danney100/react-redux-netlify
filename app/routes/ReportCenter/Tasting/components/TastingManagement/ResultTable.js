import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const ResultTable = () => {

  const data = [
    {
      id: 1,
      TastingID: '',
      Name: '',
      TastingDate: '',
      Address: '',
      Orders: '',
      Status: '',
      Type: '',
    },
  ]

  const columns = [
    {
      dataField: 'TastingID',
      text: 'Tasting ID',
      sort: true,
    },
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'TastingDate',
      text: 'Tasting Date',
      sort: true,
    },
    {
      dataField: 'Address',
      text: 'Address',
      sort: true,
    },
    {
      dataField: 'Orders',
      text: 'Orders',
      sort: true,
    },
    {
      dataField: 'Status',
      text: 'Status',
      sort: true,
    },
    {
      dataField: 'Type',
      text: 'Type',
      sort: true,
    },
  ]

  return (
    <BootstrapTable
      keyField="id"
      columns={columns}
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      noDataIndication={'no results found'}
    />
  )
}

export default ResultTable
