import React from 'react'
import {Row, Col, Card, CardBody, Input, CardTitle, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ResultTable from './components/ResultTable'
import Pagination from './components/Pagination'
import CommonDemo from 'routes/components/CommonDemo'
import {SearchDemo} from 'routes/constants/SearchDemo'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const useStyles = makeStyles({
  input: {
    borderColor: 'white',
  },
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})
const {Result, LinkDemo, Warning} = SearchDemo
export const SearchResult = ({searchResults}) => {
  const classes = useStyles()

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
          <CardBody className="py-3 text-white rounded-top mx-1 border-bottom">
            <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
              <div>
                <span className={classes.title}>Search Results</span>
              </div>
              <div>
                <CustomSearch className="mr-3" />
              </div>
            </CardTitle>
          </CardBody>
          <div>
            <ListGroup>
              <CommonDemo
              item="success"
                content={Result}
                contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
              />
              <CommonDemo content={Warning} item="warning" />
              <ResultTable searchResults={searchResults} />
            </ListGroup>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

SearchResult.propTypes = {
  searchResults: PropTypes.array,
}

export default SearchResult
