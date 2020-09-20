import React from 'react'
import {Row, Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

export const Heading = () => {
  const history = useHistory()
  const classes = useStyles()

  const routeChange = () => {
    history.push('/rewards/trigger-option-edit')
  }

  return (
    <Row className="d-flex justify-content-between mt-2 mt-lg-0">
      <Col lg={{size: 6}} className="d-flex align-items-center">
        <p className={`${classes.title} m-0`}>Trigger Options Manager</p>
      </Col>
      <Col lg="6" className="d-flex justify-content-lg-end mb-3">
        <CommonButton
          wrapperClass="ml-0"
          title="Add New Trigger Options"
          buttonType="addItemButton"
          onClick={routeChange}
          height={40}
        />
      </Col>
    </Row>
  )
}

export default Heading
