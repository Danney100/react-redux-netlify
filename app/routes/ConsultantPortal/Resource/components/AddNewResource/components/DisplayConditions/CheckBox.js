import React from 'react'
import {Input} from 'reactstrap'
import PropTypes from 'prop-types'

export const CheckBox = (props) => {
  return (
    <li>
      <Input
        key={props.id}
        onChange={props.onChange}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value}
    </li>
  )
}
CheckBox.propTypes = {
  id: PropTypes.number,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  value: PropTypes.string,
}
export default CheckBox
