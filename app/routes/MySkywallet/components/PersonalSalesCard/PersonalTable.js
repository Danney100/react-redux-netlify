import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const PersonalTable = () => {
  const data = [
    {
      id: 1,
      DateAdded: 'Saturday, May 25, 2019 5:37:00 AM',
      Coupon: 'PV Reward 1 Coupon',
      CouponCode: '0CF90329-BCF2-4629-8D7F-B',
      StartDate: 'Wednesday, March 11, 2020 6:39:37 AM',
      EndDate: 'Thursday, January 01, 2099 7:59:59 AM',
      OfUses: '0 / 1',
    },
    {
      id: 2,
      DateAdded: 'Saturday, May 25, 2019 5:37:00 AM',
      Coupon: 'PV Reward 1 Coupon',
      CouponCode: '0CF90329-BCF2-4629-8D7F-B',
      StartDate: 'Wednesday, March 11, 2020 6:39:37 AM',
      EndDate: 'Thursday, January 01, 2099 7:59:59 AM',
      OfUses: '0 / 1',
    },
    {
      id: 3,
      DateAdded: 'Saturday, May 25, 2019 5:37:00 AM',
      Coupon: 'PV Reward 1 Coupon',
      CouponCode: '0CF90329-BCF2-4629-8D7F-B',
      StartDate: 'Wednesday, March 11, 2020 6:39:37 AM',
      EndDate: 'Thursday, January 01, 2099 7:59:59 AM',
      OfUses: '0 / 1',
    },
    {
      id: 4,
      DateAdded: 'Saturday, May 25, 2019 5:37:00 AM',
      Coupon: 'PV Reward 1 Coupon',
      CouponCode: '0CF90329-BCF2-4629-8D7F-B',
      StartDate: 'Wednesday, March 11, 2020 6:39:37 AM',
      EndDate: 'Thursday, January 01, 2099 7:59:59 AM',
      OfUses: '0 / 1',
    },
    {
      id: 5,
      DateAdded: 'Saturday, May 25, 2019 5:37:00 AM',
      Coupon: 'PV Reward 1 Coupon',
      CouponCode: '0CF90329-BCF2-4629-8D7F-B',
      StartDate: 'Wednesday, March 11, 2020 6:39:37 AM',
      EndDate: 'Thursday, January 01, 2099 7:59:59 AM',
      OfUses: '0 / 1',
    },
  ]

  const columns = [
    {
      dataField: 'DateAdded',
      text: 'Date Added',
      sort: true,
    },
    {
      dataField: 'Coupon',
      text: 'Coupon',
      sort: true,
    },
    {
      dataField: 'CouponCode',
      text: 'Coupon Code',
      sort: true,
    },
    {
      dataField: 'StartDate',
      text: 'Start Date',
      sort: true,
    },
    {
      dataField: 'EndDate',
      text: 'End Date',
      sort: true,
    },
    {
      dataField: 'OfUses',
      text: '# Of Uses',
      sort: true,
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
    />
  )
}

export default PersonalTable
