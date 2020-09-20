import React, {useState} from 'react'

import CollapseList from './CollapseList'

const Compensation = () => {
  const [open, setOpen] = useState(true)

  const links = [
    {
      label: 'Compensation1',
      fields: ['item', 'item', 'item', 'item', 'item', 'item', 'item'],
      tabId: '1',
    },
    {
      label: 'Compensation2',
      fields: ['item', 'item', 'item', 'item', 'item', 'item'],
      tabId: '2',
    },
  ]

  return (
    <div className="mb-3">
      <CollapseList links={links} open={open} />
    </div>
  )
}

export default Compensation
