import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {makeStyles} from '@material-ui/styles'
import {Form, FormGroup, Input, Button, Label, EmptyLayout, Col, Row} from 'components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'

import {HeaderAuth} from 'routes/components/Pages/HeaderAuth'
import ScoutImage from '../ScoutImage'

const useStyles = makeStyles({
  root: {
    marginLeft: '-1.68em',
    '& .imgCol': {
      position: 'relative',
    },
  },
  input: {
    color: '#a09d9d',
    backgroundColor: '#f7f7f7',
    borderRadius: ' 2px',
    border: 'solid 1px #a09d9d',
  },
  button: {borderRadius: '5px', backgroundColor: '#423b3c', fontSize: '16px', fontWeight: 500},
})

const ForgotPassword = () => {
  const classes = useStyles()
  const recaptchaRef = React.useRef()
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync()
  }

  const history = useHistory()
  const routeChange = () => {
    let path = '/login'
    history.push(path)
  }

  return (
    <Row className={classes.root}>
      <ScoutImage />
      <Col>
        <EmptyLayout>
          <EmptyLayout.Section center>
            <h6 onClick={routeChange}>
              <FontAwesomeIcon icon={faChevronLeft} className="mr-1" />
              back
            </h6>
            <HeaderAuth title="Forgot Password" />
            <p className="h3 font-weight-bold">Forgot Your Password?</p>
            <p>Enter your email.</p>
            <Form className="mb-3">
              <FormGroup>
                <Label for="emailAdress" className="h6 inputLabel font-weight-bold">
                  Username
                </Label>
                <Col sm={10} className="p-0">
                  <Input
                    type="email"
                    name="email"
                    id="emailAdress"
                    placeholder="Username"
                    className={classes.input}
                  />
                </Col>
              </FormGroup>
              <FormGroup onSubmit={onSubmitWithReCAPTCHA}>
                <ReCAPTCHA
                  className="g-recaptcha"
                  ref={recaptchaRef}
                  sitekey="6LeIfSUUAAAAAIVrphLRVDmMIGfuNhzEIhSd2tL5"
                />
              </FormGroup>
              <FormGroup>
                <Col sm={10} className="p-0">
                  <Button className={`${classes.button} border-0`} block>
                    EMAIL LINK
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </EmptyLayout.Section>
        </EmptyLayout>
      </Col>
    </Row>
  )
}

export default ForgotPassword
