import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import options from 'routes/components/CommonPagination'

const SimulatedPricesTable = () => {
    const sortCaret = (order) => {
        if (!order) return <span>&nbsp;&nbsp;</span>
        else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
        else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
        return null
    }
    const columns = [
        {
          dataField: 'price_rule',
          text: 'Price Rule',
          sort: true,
          sortCaret: sortCaret,
        },
        {
          dataField: 'price',
          text: 'Price',
          sortCaret: sortCaret,
          sort: true,
        },
        {
          dataField: 'qualifying_volume',
          text: 'Qualifying Volume',
          sortCaret: sortCaret,
          sort: true,
        },
        {
          dataField: 'commissionable_volume',
          text: 'Commissionable Volume',
          sortCaret: sortCaret,
          sort: true,
        },
        {
          dataField: 'retail_commissionable_volume',
          text: 'Retail Commissionable Volume',
          sortCaret: sortCaret,
          sort: true,
        }
    ]
    const data=[
        {id:1,price_rule:'Best Price', price:'29.00', qualifying_volume:'29.00', commissionable_volume:'20.30', retail_commissionable_volume:'29.00' },
        {id:2,price_rule:'Best Price', price:'29.00', qualifying_volume:'29.00', commissionable_volume:'20.30', retail_commissionable_volume:'29.00' },
        {id:3,price_rule:'Best Price', price:'29.00', qualifying_volume:'29.00', commissionable_volume:'20.30', retail_commissionable_volume:'29.00' },
        {id:4,price_rule:'Best Price', price:'29.00', qualifying_volume:'29.00', commissionable_volume:'20.30', retail_commissionable_volume:'29.00' },
        {id:5,price_rule:'Best Price', price:'29.00', qualifying_volume:'29.00', commissionable_volume:'20.30', retail_commissionable_volume:'29.00' },
    ]
    return (
        <BootstrapTable
            keyField="id"
            data={data} 
            bordered={false}
            striped
            wrapperClasses="table-responsive"
            columns={columns}
            noDataIndication={'no results found'}
            pagination={paginationFactory(options)}
        />
    )
}

export default SimulatedPricesTable
