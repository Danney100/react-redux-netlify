import React, {useState} from 'react'
import {FormGroup, Button, CustomInput} from 'reactstrap'
import PropTypes from 'prop-types'

const ModuleGroup = ({label, fields, index, open, setOpen}) => {
  const handleSelectionModule = () => {
    let checkedFields = []
    for (let i = 0; i < fields.length; i++) {
      checkedFields[i] = false
    }
    return checkedFields
  }

  const [checkAll, setCheckAll] = useState(false)
  const [checkedModules, setCheckedModules] = useState(handleSelectionModule())
  const [checkedCounter, setCheckedCounter] = useState(0)

  const regex = /[\s/]/g
  const checkboxId = (label, field) => {
    const newLabel = label.replace(regex, '')
    const newField = field.replace(regex, '')
    return `${newLabel}_${newField}`
  }

  const showItems = () => {
    setOpen(index)
    setCheckedCounter(0)
  }

  const handleCheckAll = event => {
    const target = event.target
    let newCheckedModules = checkedModules

    for (let i = 0; i < newCheckedModules.length; i++) {
      newCheckedModules[i] = target.checked
    }

    setCheckAll(target.checked);
    setCheckedModules(newCheckedModules)
  }

  const handleCheckedModule = (event, fieldIndex) => {
    const target = event.target
    const checkAllInput = document.getElementById(`moduleGroup-${index}`)
    let newCheckedModules = checkedModules
    let counter = checkedCounter;
    let selectedCounter = 0
    
    counter++
    newCheckedModules[fieldIndex] = target.checked

    for (let module of newCheckedModules) {
      if (module === true) selectedCounter++
    }

    setCheckedCounter(counter)
    setCheckedModules(newCheckedModules)
    setCheckAll(fields.length === selectedCounter)

    checkAllInput.indeterminate = selectedCounter !== 0 && selectedCounter !== fields.length
  }

  return (
    <div className="sc-module-group-wrapper">
      <div className="d-flex align-items-center sc-sfui-text-semibold">
        <FormGroup className="mb-0">
          <CustomInput
            type="checkbox"
            className="sc-module-group-checkbox"
            id={ `moduleGroup-${index}` }
            checked={ checkAll }
            onChange={ handleCheckAll }
          />
        </FormGroup>
        <Button
          className={`
            sc-collapse-menu sc-module-group-btn d-flex align-items-center justify-content-between
            ${open === index ? 'open' : ''}
          `}
          color="link"
          onClick={ showItems }
        >
          <span className="sc-collapse-label text-left pr-2">{ label }</span>
          <i className="sc-collapse-arrow fa far fa-angle-right"/>
        </Button>
      </div>
      <FormGroup
        id={ `moduleGroupCol2-${index}` }
        className={`sc-collapse-panel-lv2 my-2 px-4 w-100 ${open === index ? 'd-block' : 'd-none'}`}
      >
        <h2 className="sc-heading d-none d-lg-block">{ label }</h2>
        {fields.map((field, fieldIndex) => {
          return (
            <CustomInput
              key={ fieldIndex }
              type="checkbox"
              className="sc-module-group-checkbox"
              id={ checkboxId(label, field) }
              name={ checkboxId(label, field) }
              label={ field }
              checked={ checkedModules[fieldIndex] }
              onChange={(e) => { handleCheckedModule(e, fieldIndex) }}
              defaultValue="true"
            />
          )
        })}
      </FormGroup>
    </div>
  )
}

ModuleGroup.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.array,
  index: PropTypes.number,
  open: PropTypes.number,
  setOpen: PropTypes.func,
}

export default ModuleGroup
