import React, {useState} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const Filter = ({applyFilter, filters}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const setQualificationsProcess = () => {
    applyFilter({...filters, qualificationsProcess: !filters.qualificationsProcess})
  }
  const setPayProcess = () => {
    applyFilter({...filters, payProcess: !filters.payProcess})
  }

  return (
    <Dropdown isOpen={isOpen} toggle={toggle} className="filter active-filter">
      <DropdownToggle
        caret
        tag="span"
        data-toggle="dropdown"
        aria-expanded={isOpen}
        className="pointer">
        <span className="mr-2">Filter</span>
      </DropdownToggle>
      <DropdownMenu className="border-0 p-3" persist>
        <div className={`filter ${filters.payProcess && 'active-filter'}`}>
          <Input
            type="checkbox"
            onChange={setPayProcess}
            className="ml-0 mr-2 filter-input"
            checked={filters.payProcess}
          />
          Pay Process Runs
        </div>
        <div className={`filter ${filters.qualificationsProcess ? 'active-filter' : ''}`}>
          <Input
            type="checkbox"
            onChange={setQualificationsProcess}
            className="ml-0 mr-2 filter-input"
            checked={filters.qualificationsProcess}
          />
          Qualifications Process Runs
        </div>
      </DropdownMenu>
    </Dropdown>
  )
}

Filter.propTypes = {
  applyFilter: PropTypes.func,
  filters: PropTypes.object,
}

export default Filter
