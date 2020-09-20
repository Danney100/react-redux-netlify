import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import MoonLoader from 'react-spinners/MoonLoader'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

const ModelTable = ({tableData}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    if (tableData) {
      let transactions = []
      for (const [index, row] of tableData.entries()) {
        transactions[index] = {
          id: index,
          transaction_date: new Date(row.created_at).toLocaleDateString('en-US'),
          type: (row.type === 'customer.rewarded.loyalty_points' && 'Rewarded points') || (row.type === 'customer.voucher.loyalty_card.points_added' && 'Voucher points added') || (''),
          amount: row.data.balance.total,
          balance: row.data.balance.balance,
          details: 'Fast Start Bonus Credits',
        }
      }
      setData(transactions)
      setIsLoading(false)
    }
  }, [tableData])

  const noDataIndication = () => 
    isLoading ? (
      <div className="d-flex justify-content-center">
        <MoonLoader size={24} color={'#de8b6d'} loading={isLoading} />
      </div>
    ) : (
      <p className="text-center">No data found!</p>
    )

  const columns = [
    {
      dataField: 'id',
      hidden: true,
    },
    {
      dataField: 'transaction_date',
      text: 'Transaction Date',
    },
    {
      dataField: 'type',
      text: 'Type',
    },
    {
      dataField: 'amount',
      text: 'Amount',
    },
    {
      dataField: 'balance',
      text: 'Balance',
    },
    {
      dataField: 'details',
      text: 'Details',
    },
  ]

  return (
    <>
      <ToolkitProvider keyField="id" data={data} columns={columns} search>
        {(props) => (
          <React.Fragment>
            <div className="sc-table-responsive">
              <BootstrapTable
                keyField="id"
                classes="sc-table"
                bordered={false}
                noDataIndication={noDataIndication}
                striped
                hover
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          </React.Fragment>
        )}
      </ToolkitProvider>
    </>
  )
}

ModelTable.propTypes = {
  tableData: PropTypes.array,
}

export default ModelTable
