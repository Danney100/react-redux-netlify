import React from 'react'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable from 'react-bootstrap-table-next'
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'
import {data} from '../demoData'

const ReportTable = ({columns, title}) => {
  const getTitle = () => {
    return title.split('-').join(' ')
  }

  return (
    <Row className="mt-3">
      <Col lg={12} sm={12} xs={12} md={12} className="font-weight-bold text-capitalize mb-2 pl-0">
        {`${getTitle()} Report`}
      </Col>
      <Col lg={12} className="p-0">
        <BootstrapTable
          keyField="Id"
          data={data}
          columns={columns}
          pagination={paginationFactory()}
          classes="table-responsive text-black"
        />
      </Col>
    </Row>
  )
}

ReportTable.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
}

export default ReportTable
