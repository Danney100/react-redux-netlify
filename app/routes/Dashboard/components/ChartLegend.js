import React from 'react'
import PropTypes from 'prop-types'

const ChartLegend = ({payload}) => {
  return (
    <ul style={{listStyleType: 'none', padding: 0, marginLeft: '30px', display: 'flex'}}>
      {payload.map((entry, index) => (
        <li
          key={index}
          style={{float: 'left', marginRight: '29px', display: 'flex', alignItems: 'center'}}>
          <svg width="15" height="15" viewBox="0 0 30 30">
            <rect rx="5" width="100%" height="100%" stroke="none" fill={entry.color}></rect>
          </svg>
          <span
            style={{
              fontFamily: 'Avenir-Medium',
              fontSize: '12px',
              fontWeight: '500',
              marginLeft: '5px',
              color: '#423b3c',
            }}>
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  )
}

ChartLegend.propTypes = {
  payload: PropTypes.object,
}

export default ChartLegend
