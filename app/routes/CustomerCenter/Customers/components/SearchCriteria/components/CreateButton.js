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

export const SearchCriteria = () => {
  const history = useHistory()
  const classes = useStyles()
  const routeChange = () => {
    history.push('/customer-center/customer-create')
  }

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Customer center</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton onClick={routeChange} title="Add New Customer" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
