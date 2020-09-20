import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  FormGroup,
  Label,
  Form,
  CardHeader,
  CardBody,
  Input,
} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Map} from 'immutable'
import {useDispatch, useSelector} from 'react-redux'
import {makeStyles} from '@material-ui/styles'

import * as util from 'helpers/util'
import SubscriptionGroup from './SubscriptionGroup'
import AppContext from 'components/App/AppContext'
import {updateJoinOption, createJoinOption} from 'api'
import {setJoinOptionToEdit} from 'duck/actions/productConfiguration'

const useStyles = makeStyles({
  root: {
    '& .checkbox-size': {
      width: '15px',
      height: '15px',
    },
  },
})

const AddJoinOption = () => {
  const classes = useStyles()
  const history = useHistory()
  const {id} = useParams()
  const dispatch = useDispatch()
  const [subscriptionGrpCount, setSubscriptionGrpCount] = useState(1)

  const token = useSelector(({user}) => user.get('token'))
  const joinOption = useSelector(({productConfig}) =>
    productConfig.get('joinOption', Map({})).toJS(),
  )

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    if (id) {
      setTitle('Edit Join Option')
    } else {
      setTitle('Add Join Option')
    }
  }, [])

  const starting_type = [
    {label: '', value: ''},
    {label: 'Consultant', value: 'consultant'},
    {label: 'Circle Consultant', value: 'circle_Consultant'},
  ]

  const starting_rank = [
    {label: '', value: ''},
    {label: 'Consultant', value: 'consultant'},
    {label: 'Senior Consultant', value: 'senior_consultant'},
    {label: 'Executive Consultant', value: 'executive_consultant'},
    // {label: 'Associate Manager', value: 4},
    // {label: 'Senior Manager', value: 5},
    // {label: 'Executive Manager', value: 6},
    // {label: 'Associate Director', value: 7},
    // {label: 'Director', value: 8},
    // {label: 'Senior Director', value: 9},
    // {label: 'Executive Director', value: 10},
    // {label: 'Managing Director', value: 11},
  ]

  const starting_status = [
    {label: '', value: ''},
    {label: 'Active', value: 'active'},
    {label: 'Inactive', value: 'inactive'},
    {label: 'Hold', value: 'hold'},
    {label: 'Suspended', value: 'suspended'},
    // {label: 'Financial Hold', value: 'financial_hold'},
    // {label: 'Cancelled', value: 6},
    // {label: 'Incomplete', value: 7},
  ]

  const routeChange = () => {
    history.push('/join/join-option-manager')
  }

  const addSubscriptionGrp = () => {
    setSubscriptionGrpCount((prevState) => prevState + 1)
  }

  const removeSubscriptionGrp = () => {
    if (subscriptionGrpCount > 0) {
      setSubscriptionGrpCount((prevState) => prevState - 1)
    }
  }

  const renderSubscriptionGroups = () => {
    let grps = []
    for (let i = 0; i < subscriptionGrpCount; i++) {
      grps.push(
        <SubscriptionGroup
          key={i}
          id={i}
          addSubscriptionGrp={addSubscriptionGrp}
          removeSubscriptionGrp={removeSubscriptionGrp}
        />,
      )
    }
    return grps
  }

  const getValue = (fields, field) => {
    let result = fields.filter((value) => value.label === field)
    if (result.length) {
      return result[0].value
    } else {
      return ''
    }
  }

  const {register, handleSubmit, errors, control} = useForm({
    defaultValues: {
      name: id ? joinOption.name : '',
      description: id ? joinOption.description : '',
      hide_payment_options: id
        ? joinOption.hide_payment_options.toLowerCase() === 'true' && true
        : false,
      is_enabled: id ? joinOption.is_enabled.toLowerCase() === 'true' && true : false,
      portal_access: id ? joinOption.portal_access.toLowerCase() === 'true' && true : false,
      replicated_site_active: id
        ? joinOption.replicated_site_active.toLowerCase() === 'true' && true
        : false,
      starting_rank: id ? getValue(starting_rank, joinOption.starting_rank) : '',
      starting_status: id ? getValue(starting_status, joinOption.starting_status) : '',
      starting_type: id ? getValue(starting_type, joinOption.starting_type) : '',
    },
  })

  const saveJoinOption = (data) => {
    console.log(data)
    const payload = {
      token: token,
      data: data,
      id: id,
    }
    if (id) {
      updateJoinOption(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Join Option updated successfully')
            history.push('/join/join-option-manager')
            dispatch(setJoinOptionToEdit({}))
          } else {
            util.showErrorNotification('Failed to update Join Option')
          }
        })
        .catch((err) => console.log(err))
    } else {
      createJoinOption(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Join Option created successfully')
            history.push('/join/join-option-manager')
            dispatch(setJoinOptionToEdit({}))
          } else {
            util.showErrorNotification('Failed to create Join Option')
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className={`${classes.root} container-fluid p-0 mt-2`}>
      <Card>
        <Row className="border text-black m-0 p-2 rounded">
          <Col lg={1} sm={1} xs={2} className="text-center">
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
          </Col>
          <Col sm={11} lg={11} xs={10}>
            <span>
              Join options are constructs that are used to offer products to consultants when they
              join. Fill out the below to define the construct. Under join subscription groups,
              assign products to your join option to make them available to consultants.
            </span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 rounded">
        <CardHeader className="bg-primary text-white">
          <Row>
            <Col lg={6} xs={6} sm={6}>
              Create/Edit Join Option
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="py-2">
          <Form>
            <FormGroup row>
              <Label for="name" sm={4} className="text-dark text-lg-right">
                Join Option Name
              </Label>
              <Col sm={5}>
                <Input type="text" name="name" innerRef={register({required: true})} />
                {errors && errors.name ? (
                  <span className="text-danger">This field is required</span>
                ) : (
                  ''
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={4} className="text-dark text-lg-right">
                Join Option Description
              </Label>
              <Col sm={5}>
                <Input type="textarea" name="description" innerRef={register({required: true})} />
                {errors && errors.description ? (
                  <span className="text-danger">This field is required</span>
                ) : (
                  ''
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="enabled" sm={4} className="text-dark text-lg-right">
                Join Option Enabled
              </Label>
              <Col className="mt-2 pl-4 ml-3">
                <Input
                  type="checkbox"
                  className="checkbox-size"
                  name="is_enabled"
                  innerRef={register}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="payment_options" sm={4} className="text-dark text-lg-right">
                Hide Payment Options
              </Label>
              <Col className="mt-2 pl-4 ml-3">
                <Input
                  type="checkbox"
                  className="checkbox-size"
                  name="hide_payment_options"
                  innerRef={register}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_type" sm={4} className="text-dark text-lg-right">
                Starting Type
              </Label>
              <Col sm={5} className="mt-1">
                <Input type="select" name="starting_type" innerRef={register}>
                  {starting_type.map((option, index) => {
                    return (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    )
                  })}
                </Input>
              </Col>
              <Col sm={{offset: 4}} className="pl-3">
                {errors && errors.starting_type ? (
                  <span className="text-danger">This field is required</span>
                ) : (
                  ''
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_rank" sm={4} className="text-dark text-lg-right">
                Starting Rank
              </Label>
              <Col sm={5} className="mt-1">
                <Input type="select" name="starting_rank" innerRef={register}>
                  {starting_rank.map((rank, index) => {
                    return (
                      <option value={rank.value} key={index}>
                        {rank.label}
                      </option>
                    )
                  })}
                </Input>
              </Col>
              <Col sm={{offset: 4}} className="pl-3">
                {errors && errors.starting_rank ? (
                  <span className="text-danger">This field is required</span>
                ) : (
                  ''
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_status" sm={4} className="text-dark text-lg-right">
                Starting Status
              </Label>
              <Col sm={5} className="mt-1">
                <Input type="select" name="starting_status" innerRef={register}>
                  {starting_status.map((status, index) => {
                    return (
                      <option value={status.value} key={index}>
                        {status.label}
                      </option>
                    )
                  })}
                </Input>
              </Col>
              <Col sm={{offset: 4}} className="pl-3">
                {errors && errors.starting_status ? (
                  <span className="text-danger">This field is required</span>
                ) : (
                  ''
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="site_active" sm={4} className="text-dark text-lg-right">
                Replicated Site Active
              </Label>
              <Col className="mt-2 pl-4 ml-3">
                <Input
                  type="checkbox"
                  className="checkbox-size"
                  name="replicated_site_active"
                  innerRef={register}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="portal_access" sm={4} className="text-dark text-lg-right">
                Portal Access
              </Label>
              <Col className="mt-2 pl-4 ml-3">
                <Input
                  type="checkbox"
                  className="checkbox-size"
                  name="portal_access"
                  innerRef={register}
                />
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3 m-2">
        <Col lg={12} xs={12} sm={12} className="p-0 mt-3">
          <Card>
            <CardHeader className="bg-primary text-white">
              <Row>
                <Col lg={6} xs={6} sm={6}>
                  Join Subscription Groups
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {subscriptionGrpCount === 0 && (
                <Row className="justify-content-center mt-2">
                  <span
                    onClick={addSubscriptionGrp}
                    className="badge badge-light"
                    style={{cursor: 'pointer'}}>
                    Add a Subscription Group
                  </span>
                </Row>
              )}
              {renderSubscriptionGroups()}
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} lg={6} className="mt-3 pl-0">
          <Button color="danger" onClick={routeChange}>
            <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
          </Button>
        </Col>
        <Col xs={6} lg={6} className="text-right mt-3 pr-0">
          <Button color="success" onClick={handleSubmit(saveJoinOption)}>
            <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AddJoinOption
