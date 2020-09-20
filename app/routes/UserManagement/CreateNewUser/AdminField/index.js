import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { getRoles} from 'api'
import { Controller } from 'react-hook-form';

import {
  Col,
  Label,
  Input,
  FormGroup,
  FormFeedback,
} from 'components'
import Select from 'react-select'
import { cssReactSelect } from 'styles/sc-jss-components'

const AdminField = ({user, data, control, watch, errors}) => {
  const token = user.get('token')

  const usernameRegex = /^[a-z\d]{5,12}$/i;
  const passwordRegex = /^.{8,}$/;
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const nameRegex = /.*\S.*/;

  const passwordMatch = (confirmPass) => confirmPass === watch('password')

  const languageOptions = [
    {
      label: 'English',
      value: 1,
    },
  ]

  const countryOptions = [
    {
      label: 'United States',
      value: 1,
    },
  ]

  const [language, setLanguage] = useState([])
  const [country, setCountry] = useState([])
  const [userType, setUserType] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  // handle User Types Select input
  const fetchRoleData = (token) => {
    getRoles(token)
    .then((res) => {
      if (!res?.hasError) {
        const roles = []
        for (let role of res) {
          roles.push({
            id: role.id,
            label: role.name,
            value: role.name,
          })
        }
        setUserType(roles)
        if (language.length && country.length && userType.length) setIsLoading(false)
      }
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    setLanguage(languageOptions)
    setCountry(countryOptions)
    if (token && isLoading) {
      fetchRoleData(token)
    }
  }, [isLoading])
  
  const bindDataDefault = (field) => {
    let value = ''

    if (field.id === 'username') value = data.name
    else if (field.id === 'firstName') value = data.firstName
    else if (field.id === 'lastName') value = data.lastName
    else if (field.id === 'email') value = data.email
    else if (field.id === 'language') value = {label: data.language, value: data.language}
    else if (field.id === 'country') value = {label: data.country, value: data.country}
    else if (field.id === 'userType') value = {label: data.userType, value: data.userType}

    return value
  }

  const formItems = [
    {
      id: 'username',
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Alphanumeric from 5 to 12 characters',
      pattern: usernameRegex,
    },
    {
      id: 'password',
      name: 'password',
      label: `${data ? 'New ' : ''}Password`,
      type: 'password',
      placeholder: 'At least 8 characters',
      pattern: passwordRegex,
    },
    {
      id: 'confirmPassword',
      name: 'confirm_password',
      label: `Confirm${data ? ' New ' : ' '}Password`,
      type: 'password',
      placeholder: 'Retype the password field',
      pattern: passwordRegex,
      validate: {
        name: 'passwordMatch',
        check: passwordMatch,
        error: 'Passwords do not match',
      },
    },
    {
      id: 'firstName',
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      pattern: nameRegex,
    },
    {
      id: 'lastName',
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name',
      pattern: nameRegex,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'anonymous@example.com',
      pattern: emailRegex,
    },
    {
      id: 'language',
      name: 'language',
      label: 'Language',
      options: language,
    },
    {
      id: 'country',
      name: 'country',
      label: 'Country',
      options: country,
    },
    {
      id: 'userType',
      name: 'user_type',
      label: 'User Type',
      options: userType,
    },
  ];

  let formInputs = formItems

  if (data) {
    for (const [i, input] of formItems.entries()) {
      formInputs[i].defaultValue = bindDataDefault(input)
    }
  }

  return (
    <>
      {formInputs.map(group => (
        <FormGroup row key={ group.id }>
          <Label for={ group.id } sm={3} className="text-lg-right">
            { group.label }
          </Label>
          <Col sm={9} className="sc-form-2col__right">
            {
              group.type ? (
                <>
                  <Controller
                    as={ Input }
                    className="sc-input"
                    type={ group.type }
                    id={ group.id }
                    name={ group.name }
                    bsSize="lg"
                    placeholder={ group.placeholder }
                    control={ control }
                    defaultValue={data ? group.defaultValue : ''}
                    autoComplete="off"
                    rules={{
                      required: data && (group.id === 'password' || group.id === 'confirmPassword') ? false : true,
                      pattern: group.pattern ? group.pattern : false,
                      validate: group.validate ? {
                        [group.validate.name]: group.validate.check,
                      } : false,
                    }}
                    invalid={ errors[group.name] ? true : false }
                    aria-required="true"
                    aria-invalid={ errors[group.name] ? true : false }
                  />
                  {errors[group.name]?.type === "required" && (
                    <FormFeedback>{ `${group.label} is mandatory field!` }</FormFeedback>
                  )}
                  {errors[group.name]?.type === "pattern" && (
                    <FormFeedback>{ `${group.label} format is invalid!` }</FormFeedback>
                  )}
                  {group.validate ? errors[group.name]?.type === group.validate.name && (
                    <FormFeedback>{ group.validate.error }</FormFeedback>
                  ) : ''}
                </>
              ) : (
                <div className="sc-form-2col__select-wrapper">
                  <Controller
                    as={ Select }
                    className={`
                      sc-react-select
                      ${errors[group.name] ? 'sc-react-select-invalid is-invalid' : ''}
                    `}
                    styles={ cssReactSelect }
                    name={ group.name ? group.name : '' }
                    isLoading={ !group.options }
                    options={ group.options }
                    isDisabled={ !group.options }
                    control={ control }
                    defaultValue={data ? group.defaultValue : ''}
                    placeholder={ group.placeholder ? group.placeholder : 'Select...' }
                    rules={{ required: true }}
                  />
                  {errors[group.name] && (
                    <FormFeedback>{ `${group.label} is mandatory field!` }</FormFeedback>
                  )}
                </div>
              )
            }
          </Col>
        </FormGroup>
      ))}
    </>
  )
}

AdminField.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object,
  control: PropTypes.object,
  watch: PropTypes.func,
  errors: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(AdminField)