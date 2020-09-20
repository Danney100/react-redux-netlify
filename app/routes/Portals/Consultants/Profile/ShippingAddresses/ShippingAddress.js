import React, {useEffect, useContext, useState} from 'react'
import DefaultAddress from './components/DefaultAddress'
import MailingAddress from './components/MailingAddress'
import AddNewAddress from './components/AddNewAddress'
import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import {Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const ShippingAddress = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()
  const [showAddress, setShowAddress] = useState(false)

  useEffect(() => {
    setTitle('Profile > Shipping Information')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Shipping Information</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton
            title="+ Add New Address"
            buttonType="addNewAddress"
            onClick={() => setShowAddress(!showAddress)}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={12} md={6}>
          <DefaultAddress />
          <MailingAddress />
        </Col>
        {showAddress && (
          <Col>
            <AddNewAddress />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default ShippingAddress
