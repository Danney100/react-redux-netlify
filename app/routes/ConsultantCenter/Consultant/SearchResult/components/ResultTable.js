import React from 'react'
import {Row, Button} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'

import options from 'routes/components/CommonPagination'
import {setConsultantToDisplay} from 'duck/actions/consultant'
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
      dataField: '_source.PersonDisplayID',
      text: 'Consultant Display ID',
      sort: true,
    },
    {
      dataField: '_source.username',
      text: 'UserName',
      sort: true,
    },
    {
      dataField: '_source.email',
      text: 'Email',
      sort: true,
    },
    {
      dataField: '_source.first_name',
      text: 'First Name',
      sort: true,
    },
    {
      dataField: '_source.JoinDate',
      text: 'JoinDate',
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
      dispatch(setConsultantToDisplay(row._source.id))
    },
  }

  return (
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
  )
}

ResultTable.propTypes = {
  searchResults: PropTypes.array,
}

export default ResultTable
