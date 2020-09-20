import React, {useEffect, useContext, useState} from 'react'
import DefaultPayment from './components/DefaultPayment'
import AddNewPayment from './components/AddNewPayment'
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

const PaymentInformation = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()
  const [showAddress, setShowAddress] = useState(false)

  useEffect(() => {
    setTitle('Profile > Payment Information')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Payment Information</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton
            title="+ Add New Credit/Debit Card"
            buttonType="addNewAddress"
            onClick={() => setShowAddress(!showAddress)}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={12} md={6}>
          <DefaultPayment />
        </Col>
        {showAddress && (
          <Col>
            <AddNewPayment />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default PaymentInformation
