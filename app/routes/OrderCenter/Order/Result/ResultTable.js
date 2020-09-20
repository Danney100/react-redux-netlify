import React from 'react'
import {Row, Button} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {setCustomerToDisplay} from 'duck/actions/customer'
import iconGroup from 'images/commonIcons/group.svg'

const ResultTable = ({data}) => {
  const dispatch = useDispatch()

  const actionFormater = () => {
    return (
      <Button className="sc-btn-action px-1" color="link">
        <span className="sc-btn-action__icon rounded-circle">
          <img className="sc-btn-action__img" src={iconGroup} />
        </span>
      </Button>
    )
  }

  const columns = [
    {
      dataField: '_source.meta.timestamps.display_id',
      text: 'Display ID',
      sort: true,
    },
    {
      dataField: '_source.meta.timestamps.created_at',
      text: 'Order Date',
      sort: true,
    },
    {
      dataField: '_source.relationships.customer.data.type',
      text: 'Entity Type',
      sort: true,
    },
    {
      dataField: '_source.relationships.customer.data.id',
      text: 'Entity ID',
      sort: true,
    },
    {
      dataField: '_source.status',
      text: 'Order Status',
      sort: true,
    },
    {
      dataField: '_source.customer.email',
      text: 'Order Owner',
      sort: true,
    },
    {
      dataField: '_source.note',
      text: 'Note',
      sort: true,
    },
    {
      dataField: '_source.rma',
      text: 'RMA',
      sort: true,
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
      dispatch(setCustomerToDisplay(row._source.id))
    },
  }

  return (
    <Row className="ml-3 mr-2">
      <BootstrapTable
        classes="table-responsive-sm"
        bordered={false}
        striped
        keyField="_source.id"
        columns={columns}
        data={data}
        wrapperClasses="table-responsive"
        noDataIndication={'no results found'}
        selectRow={selectRow}
      />
    </Row>
  )
}

ResultTable.propTypes = {
  data: PropTypes.array,
}

export default ResultTable
