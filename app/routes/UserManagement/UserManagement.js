import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector, connect} from 'react-redux'
import {setTabActive} from 'duck/actions/user'

import {
  Row,
  Col,
  Card,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'components'
import {useHistory} from 'react-router-dom'
import UsersTable from './UsersTable'
import UserTypesTable from './UserTypesTable'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import { scBase } from 'styles/sc-jss-components/_variables';
import {
  cssHeading,
  cssHeadingUpSm,
  cssCard,
  cssCardUpMd,
  cssInputBase,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssAlert,
  cssAlertUpMd,
  cssTable,
  tableActionBtns,
} from 'styles/sc-jss-components';

const UserManagement = ({user}) => {
  const scVar = scBase();
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      ...cssInputBase(),
      ...cssAlert(),
      ...cssTable(),
      ...tableActionBtns(),
      '& .tab-content': {
        [theme.breakpoints.up('md')]: {
          position: 'relative',
        },
      },
      '& .tab-pane.active': {
        [theme.breakpoints.up('md')]: {
          display: 'inline-block',
          width: '100%',
        },
      },
      '& .table td': {
        verticalAlign: 'baseline !important',
      },
      '& .sc-btn-action-wrapper': {
        width: `calc(178 / ${scVar.fontBase} * 1em)`,
      },
      '& .sc-btn-action--layout': {
        width: 'calc(50% - 3px)',
      },
      '& .search-wrapper': {
        marginTop: '1rem',
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
          top: 0,
          right: 0,
          marginTop: 0,
          transform: 'translateY(calc(-100% - 10px))',
        },
      },
      [theme.breakpoints.up('sm')]: {
        ...cssHeadingUpSm(),
      },
      [theme.breakpoints.up('md')]: {
        ...cssCardUpMd(),
        ...cssAlertUpMd(),
        '& .sc-custom-search .sc-input.form-control': {
          width: `${215 / scVar.fontBase}em`,
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& .react-bootstrap-table-pagination': {
          paddingLeft: '1.5625rem',
          paddingRight: '1.5625rem',
        },
      },
    },
    buttons: {
      ...cssBtnBase(),
      ...cssSuccessButton(),
      [theme.breakpoints.up('sm')]: {
        ...cssBtnBaseUpSm(),
      },
    },
  },
  { 
    name: 'scUserManagement',
  })

  const classes = useStyles()

  const dispatch = useDispatch()
  const tabActive = useSelector(({user}) => user.get('tabActive'))

  const toggle = (tab) => {
    if (tabActive !== tab) dispatch(setTabActive(tab))
  }

  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    if (user.get('tabActive') === null) dispatch(setTabActive('User Types'))
    setTitle('User Management')
  }, [])

  return (
    <div className={ `${classes.root} container` }>
      <div className="sc-heading-bar mt-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1 className="sc-heading">{tabActive === 'User Types' ? 'User Types' : 'Users'}</h1>
        <div className={ `${classes.buttons} col-example text-left` }>
          {tabActive === 'User Types' ? (
            <Button
              className="sc-btn sc-btn--success sc-btn--w240"
              color="link"
              onClick={() => {
                routeChange('/user-management/create-new-usertype')
                dispatch(setTabActive(null))
              }}
              size="lg">
              Add New User Type
            </Button>
          ) : (
            <Button
              className="sc-btn sc-btn--success sc-btn--w240"
              color="link"
              onClick={() => {
                routeChange('/user-management/create-new-user')
                dispatch(setTabActive(null))
              }}
              size="lg">
              Create New User
            </Button>
          )}
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card mb-3">
            <Nav className="sc-nav-tabs sc-sfui-text-semibold">
              <NavItem
                className={`sc-nav-tabs__item ${
                  tabActive === 'User Types' ? 'sc-nav-tabs__item--active' : ''
                }`}>
                <NavLink
                  className="sc-nav-tabs__link"
                  onClick={() => {
                    toggle('User Types')
                  }}>
                  User Types
                </NavLink>
              </NavItem>
              <NavItem
                className={`sc-nav-tabs__item ${
                  tabActive === 'Users' ? 'sc-nav-tabs__item--active' : ''
                }`}>
                <NavLink
                  className="sc-nav-tabs__link"
                  onClick={() => {
                    toggle('Users')
                  }}>
                  Users
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={tabActive}>
              <TabPane tabId="User Types">
                <UserTypesTable/>
              </TabPane>
              <TabPane tabId="Users">
                <UsersTable />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

UserManagement.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
})
const mapDispatchToProps = {setTabActive}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement)