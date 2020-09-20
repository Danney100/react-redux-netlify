import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import TabTable from '../../TabTable'

const {EarningsDemo} = DemoData

const EarningContent = () => {
  return (
    <div>
      <CommonDemo content={EarningsDemo} />
      <div className="mx-3">
        <TabTable />
      </div>
    </div>
  )
}

export default EarningContent
