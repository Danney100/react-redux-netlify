import React, {useRef, useState} from 'react'
import {Col, Card, Label, FormGroup, Form, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import CommonButton from 'routes/components/CommonButton'
import JoditEditor from 'jodit-react'
import {CustomInput} from 'components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'Avenir-Heavy',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },

  label: {
    color: '#6c6766',
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
  text: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: '#403839',
    marginLeft: 26,
  },

  sharing: {
    height: '80px',
    marginLeft: '2px',
  },
  description: {
    marginLeft: '60px',
  },
})

const TastingDetails = () => {
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const classes = useStyles()
  const [content, setContent] = useState('')

  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 mr-4 ml-4">
        <div tag="h5">
          <p className={classes.subtitle}>Tasting Details</p>
        </div>
        <Form className="d-flex justify-content-center mt-2">
          <Col lg={6} className="ml-4">
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Tasting Name
              </Label>
              <Col md={8}>
                <Input className={classes.value} placeholder="hello@scoutandcellar.com" />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Time Zone
              </Label>
              <Col md={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Tasting Type
              </Label>
              <Col md={8}>
                <Input />
              </Col>
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Date
              </Label>
              <Col md={8}>
                <Input />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Phone
              </Label>
              <Col md={8}>
                <Input type="select" />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Referring Tasting #
              </Label>
              <Col md={8}>
                <Input type="select" />
              </Col>
            </FormGroup>
          </Col>
        </Form>
        <Form className="d-flex justify-content-start mt-2">
          <Col lg={12} className="ml-3">
            <FormGroup row className="mt-3">
              <Label md={1} className={classes.name}>
                Description
              </Label>
              <Col md={10} className={classes.description}>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                />
              </Col>
            </FormGroup>
          </Col>
        </Form>
        <Form className="mt-2">
          <Col lg={12} className="ml-3 mb-4">
            <FormGroup row className="mt-3">
              <Label md={1} className={classes.name}>
                Sharing Description
              </Label>
              <Col md={10} className={classes.description}>
                <Input className={classes.sharing} />
              </Col>
            </FormGroup>
          </Col>
        </Form>
        <Form className="d-flex justify-content-center mt-2">
          <Col lg={6} className="ml-4">
            <FormGroup row className="mt-3 ">
              <Label md={2} className={classes.name}>
                Event Image
              </Label>
              <Col md={5} className="ml-4">
                <CommonButton title="Select Files" buttonType="addItemButton" />
              </Col>
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup row className="mt-3">
              <Label md={3} className={classes.name}>
                Website Display Options
              </Label>
              <Col md={8} className="mt-2">
                <CustomInput
                  type="checkbox"
                  id="Customer Websites"
                  label="Enabled"
                  className={` ${classes.label} mb-3`}
                />
                <CustomInput
                  type="checkbox"
                  id=" Display Event Address"
                  label="Display Event Address"
                  className={` ${classes.label} mb-3`}
                />
                <CustomInput
                  type="checkbox"
                  id="Display Event Phone Number"
                  label="Display Event Phone Number"
                  className={` ${classes.label} mb-3`}
                />
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </Card>
    </div>
  )
}

export default TastingDetails
