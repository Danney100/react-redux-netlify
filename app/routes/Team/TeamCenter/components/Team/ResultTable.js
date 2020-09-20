import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const ResultTable = () => {

  const data = [
    {
      id: 1,
      Level: '0',
      DisplayID: '17358',
      FirstName: 'Eddie',
      LastName: 'Test123',
      JoinDate: '3/12/2020',
      Status: 'Active',
      Rank: 'Consultant',
      PayRank: 'Consultant',
      PS: '0.00',
      DS: '0.00',
    },
  ]

  const columns = [
    {
      dataField: 'Level',
      text: 'Level',
      sort: true,
    },
    {
      dataField: 'DisplayID',
      text: 'Display ID',
      sort: true,
    },
    {
      dataField: 'FirstName',
      text: 'First Name',
      sort: true,
    },
    {
      dataField: 'LastName',
      text: 'Last Name',
      sort: true,
    },
    {
      dataField: 'JoinDate',
      text: 'Join Date',
      sort: true,
    },
    {
      dataField: 'Status',
      text: 'Status',
      sort: true,
    },
    {
      dataField: 'Rank',
      text: 'Rank',
      sort: true,
    },
    {
      dataField: 'PayRank',
      text: 'Pay Rank',
      sort: true,
    },
    {
      dataField: 'PS',
      text: 'PS',
      sort: true,
    },
    {
      dataField: 'DS',
      text: 'DS',
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
