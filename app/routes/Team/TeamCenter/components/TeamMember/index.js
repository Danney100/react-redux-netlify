import React, {useState} from 'react'
import {Col, Card, CardHeader, Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import Notes from './Notes'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
  },
  name: {
    fontSize: '14px',
    color: '#423b3c',
    fontFamily: 'Avenir-Heavy',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
  },

  profile: {
    height: 80,
    borderLeft: 80,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  header: {
    color: '#ffffff',
    fontSize: 16,
    height: 60,
    fontFamily: 'Avenir-Heavy',
    background: '#6c6766',
  },
  card_size: {
    height: 95,
    border: 7,
  },
})
export const TeamMember = () => {
  const classes = useStyles()
  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 ml-3 mr-3">
        <Row className="pb-0 text-white rounded-top mx-2 mt-3  border-bottom mr-4 ml-4">
          <Col lg={{size: 10}} className="d-flex justify-content-center justify-content-lg-start">
            <p className={classes.title}>Team Member: eddie test123 (record 1 of 1 )</p>
          </Col>
          <Col lg={{size: 2}} className="d-flex justify-content-center justify-content-lg-end">
            <Pagination>
              <PaginationItem>
                <PaginationLink first />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
        <div className="mt-3">
          <Row form className="mt-2 p-0 ml-3">
            <Col md="6">
              <CardHeader className={`${classes.header} mr-4`}>Consultant Profile</CardHeader>
              <Card className={`${classes.profile} mr-4 mb-4`}>
                <div className={`${classes.root} mt-3 p-3`}>
                  <div>
                    <span className={`${classes.name} d-flex justify-content-start`}>
                      Eddie test123 (17358)
                    </span>
                  </div>
                  <Row className={`${classes.card_size} mt-4`}>
                    <Col xs={5} className={classes.name}>
                      Default Address
                    </Col>
                    <Col xs={7} className={classes.value}>
                      4101 McEwen Rd 700 Farmers Branch, Texas 75244 United States
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Phone
                    </Col>
                    <Col xs={7} className={classes.value}>
                      1 (654) 651-5465
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Email
                    </Col>
                    <Col xs={7} className={classes.value}>
                      eddietest123@test.com
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Website URL
                    </Col>
                    <Col xs={7} className={classes.value}>
                      https://front-staging.scoutandcellar.com/eddietest123
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col md="6">
              <CardHeader className={`${classes.header} mr-4`}>Consultant Status</CardHeader>
              <Card className="mr-4 mb-4">
                <div className={`${classes.root} mt-3 p-3`}>
                  <Row>
                    <Col xs={5} className={classes.name}>
                      Consultant Status
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Active
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Rank
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Consultant
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Personally Mentored
                    </Col>
                    <Col xs={7} className={classes.value}>
                      1
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Customer Count
                    </Col>
                    <Col xs={7} className={classes.value}>
                      9
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Lead Count
                    </Col>
                    <Col xs={7} className={classes.value}>
                      0
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Enroller
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Eddie
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Join Date
                    </Col>
                    <Col xs={7} className={classes.value}>
                      3/12/2020
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Type
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Consultant
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Language
                    </Col>
                    <Col xs={7} className={classes.value}>
                      English
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          <Row form className="mt-2 p-0 ml-3">
            <Col md="6">
              <CardHeader className={`${classes.header} mr-4`}>Qualifications</CardHeader>
              <Card className="mr-4 mb-4" className={`${classes.card_size} `}>
                <div className={`${classes.root} mt-3 p-3`}>
                  <div className="d-flex justify-content-between">
                    <span className={`${classes.value} d-flex justify-content-start`}>
                      15% Personal Sales Commission
                    </span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6">
              <CardHeader className={`${classes.header} mr-4`}>Consultant Status</CardHeader>
              <Card className="mr-4 mb-4">
                <div className={`${classes.root} mt-3 p-3`}>
                  <Row>
                    <Col xs={5} className={classes.name}>
                      Rank
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Consultant
                    </Col>
                    <Col xs={5} className={classes.name}>
                      Pay Rank
                    </Col>
                    <Col xs={7} className={classes.value}>
                      Consultant
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Notes />
        </div>
      </Card>
    </div>
  )
}

export default TeamMember
