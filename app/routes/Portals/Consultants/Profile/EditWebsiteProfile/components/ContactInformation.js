import React from 'react'
import {Col, Label, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
})
const ContactInformation = () => {
  const classes = useStyles()

  return (
    <Col>
      <Row form>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2">
              <Label className={classes.name}>Country*</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input type="select">
                <option>United States</option>
              </Input>
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`} style={{width: '55px'}}>
              Street1*
            </span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2" style={{width: '88px'}}>
              <Label className={classes.name}>States*</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input type="select">
                <option>Texas</option>
              </Input>
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`} style={{width: '88px'}}>
              Postal Code*
            </span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2" style={{width: '55px'}}>
              <Label className={classes.name}>Street2</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input />
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`} style={{width: '55px'}}>
              City*
            </span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2">
              <Label className={classes.name}>Phone Number</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input type="select"></Input>
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`} style={{width: '90px'}}>
              Email Address
            </span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default ContactInformation
