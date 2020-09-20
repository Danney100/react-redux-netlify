import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    '& .sidebar': {
      boxShadow: '0 0 12px 0 #f5f3f2',
      border: 'none',
    },
  },
})

const LayoutSidebar = (props) => {
  const classes = useStyles(props)

  const sidebarClass = classNames('layout__sidebar', classes.root, {
    'layout__sidebar--slim': props.sidebarSlim,
    'layout__sidebar--collapsed': props.sidebarCollapsed,
  })

  return <div className={sidebarClass}>{props.children}</div>
}

LayoutSidebar.propTypes = {
  children: PropTypes.node,
  sidebarSlim: PropTypes.bool,
  sidebarCollapsed: PropTypes.bool,
  classes: PropTypes.object,
}
LayoutSidebar.layoutPartName = 'sidebar'

export {LayoutSidebar}
