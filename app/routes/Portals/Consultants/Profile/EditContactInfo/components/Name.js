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
const Name = () => {
  const classes = useStyles()

  return (
    <Col>
      <Row form>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2">
              <Label className={classes.name}>First Name*</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input placeholder="Eddie" />
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`}>Last Name*</span>
            <Col xs={12} sm={12} md={8}>
              <Input type="text" placeholder="test123"></Input>
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" xs={12} sm={12} md={5}>
          <Row form>
            <span className={`${classes.name} mt-2 ml-2`}>Company Name</span>
            <Col xs={12} sm={12} md={8}>
              <Input />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Name
