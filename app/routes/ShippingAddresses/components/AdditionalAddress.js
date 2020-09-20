import React from 'react'
import {Col, Card, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import iconremoved from 'images/commonIcons/removed.svg'
import iconEdit from 'images/commonIcons/pencil.svg'

const useStyles = makeStyles({
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
  },
  name: {
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
    marginTop: '15px',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    marginTop: '15px',
  },
  edit: {
    marginTop: 30,
  },
})

export default function AdditionalAddress() {
  const classes = useStyles()

  return (
    <div>
      <Row className="d-flex justify-content-between ml-1 mr-2">
        <Col md="6" className="mt-2">
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <div tag="h5">
              <Row className="border-bottom mr-2 ml-2">
                <Col xs={10} className="d-flex justify-content-start">
                  <p className={classes.subtitle}>Additional Address1</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                  <div className={`${classes.edit} d-flex flex-row`}>
                    <div>
                      <img src={iconEdit} />
                    </div>
                    <div className="ml-2">Edit</div>
                    <div className="ml-4">
                      <img src={iconremoved} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${classes.root} ml-4 mr-4`}>
              <Row>
                <Col xs={7} className={classes.name}>
                  Country
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  United States
                </Col>
                <Col xs={7} className={classes.name}>
                  State
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  Texas
                </Col>
                <Col xs={7} className={classes.name}>
                  City
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  Dallas
                </Col>
                <Col xs={7} className={classes.name}>
                  Street1
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  4101 McEwen Rd
                </Col>
                <Col xs={7} className={classes.name}>
                  Postal Code
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  700
                </Col>
                <Col xs={7} className={classes.name}>
                  Phone Number
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end mb-5`}>
                  1 (312) 231-3212
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col md="6" className="mt-2">
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <div tag="h5">
              <Row className="border-bottom mr-2 ml-2">
                <Col xs={10} className="d-flex justify-content-start">
                  <p className={classes.subtitle}>Additional Address2</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                  <div className={`${classes.edit} d-flex flex-row`}>
                    <div>
                      <img src={iconEdit} />
                    </div>
                    <div className="ml-2">Edit</div>
                    <div className="ml-4">
                      <img src={iconremoved} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${classes.root} ml-4 mr-4`}>
              <Row>
                <Col xs={7} className={classes.name}>
                  Country
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  United States
                </Col>
                <Col xs={7} className={classes.name}>
                  State
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  Texas
                </Col>
                <Col xs={7} className={classes.name}>
                  City
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  Dallas
                </Col>
                <Col xs={7} className={classes.name}>
                  Street1
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  4101 McEwen Rd
                </Col>
                <Col xs={7} className={classes.name}>
                  Postal Code
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  700
                </Col>
                <Col xs={7} className={classes.name}>
                  Phone Number
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end mb-5`}>
                  1 (312) 231-3212
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
