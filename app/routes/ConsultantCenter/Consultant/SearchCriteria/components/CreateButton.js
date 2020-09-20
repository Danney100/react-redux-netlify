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
  const classes = useStyles()
  const history = useHistory()
  const routeChange = () => {
    history.push('/consultant-center/consultant-create')
  }

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Consultant center</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton
            title="Add New Consultant"
            onClick={() => routeChange()}
            buttonType="addItemButton"
          />
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
