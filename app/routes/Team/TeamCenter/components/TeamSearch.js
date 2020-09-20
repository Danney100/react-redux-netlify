import React, {useState} from 'react'
import {Row, Col, Card, Label, Input, FormGroup, Form} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
})
export const TeamSearch = () => {
  const classes = useStyles()

  return (
    <div>
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12}>
            <div tag="h5">
              <p className={classes.title}>Team Search</p>
              <hr className={classes.border} />
            </div>
            <Form className="d-flex justify-content-center mt-2">
              <Col lg={6}>
                <FormGroup row>
                  <Label for="name" md={3} className="text-md-right label">
                    Downline
                  </Label>
                  <Col md={7}>
                    <Input type="select"></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" md={3} className="text-md-right label">
                    Levels
                  </Label>
                  <Col md={7}>
                    <Input type="select"></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="url" md={3} className="text-md-right label">
                    Group By Level
                  </Label>
                  <Col md={7}>
                    <Input type="checkbox" className="ml-0 my-2"></Input>
                  </Col>
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup row>
                  <Label for="description" md={3} className="text-md-right label">
                    Consultant
                  </Label>
                  <Col md={7}>
                    <Input type="select"></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" md={3} className="text-md-right label">
                    Max Results
                  </Label>
                  <Col md={7}>
                    <Input type="text" id="description"></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="url" md={3} className="text-md-right label">
                    Result Per Page
                  </Label>
                  <Col md={7}>
                    <Input type="text" id="url"></Input>
                  </Col>
                </FormGroup>
              </Col>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TeamSearch
