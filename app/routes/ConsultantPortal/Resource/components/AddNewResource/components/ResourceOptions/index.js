import React, {useState, useRef} from 'react'
import {Col, Label, Input, FormGroup, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
  nameStyle: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginLeft: 19,
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  font: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  size: {
    height: '300px',
  },
  groupStyle: {
    marginLeft: 162,
  },
})
const ResourceOptions = () => {
  const classes = useStyles()

  return (
    <Col className="mt-3">
      <Row form>
        <Col md={{size: 9, offset: 3}}>
          <FormGroup className="mr-md-5 mt-3">
            <Label className={classes.name}>Type</Label>
            <Row form>
              <Col>
                <Input type="select">
                  <option>File</option>
                </Input>
              </Col>
              <Col>
                <Col md={3}>
                  <CommonButton title="Choose File" buttonType="chooseFileButton" />
                </Col>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
    </Col>
  )
}

export default ResourceOptions
