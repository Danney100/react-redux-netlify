import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import ConsultantTable from '../../ConsultantTable'

const {ConsultantDemo} = DemoData

const ConsultantContent = () => {
  return (
    <div>
      <CommonDemo content={ConsultantDemo} />
      <div className="mx-3">
        <ConsultantTable />
      </div>
    </div>
  )
}

export default ConsultantContent
