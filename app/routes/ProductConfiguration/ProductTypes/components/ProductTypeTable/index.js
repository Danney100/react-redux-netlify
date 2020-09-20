import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import PropTypes from 'prop-types'

import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'

const ProductTypeTable = ({data, editRow, deleteRow}) => {
  const actionFormater = (cell, row) => (
    <div className={` d-flex flex-row`}>
      <div className="pointer" onClick={() => editRow(row)}>
        <img src={iconEdit} />
      </div>
      <div className="w-100 ml-2">Edit</div>
      <div className="ml-2 pointer" onClick={() => deleteRow(row)}>
        <img src={iconTrash} />
      </div>
      <div className="w-100 ml-2">Delete</div>
    </div>
  )

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
    />
  )
}
ProductTypeTable.propTypes = {
  data: PropTypes.array,
  editRow: PropTypes.func,
  deleteRow: PropTypes.func,
}

export default ProductTypeTable
