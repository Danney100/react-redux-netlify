import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types'

const customTotal = (from, to, size) => (
  <>
    <span className="ml-2">Items per page</span>
    <span className="float-right m-2">
      {from} - {to} of {size} items
    </span>
  </>
)

const pageButtonRenderer = ({page, active, disable, title, onPageChange}) => {
  const handleClick = (e) => {
    e.preventDefault()
    onPageChange(page)
  }

  const activeStyle = {}

  if (active) {
    activeStyle.backgroundColor = '#6c6766'
    activeStyle.color = '#ebe9e8'
  } else {
    activeStyle.backgroundColor = '#ebe9e8'
    activeStyle.color = '#6c6766'
  }
  if (typeof page === 'string') {
    activeStyle.backgroundColor = '#ebe9e8'
    activeStyle.color = '#6c6766'
  }
  activeStyle.margin = '0px 2px'
  activeStyle.border = 'none'

  return (
    <Button style={activeStyle} key={page} className="float-left" onClick={handleClick}>
      {page}
    </Button>
  )
}

pageButtonRenderer.propTypes = {
  page: PropTypes.string,
  active: PropTypes.bool,
  disable: PropTypes.bool,
  title: PropTypes.string,
  onPageChange: PropTypes.func,
}

const options = {
  pageButtonRenderer,
  paginationTotalRenderer: customTotal,
  //   alwaysShowAllBtns: true,
  paginationSize: 4,
  hideSizePerPage: false,
  showTotal: true,
  hidePageListOnlyOnePage: true,
}

export default options
