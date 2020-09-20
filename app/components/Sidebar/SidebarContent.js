import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Common from './../../common'

export class SidebarContent extends React.Component {
  _isMounted = false

  static propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool,
    animationsDisabled: PropTypes.bool,
    pageConfig: PropTypes.object,
  }

  sidebarRef = React.createRef()

  constructor(props) {
    super(props)

    this.state = {
      entryAnimationFinished: false,
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.sidebarEntryAnimate = new Common.SidebarEntryAnimate()
    this.slimSidebarAnimate = new Common.SlimSidebarAnimate()
    this.slimMenuAnimate = new Common.SlimMenuAnimate()

    this.sidebarEntryAnimate.assignParentElement(this.sidebarRef.current)
    this.slimSidebarAnimate.assignParentElement(this.sidebarRef.current)
    this.slimMenuAnimate.assignSidebarElement(this.sidebarRef.current)

    this.sidebarEntryAnimate.executeAnimation().then(() => {
      if (this._isMounted) {
        this.setState({entryAnimationFinished: true})
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
    this.sidebarEntryAnimate.destroy()
    this.slimSidebarAnimate.destroy()
    this.slimMenuAnimate.destroy()
  }

  render() {
    const {animationsDisabled, collapsed, pageConfig, slim, children} = this.props

    const sidebarClass = classNames('sidebar', 'sidebar--animations-enabled', {
      'sidebar--slim': slim || pageConfig.sidebarSlim,
      'sidebar--collapsed': collapsed || pageConfig.sidebarCollapsed,
      'sidebar--animations-disabled': animationsDisabled || pageConfig.animationsDisabled,
      'sidebar--animate-entry-complete': this.state.entryAnimationFinished,
    })

    return (
      <div className={sidebarClass} ref={this.sidebarRef}>
        {children}
      </div>
    )
  }
}
