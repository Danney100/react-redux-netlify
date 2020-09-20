import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router'
import {useDispatch, connect} from 'react-redux'
import PropTypes from 'prop-types'

import {setSignupInfo, setTabActive} from 'duck/actions/user'
import {setLoadingStatus} from 'duck/actions/process'
import { createNewAdmin, editAdmin } from 'api'
import { useForm } from 'react-hook-form';
import { showInfoNotification, showErrorNotification } from 'helpers/util'

import {
  Row,
  Col,
  Card,
  Label,
  Button,
  FormGroup,
  Form,
  CustomInput,
} from 'components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import {
  cssHeading,
  cssCard,
  cssCardUpMd,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssCancelButton,
  cssInputBase,
  cssForm2Col,
  cssForm2ColUpSm,
  cssForm2ColUpLg,
  cssSelectInvalid,
} from 'styles/sc-jss-components';
import AdminField from './AdminField'

const CreateNewUser = props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      ...cssInputBase(),
      ...cssBtnBase(),
      ...cssSuccessButton(),
      ...cssCancelButton(),
      ...cssForm2Col(),
      ...cssSelectInvalid(),
      [theme.breakpoints.up('sm')]: {
        ...cssBtnBaseUpSm(),
        ...cssForm2ColUpSm(),
      },
      [theme.breakpoints.up('md')]: {
        ...cssCardUpMd(),
      },
      [theme.breakpoints.up('lg')]: {
        ...cssForm2ColUpLg(),
      },
    },
  }, { name: 'scCreateNewUser' });
  const classes = useStyles();

  const token = props.user.get('token')
  const dispatch = useDispatch()
  const context = useContext(AppContext)
  const {setTitle} = context
  const history = useHistory()
  const editData = props.location.stage

  const setHeading = () => {
    let text = 'Create a New User'
    if (editData) text = 'Edit User'
    return text
  }

  const handleToggleLockedOut = () => {
    if (editData?.lockedOut === 'Yes') return true
    else return false
  }
  
  const [locked_out, setLockedOut] = useState(handleToggleLockedOut())

  useEffect(() => {
    setTitle(setHeading())
  }, [])
  
  const routeChange = () => {
    history.push('/user-management')
    dispatch(setTabActive('Users'))
  }

  const { control, watch, errors, handleSubmit } = useForm({ mode: 'onBlur' });

  const handleCreateNewUser = payload => {
    createNewAdmin(payload)
    .then((res) => {
      if (res.access) {
        dispatch(setSignupInfo(res.access));
        routeChange()
        dispatch(setTabActive('Users'))
        showInfoNotification('User Created Successfully');
      } else {
        console.log(res);
        showErrorNotification(res.response.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      showErrorNotification('Signup is failed');
    })
    .finally(() => {
      dispatch(setLoadingStatus(false));
    })
  }

  const handleEditUser = payload => {
    editAdmin(payload)
    .then((res) => {
      if (res.id) {
        routeChange()
        dispatch(setTabActive('Users'))
        showInfoNotification('User Editing Successfully');
      } else {
        console.log(res);
        showErrorNotification(res.response.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      showErrorNotification('Signup is failed');
    })
    .finally(() => {
      dispatch(setLoadingStatus(false));
    })
  }

  const handleFormSubmit = data => {
    dispatch(setLoadingStatus(true))
    for (const key in data) {
      (key === 'first_name' || key === 'last_name') && (data[key] = data[key].trim());
      (key === 'confirm_password' || data[key] === undefined || data[key] === '') && delete data[key];
      (typeof data[key] === 'object') && (data[key] = data[key].label);
    }
    const payload = {
      data: {
        ...data,
        locked_out,
      },
      token: token,
      adminId: editData ? editData.id : undefined
    }
    if (editData) handleEditUser(payload)
    else handleCreateNewUser(payload)
  }

  return (
    <Form className={ `${classes.root} container` } onSubmit={ handleSubmit(handleFormSubmit) }>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">{setHeading()}</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card rounded-top align-items-lg-center">
            <div className="w-100 pt-2 pt-sm-3 pt-lg-4">
              <AdminField
                data={editData}
                control={control}
                watch={watch}
                errors={errors}
              />
              <FormGroup row>
                <Label sm={3} />
                <Col sm={9} className="sc-form-2col__right">
                  <FormGroup className="sc-form-2col__right__inline mb-3">
                    <CustomInput
                      type="checkbox"
                      id="createNewUserLockedOut"
                      label="Locked Out"
                      defaultChecked={handleToggleLockedOut()}
                      onClick={ (e) => { e.target.checked ? setLockedOut(true) : setLockedOut(false)} }
                      inline
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
            </div>
          </Card>
        </Col>
        <Col className="sc-btn-group sc-btn-group--bottom mb-3 d-flex flex-column flex-sm-row justify-content-sm-between justify-content-md-end" xs={12} lg={12}>
          <Button className="sc-btn sc-btn--cancel sc-btn--w240" color="link" size="lg" onClick={routeChange}>
            Cancel
          </Button>
          <Button
            className="sc-btn sc-btn--success sc-btn--w240"
            color="link"
            size="lg"
            disabled={props.process.get('isLoading')}
          >
            {props.process.get('isLoading') ? (
              <div>
                <i className="fa fa-refresh fa-spin mr-2"></i> Loading
              </div>
            ) : (editData ? 'Save Changes' : 'Create User')}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

CreateNewUser.propTypes = {
  user: PropTypes.object,
  process: PropTypes.object,
  location: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  process: state.process,
})
const mapDispatchToProps = {setSignupInfo, setLoadingStatus, setTabActive}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewUser)
