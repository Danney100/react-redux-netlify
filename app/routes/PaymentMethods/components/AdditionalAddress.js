import React from 'react'
import {Col, Card, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import iconRemoved from 'images/commonIcons/removed.svg'
import iconEdit from 'images/commonIcons/pencil.svg'
import iconAmericanexpress from 'images/commonIcons/american.jpg'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#de8b6d',
    marginTop: 25,
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
  },
  name: {
    fontSize: '14px',
    color: '#403839',
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
  mastercard: {
    marginTop: 19,
    marginBottom: 19,
  },
})

export default function DefaultAddress() {
  const classes = useStyles()

  return (
    <div>
      <Row className="d-flex justify-content-between ml-1 mr-2 mb-5">
        <Col md="6" className="mt-2">
          <Card
            className="mb-3"
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            sm={{size: 8, offset: 4}}>
            <div tag="h5">
              <Row className="border-bottom mr-2 ml-2">
                <Col xs={10} className="d-flex justify-content-start">
                  <p className={classes.subtitle}>Additional Payment Method2</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                  <div className={`${classes.edit} d-flex flex-row`}>
                    <div>
                      <img src={iconEdit} />
                    </div>
                    <div className="ml-2">Edit</div>
                    <div className="ml-4">
                      <img src={iconRemoved} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${classes.root} ml-4 mr-4`}>
              <Row className="border-bottom">
                <Col xs={7} className={classes.name}>
                  Name on Card
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  Muslum
                </Col>
                <Col xs={7} className={classes.name}>
                  Card Number
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                **** **** **** 3333
                </Col>
                <Col xs={7} className={classes.name}>
                  Card Type
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                American Express
                </Col>
                <Col xs={7} className={classes.name}>
                  Expiration Date
                </Col>
                <Col xs={5} className={`${classes.value} d-flex justify-content-end`}>
                  02/22
                </Col>
                <Col xs={10}></Col>
                <Col xs={2} className="d-flex justify-content-end mt-4 mb-4">
                  <div className="ml-4">
                    <img src={iconAmericanexpress} />
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
                <Col xs={5} className={`${classes.value} d-flex justify-content-end mb-4`}>
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
