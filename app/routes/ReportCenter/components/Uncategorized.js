import React, {useState} from 'react'

import CollapseList from './CollapseList'

const Uncategorized = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  const links = [
    {
      label: 'UNCATEGORIZED',
      fields: [
        'Top Recruiters',
        '2018 Summer Incentive',
        'All Consultants KM',
        'All Consultants with join date',
        'All Orders KM',
        'All Parties KM',
        'Best Sellers Report',
      ],
      tabId: '1',
    },
  ]

  return (
    <div className="mb-3">
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default Uncategorized
