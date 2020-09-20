import React from 'react'
import {Pie, ResponsiveContainer, Cell, PieChart, Legend} from 'recharts'
import PropTypes from 'prop-types'

import ChartLegend from './ChartLegend'

const COLORS = ['#d18f77', '#423b3c']

const OrderOriginPast7Days = ({reportData}) => {
  let data = []
  if (reportData) {
    for (const x in reportData) {
      const dataDict = {}
      dataDict['name'] = x
      dataDict['value'] = reportData[x]
      data.push(dataDict)
    }
  }

  if (!data.length || !(reportData.consultant && reportData.customer)) {
    return <span>No Data available</span>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Legend
          verticalAlign="top"
          margin={{top: -50, left: 0, right: 0, bottom: 0}}
          content={ChartLegend}
        />
        <Pie data={data} dataKey="value" labelLine={false} outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

OrderOriginPast7Days.propTypes = {
  reportData: PropTypes.object,
}

export default OrderOriginPast7Days
