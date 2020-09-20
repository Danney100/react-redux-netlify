import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Col, Card, CardBody, CardTitle, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  name: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: '16px',
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
})

const AddNewAddress = (props, checked) => {
  const {register} = props
  const classes = useStyles()
  const [showAddress, setShowAddress] = useState(true)

  return (
    <>
      {showAddress && (
        <Card>
          <CardBody className="py-3 text-white rounded-top mx-2 border-bottom">
            <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
              <div className="mt-3">
                <span className={`${classes.name} mb-0`}>Add New Address</span>
              </div>
            </CardTitle>
          </CardBody>
          <div>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={`${classes.title}`}>Nick Name</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="nick_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>First Name*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="first_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Last Name*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="last_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Company</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="company_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Country*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="select" defaultValue="" name="country_name" innerRef={register}>
                  <option>United States</option>
                </Input>
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Street 1*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="street1_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Street 2</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="street2_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>City*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="city_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>State*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="select" defaultValue="" name="state_name" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-3">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Postal Code*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="postal_code" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-1">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Phone Number*</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="text" defaultValue="" name="phone_number" innerRef={register} />
              </Col>
            </Row>
            <Row form className="mx-5 mt-1">
              <Col sx={12} sm={2} md={2} lg={2}>
                <Label className={classes.title}>Residential</Label>
              </Col>
              <Col sx={12} sm={10} md={10} lg={10}>
                <Input type="select" defaultValue="" name="residential" innerRef={register} />
              </Col>
            </Row>
            <Row form>
              <Col>
                <FormGroup className="mx-3 mt-3 mb-0">
                  <Label className={`${classes.title} mx-5`}>Default</Label>
                  <Input
                    type="checkbox"
                    defaultChecked={checked}
                    name="company_name"
                    innerRef={register}
                  />
                </FormGroup>
                <FormGroup className="mx-3">
                  <Label className={`${classes.title} mx-5`}>Mailing</Label>
                  <Input type="checkbox" defaultValue="" name="company_name" innerRef={register} />
                </FormGroup>
              </Col>
            </Row>
            <Row form className="mb-2 mx-5 mt-0 justify-content-center">
              <Col xs={12} sm={5} className="mb-3 mx-3">
                <CommonButton
                  title="Cancel Change"
                  buttonType="cancelChangeButton"
                  onClick={() => setShowAddress(!showAddress)}
                />
              </Col>
              <Col xs={12} sm={5} className="mx-3">
                <CommonButton title="Save Change" buttonType="saveChangeButton" />
              </Col>
            </Row>
          </div>
        </Card>
      )}
    </>
  )
}

AddNewAddress.propTypes = {
  register: PropTypes.func,
}

export default AddNewAddress
