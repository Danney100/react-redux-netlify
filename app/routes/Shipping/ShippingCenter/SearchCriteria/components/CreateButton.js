import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  createButton: {
    width: 250,
  },
})

export const SearchCriteria = () => {
  const classes = useStyles()
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }

  return (
    <div>
      <Row className="d-flex justify-content-between my-3">
        <Col lg={{size: 3}} className="d-flex align-items-center">
          <p className="text-dark font-weight-bold h3">Shipping Center</p>
        </Col>
        <Col lg={{size: 5, offset: 4}}>
          <Row>
            <Col lg="6" className="d-flex justify-content-end mt-2">
              <Button
                onClick={() => routeChange('/shipping-center/processing-queue')}
                color="info"
                className={classes.createButton}>
                View Processing Queue
              </Button>
            </Col>
            <Col lg="6" className="d-flex justify-content-end mt-2">
              <Button
                onClick={() => routeChange('/shipping/create-shipping-file-run')}
                color="info"
                className={classes.createButton}>
                Create New Run
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
