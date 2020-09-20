import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  addButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  addItemButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 235,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  addCouponButton: {
    marginLeft: 20,
    backgroundColor: '#28bfa3',
    borderColor: '#28bfa3',
    '&:hover': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    '&:focus': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    width: 235,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  addNewAddress: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: '214px',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  saveChangeButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: '100%',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  cancelChangeButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6c6766',
    '&:hover': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    width: '100%',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  addBannerButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginRight: 0,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  addResourceButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  ExpandButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    marginRight: 0,
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    width: 180,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelItemButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6c6766',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    width: 240,
    height: 40,
    fontSize: 13,
  },

  filterButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    width: 119,
    marginRight: 22,
    height: 40,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SFUIText-Bold',
  },
  addfilterButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 119,
    height: 40,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SFUIText-Bold',
  },
  preview: {
    backgroundColor: '#de8b6d',
    borderColor: '#de8b6d',
    '&:hover': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d !important',
    },
    '&:focus': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d !important',
    },
    width: 119,
    height: 40,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SFUIText-Bold',
    marginRight: 22,
  },
  saveButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginRight: 40,
    marginBottom: '5px',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 140,
    height: 43.5,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  saveModalButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 135,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelButton: {
    marginLeft: 20,
    backgroundColor: '#6c6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 235,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  expandButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 180,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  collapseButton: {
    marginLeft: 20,
    backgroundColor: '#6c6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 180,
    height: 44,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  chooseButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6C6766',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
    width: '100%',
  },
  addconfirmButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
    width: '100%',
  },
  chooseFileButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6C6766',
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  cancelModalButton: {
    marginLeft: 30,
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 130,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  quickAddButton: {
    backgroundColor: '#28bfa3',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 149,
    height: 43.5,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  calculateButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    marginRight: 10,
    marginBottom: '5px',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 170,
    height: 43.5,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  continueButton: {
    backgroundColor: '#E94B35',
    borderColor: '#E94B35',
    '&:hover': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    '&:focus': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  orderButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 236,
    height: 40,
    whiteSpace: 'normal!important',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
    ['@media (max-width:350px)']: {
      width: '100%',
    },
    ['@media (max-width:764px)']: {
      width: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
  orderMakeButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 236,
    height: 40,
    whiteSpace: 'normal!important',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
    ['@media (max-width:350px)']: {
      width: '100%',
    },
    ['@media (max-width:764px)']: {
      width: '100% !important',
      marginLeft: '20px',
      marginRight: '20px',
      height: '40px !important',
    },
    ['@media (max-width:874px)']: {
      height: 80,
      width: '85%',
      fontSize: 14,
    },
    ['@media (max-width:1544px)']: {
      height: 80,
    },
  },
  refundButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 160,
    height: 40,
    fontSize: 14,
    marginRight: 10,
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
  },
  addpayButton: {
    backgroundColor: '#28bfa3',
    borderColor: '#28bfa3',
    '&:hover': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    '&:focus': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    width: 160,
    height: 40,
    marginLeft: 10,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
  },
  exportItmButton: {
    backgroundColor: '#de8b6d',
    borderColor: '#de8b6d',
    '&:hover': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d',
    },
    '&:focus': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  payOwnerButton: {
    borderRadius: '25px',
    backgroundColor: '#6c6766',
    borderColor: '#6c6766',
    '&:hover': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766',
    },
    '&:focus': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766',
    },
    width: 160,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
})

const CommonButton = (props) => {
  const {title, onClick, buttonType, wrapperClass, ...more} = props
  const classes = useStyles()
  return (
    <Button onClick={onClick} className={`${classes[buttonType]} ${wrapperClass}`} {...more}>
      {title}
    </Button>
  )
}

CommonButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
}

CommonButton.defaultProps = {
  wrapperClass: '',
}

export default CommonButton
