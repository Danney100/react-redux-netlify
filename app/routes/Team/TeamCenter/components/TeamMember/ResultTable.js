import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const ResultTable = () => {
  const data = [
    {
      id: 1,
      Date: '',
      Subject: '',
      Type: '',
      CreatedBy: '',
      Note: '',
    },
  ]

  const columns = [
    {
      dataField: 'Date',
      text: 'Date',
      sort: true,
    },
    {
      dataField: 'Subject',
      text: 'Subject',
      sort: true,
    },
    {
      dataField: 'Type',
      text: 'Type',
      sort: true,
    },
    {
      dataField: 'CreatedBy',
      text: 'Created By',
      sort: true,
    },
    {
      dataField: 'Note',
      text: 'Note',
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
