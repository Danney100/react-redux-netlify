import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import options from 'routes/components/CommonPagination'
import {makeStyles} from '@material-ui/core/styles'
import iconExpire from 'images/commonIcons/expire.svg'

const useStyles = makeStyles({
  editIcon: {
    height: 13,
    width: 13,
    marginLeft: 5,
  },
  bkgrdImgSize: {
    width: 35,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const GiftCardTable = () => {
  const classes = useStyles()
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label, className}) => (
    <div className={`${className} mt-2 d-flex flex-row`}>
      <div className={classes.bkgrdImgSize}>
        <img src={icon} className={classes.editIcon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )

  const actionFormater = () => {
    return <IconButton icon={iconExpire} label="Expire" />
  }

  const columns = [
    {
      dataField: 'generated',
      text: 'Generated',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'code',
      text: 'Code',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'originating',
      text: 'Originating order ID',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'value',
      text: 'Value',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'currencyType',
      text: 'Currency Type',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'purchasedBy',
      text: 'Purchased By',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'redeemed',
      text: 'Redeemed',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'redeemedBy',
      text: 'Redeemed By',
      sort: true,
      sortCaret: sortCaret,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {
      id: 1,
      generated: '6/22/2020 9:54PM',
      code: 'HT74-FV46',
      originating: '1044327',
      value: '$25.00',
      currencyType: 'USD',
      purchasedBy: 'Heather Shaughnessy(Consultant 14427)',
      redeemed: '',
      redeemedBy: '',
    },
    {
      id: 2,
      generated: '6/21/2020 4:35 AM',
      code: 'ZV76-ZT26',
      originating: '1041458',
      value: '$100.00',
      currencyType: 'USD',
      purchasedBy: 'Emily Allen(Consultant 7261)',
      redeemed: '6/21/2020 9:59 AM',
      redeemedBy: 'Sarah Patellos(Customer C199485)',
    },
    {
      id: 3,
      generated: '6/21/2020 4:35 AM',
      code: 'HG43-FG79',
      originating: '1044213',
      value: '$100.00',
      currencyType: 'USD',
      purchasedBy: 'Amanda Johnson(Consultant 19959)',
      redeemed: '',
      redeemedBy: '',
    },
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

export default GiftCardTable
