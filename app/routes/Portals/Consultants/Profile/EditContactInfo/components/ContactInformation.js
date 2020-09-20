import React from 'react'
import {Col, Label, Input, FormGroup, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import addIcon from 'images/commonIcons/plus-circle.svg'

const useStyles = makeStyles({
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
  root: {
    color: '#423b3c',
    border: 'solid 1px #c6cace',
    borderRadius: '5px',
    '& .card-number': {
      color: '#d18f77',
    },
    '& .card-title': {
      color: '#6c6766',
    },
    '& .sc-edit': {
      color: '#707070',
    },
  },
})
const ContactInformation = () => {
  const classes = useStyles()

  return (
    <Col>
      <Row form>
        <Col className="mt-2" md={{size: 6, offset: 1}}>
          <Row form>
            <Label className={classes.name}>Personal Website</Label>
            <Label>https://front-staging.scoutandcellar.com/eddietest123</Label>
          </Row>
          <Row form className="mt-3">
            <span className={`${classes.name} my-2 mr-5`}>Email</span>
            <Col xs={12} sm={12} md={7} className="mb-4">
              <Input type="text" placeholder="Eddie123@test.com"></Input>
            </Col>
          </Row>
        </Col>
        <Col className="mt-1 ml-4" md={{size: 4, offset: 1}}>
          <Row form>
            <FormGroup>
              <Label className={`${classes.name} mr-5`}>Opt-out of Company emails</Label>
              <Input className={`${classes.font}`} type="checkbox"></Input>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label className={`${classes.name} mr-5`}>Opt-out of Consultant emails</Label>
              <Input className={classes.font} type="checkbox"></Input>
            </FormGroup>
          </Row>
        </Col>
      </Row>
      <Row className={`${classes.root}`}>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2">
              <Label className={classes.name}>Phone Number</Label>
            </span>
            <Col xs={12} sm={12} md={4} className="mr-5 mb-2">
              <Input type="select">
                <option>Home</option>
              </Input>
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2`}>Phone Number</span>
            <Col xs={12} sm={12} md={8} className="d-flex justify-content-between">
              <Input type="text" placeholder="16546515465" className="mr-2" />
              <img src={addIcon} />
            </Col>
          </Row>
          <Row form className="my-2">
            <span className={`${classes.name} mt-2`}>Primary</span>
            <Col className="mt-1 ml-4">
              <Input type="checkbox" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default ContactInformation
