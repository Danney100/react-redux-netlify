import React from 'react'
import {Col, Label, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
})
const Identification = () => {
  const classes = useStyles()

  return (
    <Col>
      <Row form>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2" style={{width: '65px'}}>
              <Label className={classes.name}>SNN*</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input placeholder="*****-1655" />
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`}>DL State</span>
            <Col xs={12} sm={12} md={8}>
              <Input type="select">
                <option>United States</option>
              </Input>
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2" style={{width: '108px'}}>
              <Label className={classes.name}>DL Country</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input type="select"></Input>
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2`}>Drivers License</span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Identification
