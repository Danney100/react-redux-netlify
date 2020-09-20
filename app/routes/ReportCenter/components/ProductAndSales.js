import React, {useState} from 'react'

import CollapseList from './CollapseList'

const ProductAndSales = () => {
  const [open, setOpen] = useState(true)

  const links = [
    {
      label: 'Orders',
      fields: [
        'All Orders',
        'Order Aging',
        'Order Invoices v2',
        'Orders with Payment Type',
        'Product Sales By Customer',
        'Refunded Orders',
        'Returns',
        'Sales By Product - Corporate',
        'Sales Tax By State',
        'Sales Tax by City',
        'Sales Tax by County',
        'Sales Tax by Zip Code',
        'Skywallet Transactions with Detail KM',
        'Subscriptions',
      ],
      tabId: '1',
    },
    {
      label: 'Parties',
      fields: ['All Parties'],
      tabId: '2',
    },
    {
      label: 'Products',
      fields: [
        'Active Cost Tiers',
        'Cost Of Goods Sold',
        'Cost Of Goods Summary',
        'Inventory Adjustment Audit',
        'Inventory Availability',
        'Inventory Availability By Warehouse',
        'Inventory Availability By Warehouse Bin',
        'Inventory Counts',
        'Subscriptions by Product',
      ],
      tabId: '3',
    },
  ]

  return (
    <div className="mb-3">
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default ProductAndSales
