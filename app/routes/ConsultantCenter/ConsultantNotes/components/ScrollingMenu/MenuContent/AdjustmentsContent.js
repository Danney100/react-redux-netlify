import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import AdjustmentsTable from '../../AdjustmentsTable'

const {AdjustmentsDemo} = DemoData

const AjustmentsContent = () => {
  return (
    <div>
      <CommonDemo content={AdjustmentsDemo} />
      <div className="mx-3">
        <AdjustmentsTable />
      </div>
    </div>
  )
}

export default AjustmentsContent
