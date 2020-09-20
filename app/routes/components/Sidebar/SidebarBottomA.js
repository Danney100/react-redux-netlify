import React from 'react'

import {Button, Sidebar, PopoverBody} from './../../../components'

// import {FooterAuth} from '../Pages/FooterAuth'
import {FooterText} from '../FooterText'

const SidebarBottomA = () => (
  <React.Fragment>
    {/* START Desktop */}
    {/* <Sidebar.HideSlim>
      <Sidebar.Section className="pb-0">
        <VersionSelector sidebar dashboard="Airframe" />
      </Sidebar.Section>
      <Sidebar.Section>
        <FooterAuth className="text-muted" />
      </Sidebar.Section>
    </Sidebar.HideSlim> */}
    {/* END Desktop */}

    {/* START Slim Only */}
    <Sidebar.ShowSlim>
      <Sidebar.Section className="text-center">
        {/* Slim Version Selector */}

        {/* Footer Text as Tooltip */}
        <Button
          id="UncontrolledSidebarPopoverFooter"
          color="link"
          className="sidebar__link p-0 mt-3">
          <i className="fa fa-fw fa-question-circle-o"></i>
        </Button>
      </Sidebar.Section>
    </Sidebar.ShowSlim>
    {/* END Slim Only */}
  </React.Fragment>
)

export {SidebarBottomA}
