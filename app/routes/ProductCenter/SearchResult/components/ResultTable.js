import React from 'react'
import {Row, Button} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'

import options from 'routes/components/CommonPagination'
import {setProductToDisplay} from 'duck/actions/products'
import iconGroup from 'images/commonIcons/group.svg'

export const ResultTable = ({searchResults}) => {
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
      dataField: '_source.sku',
      text: 'SKU',
      sort: true,
    },
    {
      dataField: '_source.name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: '_source.virtual_product',
      text: 'Virtual Product',
      sort: true,
    },
    {
      dataField: '_source.status',
      text: 'Status',
      sort: true,
    },
    {
      dataField: '_source.commodity_type',
      text: 'Type',
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
      dispatch(setProductToDisplay(row._source.id))
    },
  }

  return (
    <Row className="m-0">
      <BootstrapTable
        keyField="_id"
        columns={columns}
        data={searchResults}
        bordered={false}
        striped
        wrapperClasses="table-responsive"
        noDataIndication={'no results found'}
        selectRow={selectRow}
        pagination={paginationFactory(options)}
      />
    </Row>
  )
}

ResultTable.propTypes = {
  searchResults: PropTypes.array,
}

export default ResultTable
