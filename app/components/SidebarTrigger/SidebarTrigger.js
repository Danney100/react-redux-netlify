import React from 'react'
import {NavLink} from 'reactstrap'
import PropTypes from 'prop-types'
import {withPageConfig} from './../Layout'

const SidebarTrigger = (props) => {
  const {tag: Tag, pageConfig, className, ...otherProps} = props

  return (
    <Tag
      onClick={() => {
        props.pageConfig.toggleSidebar()
        return false
      }}
      active={Tag !== 'a' ? !pageConfig.sidebarCollapsed : undefined}
      {...otherProps}
      className={
        !pageConfig.sidebarCollapsed ? `pl-0 ${className} text-black` : `${className} text-black`
      }>
      {props.children}
    </Tag>
  )
}

SidebarTrigger.propTypes = {
  tag: PropTypes.any,
  children: PropTypes.node,
  pageConfig: PropTypes.object,
  className: PropTypes.string,
}

SidebarTrigger.defaultProps = {
  tag: NavLink,
  children: <i className="fa fa-bars fa-fw" style={{cursor: 'pointer'}}></i>,
}

const cfgSidebarTrigger = withPageConfig(SidebarTrigger)

export {cfgSidebarTrigger as SidebarTrigger}
