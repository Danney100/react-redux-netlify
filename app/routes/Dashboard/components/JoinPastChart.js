import React from 'react'
import {BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar} from 'recharts'
import PropTypes from 'prop-types'
import ChartLegend from './ChartLegend'

const JoinPastChart = ({reportData}) => {
  let data = []

  if (reportData) {
    for (const [key, value] of Object.entries(reportData)) {
      const report = {}
      report['name'] = key
      for (const x in value) {
        report[x] = value[x]
      }
      data.push(report)
    }
  }

  if (!data.length) {
    return <span>No Data available</span>
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{left: -10, right: 15, bottom: 50}}>
        <XAxis dataKey="name" angle={-45} dx={-15} dy={25} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend verticalAlign="top" content={ChartLegend} />
        <Bar dataKey="consultant" fill="#d18f77" barSize={7} />
        <Bar dataKey="customer" fill="#66356b" barSize={7} />
        <Bar dataKey="leads" fill="#28bfa3" barSize={7} />
      </BarChart>
    </ResponsiveContainer>
  )
}

JoinPastChart.propTypes = {
  reportData: PropTypes.object,
}
export default JoinPastChart
