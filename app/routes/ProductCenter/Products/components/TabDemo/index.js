import React from 'react'
import {Media, ListGroupItem} from 'reactstrap'
import PropTypes from 'prop-types'

const TabDemo = (props) => {
  const {content} = props

  return (
    <div>
      <ListGroupItem className="mt-3">
        <Media>
          <Media className="ml-3">
            <span className="fa-stack fa-lg text-warning">
              <i className="fa fas fa-question-circle fa-2x"></i>
            </span>
          </Media>
          <Media>
            <span className="text-dark">
              <p className="ml-4">{content}</p>
            </span>
          </Media>
        </Media>
      </ListGroupItem>
    </div>
  )
}

TabDemo.propTypes = {
  content: PropTypes.string.isRequired,
}

export default TabDemo
