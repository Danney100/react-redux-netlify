import React, {useState} from 'react'

import CollapseList from './CollapseList'

const Miscellaneous = () => {
  const [open, setOpen] = useState(true)

  const links = [
    {
      label: 'Logs',
      fields: [
        'Address Validation Log',
        'Compliance Report for Kristen',
        'Email Opt Out List',
        'Gateway Conversation Report',
        'Merchant Transactions',
        'Payout Register',
        'Sent Email Log',
        'Shipping Conversation Report',
        'Skywallet Transactions with Detail',
        'Subscription Run Exceptions',
        'Tax Conversations',
        'Tax Integration Log',
      ],
      tabId: '1',
    },
    {
      label: 'Uncategorized',
      fields: ['Gift Cards', 'Inventory Old', 'Inventory-Test', 'Ship Run Orders Report'],
      tabId: '2',
    },
  ]

  return (
    <div className="mb-3">
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default Miscellaneous
