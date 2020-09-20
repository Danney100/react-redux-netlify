import React, {useState} from 'react'
import {Row, Col, Card, Collapse, Label, Input, FormGroup, Form} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
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
              <p className={classes.title}>Graphical Genealogy</p>
              <hr className={classes.border} />
            </div>
              <Form className="d-flex justify-content-start">
                <Col lg={6}>
                  <FormGroup row>
                    <Label for="name" md={3} className="text-md-right label">
                      Downline Type
                    </Label>
                    <Col md={7}>
                      <Input type="select"></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="description" md={3} className="text-md-right label">
                      Donwline Consultant
                    </Label>
                    <Col md={7}>
                      <Input type="select"></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="url" md={3} className="text-md-right label"></Label>
                    <Col md={7}>
                      <FormGroup row>
                        <Col md={6} className="mt-2">
                          <CommonButton title="Expand All" buttonType="chooseButton" />
                        </Col>
                        <Col md={6} className="mt-2">
                          <CommonButton title="Collapse All" buttonType="chooseButton" />
                        </Col>
                      </FormGroup>
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
