import React, {useState} from 'react'

import CollapseList from './CollapseList'

const People = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'Consultants',
      fields: [
        'All consultant',
        'Cancelled Consultant',
        'Consultant Last Order',
        'Consultant Rank History',
        'Consultant Sales Report',
        'Consultant Sky Wallet Balances',
        'Consultant Subscriptions',
        'New All Consultants KM',
        'Rank Achievement',
        'Sales by Product-jk',
        'Top Earners',
        'YTD Earnings',
      ],
      tabId: '1',
    },
    {
      label: 'Customers',
      fields: ['All Customers', 'Customer Sky Wallet Balances', 'Customer Subscriptions'],
      tabId: '2',
    },
    {
      label: 'Payment Methods',
      fields: ['Payment Method1', 'Payment Method2', 'Payment Method3'],
      tabId: '3',
    },
  ]

  return (
    <div className="mb-3">
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default People
