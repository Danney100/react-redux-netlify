import React from 'react'
import {Row, Col, Button, Input} from 'reactstrap'
import PropTypes from 'prop-types'

const FilterRow = ({toggleOpen, isOpen}) => {
  return (
    <Row className="rounded-top border">
      <Col onClick={toggleOpen} sm={1} className="btn text-black my-auto">
        <i
          className={`${
            isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'
          } mr-2 text-black`}></i>
        Filter
      </Col>
      <Col lg={9} sm={12} xs={12} className="p-2">
        <Row className="m-0 pl-1">
          <Col sm={10} lg={11} xs={10}>
            <Input size="sm" disabled></Input>
          </Col>
          <Col sm={1} xs={1} lg={1} className="my-auto">
            <i className="fa fa-trash text-black"></i>
          </Col>
        </Row>
      </Col>
      <Col sm={2} className="p-0 text-center text-lg-left my-auto">
        <Button size="sm" color="success" className="mr-0 mt-1 mb-1 ml-1">
          Apply Filter
        </Button>
        <Button size="sm" color="warning" className="mr-0 mt-1 mb-1 ml-1">
          Clear Filter
        </Button>
      </Col>
    </Row>
  )
}

FilterRow.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default FilterRow
