import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

import EditTasting from './EditTasting'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})
const CreateTasting = () => {
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const history = useHistory()
  const classes = useStyles()
  const [content, setContent] = useState('')
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Tastings > Tasting Manager > Create or Edit a Tasting')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Tasting Management</p>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="Creating or Editing a party allows the user to enter all the details regarding the party directly into the consultant portal. Users will enter who the party is for, party details, and an address for the party from the host(ess) record. Order Shipping Options is used to determine if a customer entering an order for this party through the website can ship to themselves or the host(ess)."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <EditTasting />
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <CommonButton
            title="Cancel"
            onClick={() => routeChange('/tasting/tastingmanager')}
            buttonType="cancelButton"
          />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default CreateTasting
