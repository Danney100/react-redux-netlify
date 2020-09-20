import React from 'react'
import ShippingDemo from './ShippingDemo'
import Configuration from './Configuration'
import ConfigurationTwo from './ConfigurationTwo'
import ConfigurationThree from './ConfigurationThree'
import DateTime from './DateTime'
import ExportConfiguration from './ExportConfiguration'
import ScheduleRun from './ScheduleRun'
import ShippingRun from './ShippingRun'
import CountryRegion from './CountryRegion'

export const NewShippingRun = () => {
  return (
    <div>
      <ShippingDemo />
      <Configuration />
      <ConfigurationTwo />
      <ConfigurationThree />
      <DateTime />
      <CountryRegion />
      <ExportConfiguration />
      <ScheduleRun />
      <ShippingRun />
    </div>
  )
}

export default NewShippingRun
