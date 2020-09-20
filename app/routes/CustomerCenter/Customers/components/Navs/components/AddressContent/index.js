import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import AddressTable from './AddressTable'

const {AddressDemo} = DemoData

const AddressContent = () => {
  return (
    <div>
      <CommonDemo content={AddressDemo} />
      <div>
        <AddressTable />
      </div>
    </div>
  )
}

export default AddressContent
