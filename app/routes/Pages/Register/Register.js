import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ToastContainer} from 'react-toastify'

import * as util from 'helpers/util'
import {setSignupInfo} from 'duck/actions/user'
import {setLoadingStatus} from 'duck/actions/process'
import {adminSignup} from 'api'

import {
  Form,
  FormGroup,
  FormText,
  Input,
  CustomInput,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
} from 'components'

import {HeaderAuth} from 'routes/components/Pages/HeaderAuth'
import {FooterAuth} from 'routes/components/Pages/FooterAuth'

const Register = (props) => {
  const [email, setEmail] = useState('vatsal@v.com')
  const [password, setPassword] = useState('secret1234')
  const [username, setUsername] = useState('vatsal')
  const [agree, setAgree] = useState(false)

  const usernameRegex = /^[a-z\d]{5,12}$/i
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  const passwordRegex = /^[#\w@_-]{8,20}$/

  const [touchusername, setTouchUsername] = useState(false)
  const [usernametest, setUsernameTest] = useState(false)
  const [touchemail, setTouchEmail] = useState(false)
  const [touchpassword, setTouchPassword] = useState(false)
  const [emailtest, setEmailTest] = useState(false)
  const [passwordtest, setPasswordTest] = useState(false)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    setUsernameTest(usernameRegex.test(e.target.value))
    setTouchUsername(true)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailTest(emailRegex.test(e.target.value))
    setTouchEmail(true)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordTest(passwordRegex.test(e.target.value))
    setTouchPassword(true)
  }

  const handleSignup = () => {
    props.setLoadingStatus(true) //NOTE: start loading
    const payload = {
      email,
      username,
      password,
    }

    adminSignup(payload)
      .then((res) => {
        console.log('res', res)
        if (res.access) {
          props.setSignupInfo(res.access)
        } else {
          util.showErrorNotification('Signup is failed')
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        props.setLoadingStatus(false)
      })
  }

  return (
    <EmptyLayout>
      <EmptyLayout.Section center width={480}>
        <ToastContainer />
        <HeaderAuth title="Create Account" />
        <Form className="mb-3">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter a Username..."
              className={`bg-white ${touchusername && !usernametest && 'border border-warning'}`}
            />
            {touchusername && !usernametest && <div className="text-warning">Invalid Username</div>}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password..."
              className={`bg-white ${touchpassword && !passwordtest && 'border border-warning'}`}
            />
            {touchpassword && !passwordtest && <div className="text-warning">Invalid Password</div>}
          </FormGroup>

          <FormGroup>
            <Label for="emailAdress">Email Adress</Label>
            <Input
              type="email"
              name="email"
              id="emailAdress"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email..."
              className={`bg-white ${touchemail && !emailtest && 'border border-warning'}`}
            />
            {touchemail && !emailtest && <div className="text-warning">Invalid Email</div>}
            <FormText color="muted">We&amp;ll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup>
            <CustomInput
              type="checkbox"
              id="acceptTerms"
              label="Accept Terms and Privacy Policy"
              inline
              onChange={() => setAgree(!agree)}
            />
          </FormGroup>
          <ThemeConsumer>
            {({color}) => (
              <Button
                color={color}
                block
                onClick={handleSignup}
                disabled={props.process.get('isLoading')}>
                {props.process.get('isLoading') ? (
                  <div>
                    <i className="fa fa-refresh fa-spin mr-2"></i> Loading
                  </div>
                ) : (
                  'Sign Up'
                )}
              </Button>
            )}
          </ThemeConsumer>
        </Form>
        <div className="d-flex mb-5">
          <Link to="/pages/forgot-password" className="text-decoration-none">
            Forgot Password
          </Link>
          <Link to="/pages/login" className="ml-auto text-decoration-none">
            Login
          </Link>
        </div>
        <FooterAuth />
      </EmptyLayout.Section>
    </EmptyLayout>
  )
}

const mapStateToProps = ({process}) => ({process})
const mapDispatchToProps = {setSignupInfo, setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
