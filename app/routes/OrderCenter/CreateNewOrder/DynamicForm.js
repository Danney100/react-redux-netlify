import React from 'react'
import {Col, Label, Input, FormGroup} from 'reactstrap'
import PropTypes from 'prop-types'
import {useWatch, Controller} from 'react-hook-form'
import bodybuilder from 'bodybuilder'
import Async from 'react-select/async'
import {useSelector} from 'react-redux'

import {states} from '../CreatePerson/components/state'
import {searchCustomers, searchConsultants} from 'api'

const DynamicForm = ({classes, control, register}) => {
  const token = useSelector(({user}) => user.get('token'))
  const status = useWatch({
    control,
    name: 'status',
    defaultValue: 'new',
  })

  const subjectType = useWatch({
    control,
    name: 'subjectType',
    defaultValue: 'customer',
  })

  const loadAsyncOptions = (inputValue) => {
    return new Promise((resolve) => {
      const body = bodybuilder()
        .orQuery('wildcard', 'id', `*${inputValue}*`)
        .orQuery('wildcard', 'username', `*${inputValue}*`)
        .build()

      const paylaod = {
        data: {
          query: body['query'],
        },
        token,
      }

      if (subjectType === 'customer') {
        resolve(
          searchCustomers(paylaod).then((_) => {
            const {hits} = _.hits
            const filtered = hits.map((hit) => {
              return {
                value: hit._source.id,
                label: hit._source.username,
              }
            })
            return filtered
          }),
        )
      }
      resolve(
        searchConsultants(paylaod).then((_) => {
          const {hits} = _.hits
          const filtered = hits.map((hit) => {
            return {
              value: hit._source.id,
              label: hit._source.username,
            }
          })
          return filtered
        }),
      )
    })
  }

  if (status === 'existing') {
    return (
      <FormGroup row>
        <Label md={2} className={classes.item}>
          Subject
        </Label>
        <Col md={7}>
          <Controller
            control={control}
            name="subjectValue"
            defaultValue=""
            as={<Async isClearable name="search" loadOptions={loadAsyncOptions} />}
          />
        </Col>
      </FormGroup>
    )
  }

  return (
    <>
      <FormGroup row>
        <Label md={2} className={classes.item}>
          Customer Status
        </Label>
        <Col md={7}>
          <Input type="select">
            <option defaultValue=""></option>
            <option>Active</option>
            <option>InActive</option>
            <option>Cancelled</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} className={classes.item}>
          Classcification
        </Label>
        <Col md={7}>
          <Input type="select">
            <option defaultValue=""></option>
            <option>Retail</option>
            <option>Preferred</option>
            <option>Guest</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} className={classes.item}>
          Country
        </Label>
        <Col md={7}>
          <Input type="select">
            <option defaultValue="">United States</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} className={classes.item}>
          State
        </Label>
        <Col md={7}>
          <Input type="select">
            {states.map((state, index) => {
              return (
                <option key={index} value={state.value}>
                  {state.label}
                </option>
              )
            })}
          </Input>
        </Col>
      </FormGroup>
    </>
  )
}

DynamicForm.propTypes = {
  classes: PropTypes.object,
  control: PropTypes.any,
  register: PropTypes.any,
}

export default DynamicForm
