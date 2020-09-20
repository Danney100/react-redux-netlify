import React from 'react'
import {Row, Col, Collapse} from 'reactstrap'
import PropTypes from 'prop-types'

const FilterOptions = ({isOpen, filters}) => {
  return (
    <Row
      className={
        isOpen
          ? 'border border-top-0 overflow-auto'
          : 'border border-top-0 border-bottom-0 overflow-auto'
      }
      style={{maxHeight: '200px'}}>
      <Col className="p-0">
        <Collapse isOpen={isOpen}>
          <Row className="m-0 p-2">
            {filters.map((filter, index) => {
              return (
                <Col sm={12} xs={12} lg={3} className="mb-2" key={index}>
                  <div className="bg-light rounded p-2">{filter}</div>
                </Col>
              )
            })}
          </Row>
        </Collapse>
      </Col>
    </Row>
  )
}

FilterOptions.propTypes = {
  isOpen: PropTypes.bool,
  filters: PropTypes.array,
}

export default FilterOptions
