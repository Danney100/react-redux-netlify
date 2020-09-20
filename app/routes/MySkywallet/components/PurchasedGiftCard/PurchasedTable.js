import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const PurchasedTable = () => {
  const data = [
    {
      id: 1,
      Generated: '',
      Code: '',
      Value: '',
      CurrencyType: '',
      Redeemed: '',
      RedeemedBy: '',
    },
  ]

  const columns = [
    {
      dataField: 'Generated',
      text: 'Generated',
      sort: true,
    },
    {
      dataField: 'Code',
      text: 'Code',
      sort: true,
    },
    {
      dataField: 'Value',
      text: 'Value',
      sort: true,
    },
    {
      dataField: 'CurrencyType',
      text: 'Currency Type',
      sort: true,
    },
    {
      dataField: 'Redeemed',
      text: 'Redeemed',
      sort: true,
    },
    {
      dataField: 'RedeemedBy',
      text: 'Redeemed By',
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

export default PurchasedTable
