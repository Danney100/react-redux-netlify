import React from 'react'
import {Row, Col, Card, Modal, CardBody} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {useSelector} from 'react-redux'

import * as util from 'helpers/util'
import {updateVariationType, createVariationType} from 'api'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import AddVariationForm from './components/AddVariationForm'
import {useParams} from 'react-router'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .card': {
      boxShadow: 'none',
    },
    '& .label': {
      fontFamily: 'SFUIText-Bold',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
    '& .required': {
      fontFamily: 'SFUIText-Bold',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#e94b35',
    },
    '& .btnCancelConfig': {
      height: '40px',
      width: '180px',
    },
    '& .btnConfig': {
      height: '40px',
      width: '100px',
    },
  },
})

const AddVariationType = ({modal, toggle, variation, setVariation, requestData}) => {
  const classes = useStyles()

  const {register, handleSubmit, errors} = useForm()
  const token = useSelector(({user}) => user.get('token'))

  const {id} = useParams()

  const saveVariationType = (data) => {
    const payload = {
      token: token,
      data: data,
      id: id,
    }
    // if (id) {
    //   updateVariationType(payload)
    //     .then((res) => {
    //       if (!res?.hasError) {
    //         util.showInfoNotification('Variation Type updated successfully')
    //         requestData()
    //         toggle()
    //       } else {
    //         util.showErrorNotification('Failed to update Variation Type')
    //       }
    //     })
    //     .catch((err) => console.log(err))
    // } else {
    //   createVariationType(payload)
    //     .then((res) => {
    //       if (!res?.hasError) {
    //         util.showInfoNotification('Variation Type created successfully')
    //         requestData()
    //         toggle()
    //       } else {
    //         util.showErrorNotification('Failed to create Variation Type')
    //       }
    //     })
    //     .catch((err) => console.log(err))
    // }
  }

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={`${classes.root} mx-4 mx-sm-auto`}
      style={{minWidth: '50%'}}>
      <Card>
        <CardBody>
          <span className="sub-title">Add / Edit Variation Type</span>
          <hr />
          <CommonDemo
            wrapperClass="mx-0"
            content="The variation setup interface within the product center allows users to 
                configure any variations types that will be available during product configuration. 
                Variations are used to setup varying item attributes such as color, size, etc."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <AddVariationForm variation={variation} setVariation={setVariation} register={register} />
          <Row>
            <Col className="d-flex justify-content-lg-end mb-2">
              <CommonButton
                title="Cancel"
                buttonType="cancelButton"
                onClick={toggle}
                width={180}
                height={40}
                wrapperClass="btnCancelConfig ml-0"
              />
            </Col>
            <Col sm="auto" className="d-flex justify-content-lg-end">
              <CommonButton
                title="Save"
                buttonType="addButton"
                wrapperClass="ml-0"
                onClick={handleSubmit(saveVariationType)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Modal>
  )
}

AddVariationType.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  variation: PropTypes.object,
  setVariation: PropTypes.func,
  requestData: PropTypes.func,
}

export default AddVariationType
