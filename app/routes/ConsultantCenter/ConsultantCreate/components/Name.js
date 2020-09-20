import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  input: {
    marginBottom: 50,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
  distance: {
    marginBottom: 30,
  },
})

const Name = (props) => {
  const {register} = props
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>Name</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>First Name*</Label>
              <Input type="text" defaultValue="" name="first_name" innerRef={register} />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Last Name*</Label>
              <Input type="text" defaultValue="" name="last_name" innerRef={register} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Middle Name</Label>
              <Input type="text" defaultValue="" name="middle_name" innerRef={register} />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Nick Name</Label>
              <Input type="text" defaultValue="" name="NickName" innerRef={register} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Company Name</Label>
              <Input
                type="text"
                defaultValue=""
                name="company_name"
                innerRef={register}
                className={classes.input}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

Name.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default Name
