import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'

import AppContext from 'components/App/AppContext'
import BasicInfo from '../components/BasicInfo'
import ApplicationConditions from '../components/ApplicationConditions'
import PayoutSettings from '../components/PayoutSettings'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .card-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      fontStretch: 'condensed',
      color: '#403839',
    },
    '& .active': {
      color: '#de8b6d',
    },
    '& .inactive': {
      color: '#403839',
      fontSize: '14px',
    },
    '& .input-label': {
      fontFamily: 'SFUIText-Bold',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#403839',
    },
  },
})

const NewSkyWalletPayout = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Compensation > Sky Wallet Payouts > New Sky Wallet Payout Method')
  }, [])

  const history = useHistory()

  const changeRoute = () => {
    history.push('/compensation/sky-wallet-payouts')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-3`}>
      <span className="title">Process Sky Wallet Payouts</span>
      <BasicInfo />
      <PayoutSettings />
      <ApplicationConditions />
      <Row className="my-3">
        <Col className="d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" onClick={changeRoute} />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default NewSkyWalletPayout
