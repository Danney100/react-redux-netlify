import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import PropTypes from 'prop-types'
import {Checkbox} from '@material-ui/core'

import iconEdit from 'images/commonIcons/pencil.svg'
import iconDelete from 'images/commonIcons/trash.svg'
import iconSort from 'images/commonIcons/sort.svg'
import IconMenu from 'images/commonIcons/menu1.svg'

const JoinOptionTable = ({data, editRow, deleteRow}) => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label, className, iconFunc}) => (
    <div className={`${className} d-flex flex-row`}>
      <div onClick={iconFunc} className="pointer">
        <img src={icon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )
  const actionFormater = (cell, row) => (
    <>
      <IconButton icon={iconDelete} label="Delete" iconFunc={() => deleteRow(row)} />
      <IconButton icon={iconEdit} label="Edit" className="my-2" iconFunc={() => editRow(row)} />
      <IconButton icon={iconSort} label="Sort" />
    </>
  )
  const DragFormatter = () => (
    <div>
      <img src={IconMenu} height="25" width="30" />
    </div>
  )
  const EnabledFormatter = () => (
    <div>
      <Checkbox />
    </div>
  )

  const columns = [
    {
      dataField: 'Dummy',
      isDummyField: true,
      text: '',
      formatter: DragFormatter,
      style: {
        padding: '0px',
        textAlign: 'right',
      },
    },
    {
      dataField: 'is_enabled',
      isDummyField: true,
      text: 'Enabled',
      formatter: EnabledFormatter,
      style: {
        padding: '0px',
      },
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'description',
      text: 'Description',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'starting_type',
      text: 'Consultant Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'starting_rank',
      text: 'Consultant Rank Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'starting_status',
      text: 'Consultant Status',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'replicated_site_active',
      text: 'Personal Website',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'portal_access',
      text: 'Portal Acess',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'hide_payment_options',
      text: 'Has Subscriptions',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      columns={columns}
    />
  )
}

JoinOptionTable.propTypes = {
  data: PropTypes.array,
  editRow: PropTypes.func,
  deleteRow: PropTypes.func,
}
export default JoinOptionTable
