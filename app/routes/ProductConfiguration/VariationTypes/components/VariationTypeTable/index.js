import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconEdit from 'images/commonIcons/pencil.svg'
import PropTypes from 'prop-types'
import paginationFactory from 'react-bootstrap-table2-paginator'
import options from 'routes/components/CommonPagination'

const VariationTypeTable = ({data, editRow}) => {
  const actionFormater = (cell, row) => {
    return (
      <div className="d-flex flex-row pointer">
        <div onClick={() => editRow(row)}>
          <img src={iconEdit} />{' '}
        </div>
        <div className="w-100 ml-2">Edit</div>
      </div>
    )
  }

  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Description',
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
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
      pagination={paginationFactory(options)}
    />
  )
}

VariationTypeTable.propTypes = {
  toggle: PropTypes.func,
  data: PropTypes.array,
  editRow: PropTypes.func,
}

export default VariationTypeTable
