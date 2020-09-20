import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Row, Card} from 'reactstrap'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import Graphical from './components/Graphical'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
})
const index = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Team > Graphical Genealogy')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4 ml-1">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Graphical Genealogy</p>
        </Col>
      </Row>
      <div className="mr-3 ml-3">
        <CommonDemo
          item="success"
          wrapperClass="mx-0"
          content="View a graphical visualization of your downline(s) using this interface. Tree View - displays organization as an expandable and collapsible tree with only the consultant display ID information."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
      </div>
      <Graphical />
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12}>
            <div tag="h5">
              <p className={classes.subtitle}>Eddie test123 (173558)</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default index
