import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import options from 'routes/components/CommonPagination'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col} from 'reactstrap'

import data from './demoData'
import iconEdit from 'images/commonIcons/edit-circle.svg'
import iconCopy from 'images/commonIcons/copy-circle.svg'
import generate from 'images/commonIcons/generate.svg'
import eye from 'images/commonIcons/eye.svg'

const useStyles = makeStyles({
  editIcon: {
    height: 24,
    width: 24,
  },
  title: {
    fontFamily: 'SFUIText-Medium',
    fontSize: '14px',
    fontWeight: 500,
  },
})

const CouponTypes = () => {
  const classes = useStyles()

  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label}) => (
    <Col xs={12} lg={6} className={`mt-2 w-100 d-flex px-0`}>
      <img src={icon} className={classes.editIcon} />
      <div className={`${classes.title} ml-2`}>{label}</div>
    </Col>
  )

  const actionFormater = () => (
    <>
      <Row>
        <IconButton icon={iconEdit} label="Edit" />
        <IconButton icon={iconCopy} label="Copy" />
      </Row>
      <Row>
        <IconButton icon={generate} label="Generate" />
        <IconButton icon={eye} label="See Coupons" />
      </Row>
    </>
  )

  const columns = [
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'personType',
      text: 'Person Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'countries',
      text: 'Countries',
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
      noDataIndication={'no results found'}
      pagination={paginationFactory(options)}
    />
  )
}

export default CouponTypes
