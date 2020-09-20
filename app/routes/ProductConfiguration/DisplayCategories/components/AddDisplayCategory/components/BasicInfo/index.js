import React, {useState} from 'react'
import {Row, Col, Card, CardBody, Label, Input, FormGroup, Form} from 'reactstrap'
import PropTypes from 'prop-types'

import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import InsertImage from '../InsertImage'

const BasicInfo = ({register, errors}) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title">Basic Info</span>
        <hr />
        <CommonDemo
          wrapperClass="mx-0"
          content="The edit display category page allows the user to adjust the name and 
                    description of all display categories currently configured. In addition, the 
                    user can adjust the Display In sections and create/edit custom website urls."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
        <InsertImage toggle={toggle} modal={modal} />
        <Form className="d-flex justify-content-center">
          <Col lg={9}>
            <FormGroup row>
              <Label for="name" md={3} className="text-md-right label">
                Name
              </Label>
              <Col md={7}>
                <Input type="text" name="name" innerRef={register({required: true})}/>
                {errors && errors.name ? <span className="text-danger">This field is required</span> : ''}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" md={3} className="text-md-right label">
                Description
              </Label>
              <Col md={7}>
                <Input type="text" name="description" innerRef={register({required: true})} />
                {errors && errors.description ? <span className="text-danger">This field is required</span> : ''}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="url" md={3} className="text-md-right label">
                URL Extension
              </Label>
              <Col md={7}>
                <Input type="text" name="slug" innerRef={register({required: true})}/>
                {errors && errors.slug ? <span className="text-danger">This field is required</span> : ''}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="image" md={3} className="text-md-right label">
                Image URL
              </Label>
              <Col md={7}>
                <Row>
                  <Col className="d-flex flex-row" style={{width: '100%'}}>
                    <div className="w-100">
                      <Input type="text" />
                    </div>
                    <div className="ml-3">
                      <CommonButton
                        title="Choose Image"
                        buttonType="commonButton"
                        onClick={toggle}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </CardBody>
    </Card>
  )
}


BasicInfo.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
}
export default BasicInfo
