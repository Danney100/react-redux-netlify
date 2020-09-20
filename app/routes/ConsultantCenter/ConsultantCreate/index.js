import React, {useState, useContext, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'

import Name from './components/Name'
import DefaultMailingAddress from './components/DefaultMailingAddress'
import ContactInfo from './components/ContactInfo'
import Identification from './components/Identification'
import OtherInfo from './components/OtherInfo'
import CreditCard from './components/CreditCard'
import DemoData from './components/DemoData.json'
import ConfirmAddressModal from './components/ConfirmAddressModal'
import AppContext from 'components/App/AppContext'
import {createNewConsultant} from 'api'
import {createConsultantAddress} from 'api'
import * as util from 'helpers/util'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  createButton: {
    width: 150,
    marginLeft: 30,
  },
  dis: {
    marginBottom: 40,
    marginTop: 35,
  },
  title: {
    color: '#403839',
    fontSize: 32,
    fontFamily: 'DINCondensed-Bold',
  },
})
const ConsultantCreate = (props) => {
  const classes = useStyles()
  const [demoTrigger, setDemoTrigger] = useState(false)
  const [modalTrigger, setModalTrigger] = useState(false)
  const [redirect, setRedirect] = useState(true)
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const {register, errors, handleSubmit, getValues, reset, control} = useForm({
    defaultValues: {
      JoinDate: moment().format('YYYY-mm-dd h:mm:ss'),
    },
  })
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Consultant Center > Create Consultant')
  }, [])

  const handleSaveNew = () => {
    setModalTrigger(true)
  }

  const handleSaveAnother = () => {
    setRedirect(true)
    setModalTrigger(true)
  }

  const handleAddNewConsultant = (data) => {
    const token = props.user.get('token')
    setModalTrigger(!modalTrigger)

    data['ssn'] = parseInt(data['ssn'])
    data['OptOutCompanyEmail'] = data['OptOutCompanyEmail'] ? 'true' : 'false'
    data['OptOutConsultantEmail'] = data['OptOutConsultantEmail'] ? 'true' : 'false'
    data['date_of_birth'] = moment(data['date_of_birth']).format('YYYY-MM-DD h:mm:ss')
    data['JoinDate'] = data['JoinDate'] ? data['JoinDate'] : moment().format('YYYY-MM-DD h:mm:ss')
    let billing_address = {
      ...data.shipping_address,
      first_name: data.first_name,
      last_name: data.last_name,
      company_name: data.company_name,
    }

    const payload = {
      data: data,
    }
    let path = '/consultant-center'

    createNewConsultant(payload)
      .then((res) => {
        if (!res?.hasError) {
          const addressPayload = {
            consultantId: res.id,
            data: billing_address,
            token: token,
          }
          createConsultantAddress(addressPayload).then((res) => {
            if (!res?.hasError) {
              reset()
              util.showInfoNotification('Consulant created successfully')
              if (redirect) {
                history.push(path)
              }
              history.push(path)
            } else {
              util.showErrorNotification(res.response.data.message)
            }
          })
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
  }

  const checkDateOfBirth = (dateString) => {
    const today = new Date();
	  const birthDate = new Date(dateString);
	  let age = today.getFullYear() - birthDate.getFullYear();
	  const m = today.getMonth() - birthDate.getMonth();
	  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	    age--;
    }
	  return !(age < 21);
  }

  return (
    <div>
      <Row className="d-flex justify-content-between my-3">
        <Col lg={{size: 3}} className="d-flex align-items-center">
          <p className={classes.title}>Create Consultant</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mt-2">
          <CommonButton
            onClick={() => setDemoTrigger(!demoTrigger)}
            title="Demo Data"
            buttonType="saveButton"
          />
          <CommonButton
            onClick={() => routeChange('/consultant-center/consultant-create/translate')}
            title="Translate"
            buttonType="saveButton"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Name
            DemoData={DemoData.Name}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <DefaultMailingAddress
            DemoData={DemoData.DefaultMailingAddress}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
            control={control}
          />
          <ContactInfo
            DemoData={DemoData.ContactInfo}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <Identification
            DemoData={DemoData.Identification}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <OtherInfo
            DemoData={DemoData.OtherInfo}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
            getValues={getValues}
            checkDateOfBirth={checkDateOfBirth}
          />
          <CreditCard
            DemoData={DemoData.CreditCard}
            demotrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <ConfirmAddressModal
            trigger={modalTrigger}
            setModalTrigger={setModalTrigger}
            getValues={getValues}
            handleSubmit={handleSubmit}
            handleAddNewConsultant={handleAddNewConsultant}
          />
          <Row className={`${classes.dis} d-flex justify-content-end`}>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton title="Cancel" buttonType="cancelItemButton" />
            </Col>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton
                title="Save and Add Another"
                buttonType="addItemButton"
                onClick={handleSubmit(handleSaveAnother)}
              />
            </Col>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton
                title="Save New Consultant"
                buttonType="addItemButton"
                onClick={handleSubmit(handleSaveNew)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

ConsultantCreate.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(ConsultantCreate)
