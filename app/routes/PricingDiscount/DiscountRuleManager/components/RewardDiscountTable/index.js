import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {makeStyles} from '@material-ui/core/styles'

import options from 'routes/components/CommonPagination'
import iconEdit from 'images/commonIcons/edit.svg'
import iconCopy from 'images/commonIcons/copy.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const useStyles = makeStyles({
  editIcon: {
    height: 13,
    width: 13,
    marginLeft: 6,
  },
  bkgrdImgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const RewardDiscountTable = () => {
  const classes = useStyles()

  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }
  const IconButton = ({icon, label}) => (
    <>
      <div className={`${classes.bkgrdImgSize} ml-4`}>
        <img src={icon} className={classes.editIcon} />
      </div>
      <div className="ml-2">{label}</div>
    </>
  )

  const actionFormater = () => (
    <div className="d-flex justify-content-end">
      <IconButton icon={iconEdit} label="Edit" />
      <IconButton icon={iconCopy} label="Copy" />
      <IconButton icon={iconDelete} label="Delete" />
    </div>
  )

  const data = [
    {
      id: 1,
      name: '$100 Gift Card',
      description: '$100 Gift Card',
      price_adjustment: 'MarkDown 100.00',
    },
    {
      id: 2,
      name: '$100 Gift Card',
      description: '$100 Gift Card',
      price_adjustment: 'MarkDown 100.00',
    },
    {
      id: 3,
      name: '$100 Gift Card',
      description: '$100 Gift Card',
      price_adjustment: 'MarkDown 100.00',
    },
    {
      id: 4,
      name: '$100 Gift Card',
      description: '$100 Gift Card',
      price_adjustment: 'MarkDown 100.00',
    },
    {
      id: 5,
      name: '$100 Gift Card',
      description: '$100 Gift Card',
      price_adjustment: 'MarkDown 100.00',
    },
  ]
  
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'description',
      text: 'Description',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'price_adjustment',
      text: 'Price Adjustment',
      sort: true,
      sortCaret: sortCaret,
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

export default RewardDiscountTable
