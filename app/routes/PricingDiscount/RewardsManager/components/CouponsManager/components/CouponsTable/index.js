import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Row, Col} from 'reactstrap'

import options from 'routes/components/CommonPagination'
import iconDetails from 'images/commonIcons/eye.svg'
import iconCart from 'images/commonIcons/cartIcon.svg'
import iconExpiredUnused from 'images/commonIcons/expiredUnused.svg'

const CouponsTable = () => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label, className}) => (
    <div className={` ${className ? className : ''} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
      <div className="ml-2" style={{whiteSpace: 'nowrap'}}>
        {label}
      </div>
    </div>
  )

  const actionFormater = () => (
    <>
      <IconButton icon={iconDetails} label="Details and Join" />
      <IconButton icon={iconCart} label="See Orders" className="my-2" />
      <IconButton icon={iconExpiredUnused} label="Expires Unused" />
    </>
  )
  const data = [
    {
      id: 1,
      generated: '6/23/2020 3:54:04 AM',
      coupon_type: "25% Monther's Day Loyalty Reward",
      coupon_code: '477UK-KAPJW-AV5FF',
      starts: '6/23/2020 3:53:48 AM',
      expires: '6/23/2020 3:53:48 AM',
      coupons_generated: '1',
    },
    {
      id: 2,
      generated: '6/23/2020 3:54:04 AM',
      coupon_type: "25% Monther's Day Loyalty Reward",
      coupon_code: '477UK-KAPJW-AV5FF',
      starts: '6/23/2020 3:53:48 AM',
      expires: '6/23/2020 3:53:48 AM',
      coupons_generated: '1',
    },
    {
      id: 3,
      generated: '6/23/2020 3:54:04 AM',
      coupon_type: "25% Monther's Day Loyalty Reward",
      coupon_code: '477UK-KAPJW-AV5FF',
      starts: '6/23/2020 3:53:48 AM',
      expires: '6/23/2020 3:53:48 AM',
      coupons_generated: '1',
    },
    {
      id: 4,
      generated: '6/23/2020 3:54:04 AM',
      coupon_type: "25% Monther's Day Loyalty Reward",
      coupon_code: '477UK-KAPJW-AV5FF',
      starts: '6/23/2020 3:53:48 AM',
      expires: '6/23/2020 3:53:48 AM',
      coupons_generated: '1',
    },
    {
      id: 5,
      generated: '6/23/2020 3:54:04 AM',
      coupon_type: "25% Monther's Day Loyalty Reward",
      coupon_code: '477UK-KAPJW-AV5FF',
      starts: '6/23/2020 3:53:48 AM',
      expires: '6/23/2020 3:53:48 AM',
      coupons_generated: '1',
    },
  ]
  const columns = [
    {
      dataField: 'generated',
      text: 'Generated',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'coupon_type',
      text: 'Coupon Type',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'coupon_code',
      text: 'Coupon Code',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'starts',
      text: 'Starts',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'expires',
      text: 'Expires',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'coupons_generated',
      text: 'Coupons Generated',
      sortCaret: sortCaret,
      sort: true,
      classes: 'text-center',
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

export default CouponsTable
