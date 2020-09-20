import React, {useContext, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import Name from './components/Name'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import MailingAddress from './components/MailingAddress'
import ContactInfo from './components/ContactInfo'
import OtherInfo from './components/OtherInfo'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 32,
    fontFamily: 'DINCondensed-Bold',
  },
})

const CustomerEdit = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Customer Center > Edit Customer')
  }, [])

  return (
    <div className="p-2">
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 3}} className="d-flex align-items-center">
          <p className={classes.title}>Edit Customer</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton title="Demo Data" buttonType="saveButton" />
          <CommonButton title="Translate" buttonType="saveButton" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Name />
          <MailingAddress />
          <ContactInfo />
          <OtherInfo />
          <Row className="d-flex justify-content-end mb-5">
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton title="Cancel" buttonType="cancelItemButton" />
            </Col>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton title="Save Customer" buttonType="addItemButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerEdit
