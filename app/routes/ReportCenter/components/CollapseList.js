import React, {useState} from 'react'
import {
  Collapse,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Col,
  Row,
  TabPane,
  Badge,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  countryName: {
    color: '#DE8B6D',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
  countryNameTwo: {
    borderLeftWidth: 4,
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
  badgeStyle: {
    marginLeft: 5,
    padding: 4,
    MozOutlineRadius: 3,
    backgroundColor: '#de8b6d',
    color: '#ffffff',
  },
  contentStyle: {
    fontFamily: 'SFUIText-Semibold',
    paddingLeft: 10,
    paddingTop: 12,
  },
  linkStyle: {
    fontFamily: 'SFUIText-Semibold',
  },
})

const CollapseList = ({links, open}) => {
  const [activeTab, setActiveTab] = useState('1')
  const classes = useStyles()
  const toggleTabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const getLink = (field) => `/reports/view-report/${field.toLowerCase().split(' ').join('-')}`

  return (
    <Collapse isOpen={open}>
      <div lg={12} md={12} sm={12} xs={12} className="p-3 bg-white rounded-0">
        <Nav tabs>
          {links.map((link, index) => {
            return (
              <NavItem key={index}>
                <NavLink
                  style={
                    activeTab === link.tabId
                      ? {
                          backgroundColor: '#ffffff',
                          borderBottomColor: '#403839',
                          borderBottomWidth: 4,
                        }
                      : {}
                  }
                  onClick={() => {
                    toggleTabs(link.tabId)
                  }}>
                  {link.label}
                  <Badge className={classes.badgeStyle}>{link.fields.length}</Badge>
                </NavLink>
              </NavItem>
            )
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {links.map((link, index) => {
            return (
              <TabPane tabId={link.tabId} key={index}>
                <div className="my-3">
                  <Row className="px-3 my-3">
                    {link.fields.map((field, index) => (
                      <Col key={index} xs={12} md={6} lg={6} className={classes.contentStyle}>
                        <Link className={classes.linkStyle} to={getLink(field)}>
                          <span className={classes.linkStyle}>{field}</span>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </TabPane>
            )
          })}
        </TabContent>
      </div>
    </Collapse>
  )
}

CollapseList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      fields: PropTypes.array.isRequired,
      tabId: PropTypes.string.isRequired,
    }),
  ),
  open: PropTypes.bool,
}

export default CollapseList
