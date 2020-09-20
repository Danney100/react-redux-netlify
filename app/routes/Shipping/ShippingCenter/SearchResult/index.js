import React from 'react'
import {Row, Col, Card, CardBody, Input, CardTitle} from 'reactstrap'
import Demos from './components/Demos'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    borderColor: 'white',
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="text-dark font-weight-bold">Search Results</span>
                </div>
                <div>
                  <Input placeholder="Search" className={classes.input}></Input>
                </div>
              </CardTitle>
            </CardBody>
            <Demos />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SearchResult
