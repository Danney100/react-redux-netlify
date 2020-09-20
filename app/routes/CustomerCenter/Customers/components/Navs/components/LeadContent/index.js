import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import LeadTable from './LeadTable'

const {LeadDemo} = DemoData

const LeadContent = () => {
  return (
    <div>
      <CommonDemo content={LeadDemo} />
      <LeadTable />
    </div>
  )
}

export default LeadContent
