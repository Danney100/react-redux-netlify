import React from 'react'
import {makeStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'

import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  modal: {
    '& .modal-title': {
      fontFamily: 'Oswald-Semibold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .modal-key': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      fontStretch: 'normal',
      color: '#403839',
    },
    '& .modal-value': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      fontStretch: 'normal',
      color: '#6c6766',
    },
    '& .modal-content': {
      margin: 'auto',
      width: '80%',
    },
  },
})

const CompensationModel = (props) => {
  const {modal, toggle} = props
  const classes = useStyles()
  return (
    <Modal isOpen={modal} toggle={toggle} className={classes.modal}>
      <ModalHeader toggle={toggle}>Compensation Run Details</ModalHeader>
      <ModalBody className="pt-0">
        <hr />
        {props.children}
        <div className="d-flex justify-content-end mt-3">
          <CommonButton onClick={toggle} title="Close" buttonType="cancelButton" />
        </div>
      </ModalBody>
    </Modal>
  )
}

CompensationModel.propTypes = {
  children: PropTypes.node,
  modal: PropTypes.bool,
  toggle: PropTypes.func,
}

export default CompensationModel
