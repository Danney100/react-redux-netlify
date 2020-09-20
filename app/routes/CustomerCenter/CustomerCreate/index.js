import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'components'
import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import DemoData from './components/DemoData.json'
import ConfirmAddressModal from './components/ConfirmAddressModal'
import {customerSignup} from 'api'
import * as util from 'helpers/util'
import {createCustomerAddress, editCustomer} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import {useHistory} from 'react-router-dom'

import Name from './components/Name'
import MailingAddress from './components/MailingAddress'
import ContactInfo from './components/ContactInfo'
import OtherInfo from './components/OtherInfo'
import CreditCard from './components/CreditCard'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 32,
    fontFamily: 'DINCondensed-Bold',
  },
})

const CustomerCreate = props => {
  const user = useSelector(({user}) => user)
  const [edit, setEdit] = useState(false)
  const [demoTrigger, setDemoTrigger] = useState(false)
  const [modalTrigger, setModalTrigger] = useState(false)
  const [redirect, setRedirect] = useState(true)
  const {register, errors, handleSubmit, getValues, reset} = useForm()
  const editData = props.location.stage
  const history = useHistory()
  const dispatch = useDispatch()

  let desPath = '/customer-center'

  const handleEdit = () => {
    setModalTrigger(true)
  }

  const createCustomer = () => {
    setRedirect(true)
    setModalTrigger(true)
  }

  const createCustomerAndStay = () => {
    setModalTrigger(true)
  }

  const handleEditCustomer = (addressPayload) => {
    editCustomer(addressPayload).then((res) => {
      if (!res?.hasError) {
        reset()
        util.showInfoNotification('customer created successfully')
        if (redirect) {
          history.push(desPath)
        }
      } else {
        util.showErrorNotification(res.response.data.message)
      }
    })
  }

  const handleCreateNewCustomer = (addressPayload) => {
    createCustomerAddress(addressPayload).then((res) => {
      if (!res?.hasError) {
        reset()
        util.showInfoNotification('customer created successfully')
        if (redirect) {
          history.push(desPath)
        }
      } else {
        util.showErrorNotification(res.response.data.message)
      }
    })
  }

  const handleAddNewCustomer = (data) => {
    for (const key in data) {
      key === 'confirm_password' && delete data[key]
    }
    const token = user.get('token')
    setModalTrigger(!modalTrigger)

    data['ssn'] = parseInt(data['ssn'])

    let shipping_address = {
      ...data.shipping_address,
      first_name: data.first_name,
      last_name: data.last_name,
      company_name: data.company_name,
    }

    dispatch(setLoadingStatus(true))
    customerSignup(data)
      .then((res) => {
        if (!res?.hasError) {
          const addressPayload = {
            customerID: res.id,
            data: shipping_address,
            token: token,
          }
          if (editData) handleEditCustomer(addressPayload)
          else handleCreateNewCustomer(addressPayload)
          
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .then(() => {
        dispatch(setLoadingStatus(false))
      })
      .catch((err) => console.log(err))
  }

  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  const routeChange = (path) => {
    history.push(path)
  }
  const handleTitle = () => {
    let title = 'Create Customer'
    if (editData) title = 'Edit Customer'
    return title
  }
  useEffect(() => {
    if (editData) setEdit(true)
    setTitle(`Customer Center > ${handleTitle()}`)
  }, [])

  return (
    <div className="p-2">
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 4}} className="d-flex align-items-center">
          <p className={classes.title}>{handleTitle() + `${editData ? ` ${editData.username}` : ''}`}</p>
          
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          {!editData && (
            <CommonButton
              onClick={() => setDemoTrigger(!demoTrigger)}
              title="Demo Data"
              buttonType="saveButton"
            />
          )}
          <CommonButton
            onClick={() => routeChange('/customer-center/customer-create/translate')}
            title="Translate"
            buttonType="saveButton"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Name
            DemoData={DemoData.Name}
            editData={edit}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <MailingAddress
            DemoData={DemoData.MailingAddress}
            editData={edit}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <ContactInfo
            DemoData={DemoData.ContactInfo}
            editData={edit}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <OtherInfo
            DemoData={DemoData.OtherInfo}
            editData={edit}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
            getValues={getValues}
          />
          {
            !editData && (
              <CreditCard DemoData={DemoData.CreditCard} demoTrigger={demoTrigger} />
            )
          }
          <ConfirmAddressModal
            trigger={modalTrigger}
            setModalTrigger={setModalTrigger}
            getValues={getValues}
            handleSubmit={handleSubmit}
            handleAddNewCustomer={handleAddNewCustomer}
          />
          <div className="d-flex flex-column flex-sm-row justify-content-end mb-5">
            <CommonButton title="Cancel" buttonType="cancelItemButton" onClick={() => {history.push(desPath)}}/>
            {
              editData ? (
                <CommonButton
                  onClick={handleSubmit(handleEdit)}
                  title="Save Customer"
                  buttonType="addItemButton"
                />
              ) : (<>
                <CommonButton
                  onClick={handleSubmit(createCustomerAndStay)}
                  title="Save and Add Another"
                  buttonType="addItemButton"
                />
                <CommonButton
                  onClick={handleSubmit(createCustomer)}
                  title="Save New Customer"
                  buttonType="addItemButton"
                />
              </>)
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

CustomerCreate.propTypes = {
  location: PropTypes.object,
}

export default CustomerCreate
