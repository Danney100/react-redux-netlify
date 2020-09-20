import React from 'react'
import {Button, Col} from 'reactstrap'
import PropTypes from 'prop-types'

const TastingButton = ({title, block, active}) => {
  const activeStyle = {
    backgroundColor: '#423b3c',
    color: 'white',
    border: 'none',
  }

  const inactiveStyle = {
    border: 'solid 1px #ebebeb',
    backgroundColor: '#f7f7f7',
    color: '#423b3c',
  }

  return (
    <Col xs="12" sm="12" lg="auto" className={`${block ? 'p-0' : 'pr-0'} mb-1 mb-lg-0`}>
      <Button
        style={active ? activeStyle : inactiveStyle}
        block={block}
        className={`${active ? 'sc-avenir-black' : 'sc-avenir-roman'}`}>
        {title}
      </Button>
    </Col>
  )
}

TastingButton.defaultProps = {
  active: false,
}

TastingButton.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  block: PropTypes.bool,
}

export default TastingButton
