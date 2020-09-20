import React, {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import PropTypes from 'prop-types'
import moment from 'moment'

import CompensationModel from '../CompensationModel'
import iconReverse from 'images/commonIcons/reverse.svg'
import iconRight from 'images/commonIcons/right.svg'
import iconDetails from 'images/commonIcons/details.svg'
import options from 'routes/components/CommonPagination'

const CompensationTable = ({tableData}) => {
  const [rowData, setRowData] = useState({})
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const processFormater = (cell) => (
    <div className="d-flex flex-column">
      <div>Month</div>
      <div>{cell.replace('Month ', '')}</div>
    </div>
  )

  const statusFormater = (cell) =>
    cell.split(' ').map((data, index) => (
      <div className="d-flex" key={index}>
        {data}
      </div>
    ))

  const IconButton = ({icon, label, className}) => (
    <div className={`${className} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )

  const actionFormater = () => (
    <>
      <IconButton icon={iconDetails} label="Details and Join" />
      <IconButton icon={iconReverse} label="Reverse" className="my-2" />
      <IconButton icon={iconRight} label="Commit" />
    </>
  )

  const columns = [
    {
      dataField: 'CompProcessRunID',
      text: 'Run #',
      sort: true,
    },
    {
      dataField: 'DisplayName',
      text: 'Process',
      sort: true,
      formatter: processFormater,
    },
    {
      dataField: 'ProcessDate',
      text: 'Process Date',
      sort: true,
      formatter: (cell) => cell.GetDate(),
    },
    {
      dataField: 'Status',
      text: 'Status',
      sort: true,
      formatter: statusFormater,
    },
    {
      dataField: 'CommitDate',
      text: 'Commit Date',
      sort: true,
      formatter: (cell) => cell.GetDate(),
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const selectRow = {
    mode: 'radio',
    selected: [0],
    bgColor: '#1eb7ff',
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: (row) => {
      setModal(!modal)
      setRowData(row)
    },
  }

  const setModalValue = (value) => {
    if (value != null) {
      value = value.toString()
      if (value.slice(0, 1) === '/') {
        value = value.GetDate()
      }
      return <div className="w-50 text-right modal-value">{value}</div>
    }
    return <div className="w-50 text-right modal-value">-</div>
  }

  return (
    <div>
      <BootstrapTable
        keyField="CompProcessRunID"
        columns={columns}
        data={tableData}
        bordered={false}
        striped
        wrapperClasses="table-responsive"
        noDataIndication={'no results found'}
        selectRow={selectRow}
        pagination={paginationFactory(options)}
      />
      <CompensationModel modal={modal} toggle={toggle}>
        {Object.entries(rowData).map(([key, value]) => (
          <div className="d-flex flex-row my-1" key={key}>
            <div className="w-50 modal-key">{key}</div>
            {setModalValue(value)}
          </div>
        ))}
      </CompensationModel>
    </div>
  )
}

CompensationTable.propTypes = {
  tableData: PropTypes.array,
}

String.prototype.GetDate = function () {
  return moment(Date(/\(([^)]+)\)/.exec(this)[1])).format('L')
}

export default CompensationTable
