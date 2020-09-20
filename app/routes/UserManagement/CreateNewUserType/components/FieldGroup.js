import React from 'react'
import {
  Collapse,
  FormGroup,
  CustomInput,
  Button,
} from 'components'
import PropTypes from 'prop-types'

const FieldGroup = ({
  label,
  fields,
  index,
  menuOpen,
  setMenuOpen,
  optionsOpen,
  setOptionsOpen,
}) => {
  const options = [
    {
      label: 'No Access',
      value: 1,
    },
    {
      label: 'Read Only',
      value: 2,
    },
    {
      label: 'Read / Edit',
      value: 3,
    },
  ]
  const optionFields = [
  'consultant Company Name',
  'legalEntity Company Name',
  'consultant Contact Info',
  'consultant Display ID',
  'legalEntity Display ID',
  'consultant Email',
  'legalEntity Email',
  'consultant First Name',
  'legalEntity First Name',
  'consultant Joint First Name',
  'legalEntity Joint First Name',
  'consultant Joint Last Name',
  'legalEntity Joint Last Name',
  'consultant Joint Middle Name',
  'legalEntity Joint Middle Name',
  'consultant Last Name',
  'legalEntity Last Name',
  'consultant Last Name 2',
  'legalEntity Last Name 2',
  ]

  const regex = /[\s/]/g

  const toggleMenu = e => {
    e.preventDefault();
    if (menuOpen === index) {
      setMenuOpen(null)
    } else {
      setMenuOpen(index)
    }
  }

  const toggleItem = (e, fieldIndex) => {
    e.preventDefault();
    setOptionsOpen(`${index}-${fieldIndex}`);
  }

  const radioId = (label, field, option) => {
    const newLabel = label.replace(regex, '')
    const newField = field.replace(regex, '')
    const newOption = option ? option.replace(regex, '') : null
    if (option) {
      return `${newLabel}_${newField}_${newOption}`
    } else {
      return `${newLabel}_${newField}_option`
    }
  }

  return (
    <div className="sc-field-group-wrapper">
      <Button
        className={`
          sc-collapse-menu d-flex align-items-center justify-content-between sc-sfui-text-semibold
          ${menuOpen === index ? 'open' : ''}
        `}
        color="link"
        onClick={ toggleMenu }
      >
        <span className="sc-collapse-label">{ label }</span>
        <i className={`
            sc-collapse-arrow
            ${menuOpen === index ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}
          `}
        />
      </Button>
      <Collapse isOpen={menuOpen === index} className="sc-collapse-panel">
        {fields.map((field, fieldIndex) => {
          return (
            <div key={ fieldIndex }>
              <Button
                className={`
                  sc-collapse-menu-lv2 w-100 sc-sfui-text-semibold text-left border-0
                  ${optionsOpen === `${index}-${fieldIndex}` ? 'open' : ''}
                `}
                color="link"
                onClick={e => toggleItem(e, fieldIndex)}
              >
                <span className="sc-collapse-menu-lv2__line"></span>
                <span>{field}</span>
              </Button>
              <div className={`
                  sc-collapse-panel-lv2 my-2 px-4 w-100
                  ${optionsOpen === `${index}-${fieldIndex}` ? 'd-block' : 'd-none'}
                `}>
                <h2 className="sc-heading d-none d-lg-block text-center">{ field }</h2>
                <FormGroup className="mb-0">
                  {
                    options.map((option, optionIndex) => {
                      return (
                        <CustomInput
                          key={ optionIndex }
                          type="radio"
                          id={ radioId(label, field, option.label) }
                          name={ radioId(label, field) }
                          label={ option.label }
                        />
                    )})
                  }
                </FormGroup>
                <div className="sc-collapse-panel-lv2__col3 px-md-4 w-100" id={ `fieldGroupCol3-${index}-${fieldIndex}` }>
                  <h2 className="sc-heading d-none d-lg-block text-center">Fields</h2>
                  <ul className="list-unstyled">
                    {
                      optionFields.map((field, index) => {
                        return (
                          <li key={ index }>{ `- ${field}` }</li>
                      )})
                    }
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.array,
  index: PropTypes.number,
  menuOpen: PropTypes.number,
  setMenuOpen: PropTypes.func,
  optionsOpen: PropTypes.string,
  setOptionsOpen: PropTypes.func,
}

export default FieldGroup
