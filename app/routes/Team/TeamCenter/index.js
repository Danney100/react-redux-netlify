import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import TeamSearch from './components/TeamSearch'
import Team from './components/Team/index'
import TeamMember from './components/TeamMember/index'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})
const index = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Team > Team Center')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4 ml-1">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Team Center</p>
        </Col>
      </Row>
      <div className="mr-3 ml-3">
        <CommonDemo
          item="success"
          wrapperClass="mx-0"
          content="The Team Center allows Consultants to see all the performance metrics of members on their team at a glance, even filter/sort to help them identify exactly who and what needs their attention day to day. The Team Center is split into three sections: Team Search, Team Explorer, and Team Member Details.
        Team Search is where you can search and filter for the specific team member you’re looking for. The results of this search are shown on the Team panel just below the Team Search panel.Use the grid to explore useful and specific information that comprises the hierarchy of your team.The Team Member Details section displays information about a single Consultant in your downline.Click on rows in the Team Explorer to select which Consultant’s information is shown."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
      </div>
      <TeamSearch />
      <Team />
      <TeamMember />
    </div>
  )
}

export default index
