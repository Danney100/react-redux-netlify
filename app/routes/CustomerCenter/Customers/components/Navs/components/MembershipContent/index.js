import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import MembershipTable from './MembershipTable'

const {MembershipsDemo} = DemoData

const MembershipContent = () => {
  return (
    <div>
      <CommonDemo content={MembershipsDemo} />
      <MembershipTable />
    </div>
  )
}

export default MembershipContent
