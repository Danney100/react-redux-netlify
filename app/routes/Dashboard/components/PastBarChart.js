import React from 'react'
import {BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Bar} from 'recharts'
import colors from 'colors'
import PropTypes from 'prop-types'

const PastBarChart = ({label, BarOffset, reportData}) => {
  const toCurrency = (value) => (label !== 'partiesPast' ? `$ ${value}` : value)

  let data = []

  if (reportData) {
    for (const [key, value] of Object.entries(reportData)) {
      const report = {}
      report['name'] = key
      for (const x in value) {
        report['value'] = value[x]
      }
      data.push(report)
    }
  }

  if (!data.length) {
    return <span>No Data available</span>
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{top: 5, bottom: 50}}>
        <XAxis dataKey="name" interval={0} axisLine={false} tickLine={false} tick={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 'dataMax']}
          tickFormatter={toCurrency}
        />
        <Tooltip
          contentStyle={{
            background: colors['900'],
            border: `1px solid ${colors['900']}`,
            color: colors['white'],
          }}
        />
        <Bar dataKey="value" fill="#423b3c">
          <LabelList
            dataKey="name"
            position="bottom"
            dy={BarOffset.dy}
            dx={BarOffset.dx}
            angle={BarOffset.angle}
            offset={5}
            fill="#707070"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

PastBarChart.propTypes = {
  label: PropTypes.string,
  BarOffset: PropTypes.object,
  reportData: PropTypes.object,
}

export default PastBarChart
