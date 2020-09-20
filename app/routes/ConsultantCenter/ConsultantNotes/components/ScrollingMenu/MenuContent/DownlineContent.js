import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import DownlineTable from '../../DownlineTable'

const {DownlineDemo} = DemoData

const DownlineContent = () => {
  return (
    <div>
      <CommonDemo content={DownlineDemo} />
      <div className="mx-3">
        <DownlineTable />
      </div>
    </div>
  )
}

export default DownlineContent
