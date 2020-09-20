import React, {useEffect, useContext} from 'react'
import {Row, Col, Card, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Pagination from './components/TastingManagement/Pagination'
import CommonDemo from 'routes/components/CommonDemo'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import ResultTable from './components/TastingManagement/ResultTable'
import AppContext from 'components/App/AppContext'

const useStyles = makeStyles({
  input: {
    borderColor: 'white',
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
})
export const SearchResult = ({searchResults}) => {
  const classes = useStyles()
  const history = useHistory()
  const context = useContext(AppContext)
  const {setTitle} = context
  const routeChange = () => {
    history.push('/tasting/tastingmanager/create-tasting')
  }
  useEffect(() => {
    setTitle('Tasting > Tasting Manager')
  }, [])
  return (
    <div>
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <CommonDemo
            item="danger"
            wrapperClass="mx-0"
            content="The Tasting manager interface allows consultants to view all their Tastings and current status and details of each. This interface allows the users craete new Tastings, edit existing Tastings, and add orders to Tastings."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <Card lg={12} md={12} sm={12} xs={12} className="p-1">
            <div tag="h5">
              <p className={classes.title}>Basic Info</p>
              <hr className={classes.border} />
            </div>
            <Row className="mr-2 mt-3 d-flex justify-content-between">
              <Col xs={12} sm={2} className="mb-3 d-flex justify-content-start">
                <CustomSearch className="ml-4" />
              </Col>
              <Col xs={12} sm={3} className="mt-2 d-flex justify-content-end">
                <CommonButton
                  title="+ New Tasting"
                  onClick={() => routeChange()}
                  buttonType="addItemButton"
                />
              </Col>
            </Row>
            <div>
              <ListGroup className="p-2">
                <ResultTable />
                <Pagination />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

SearchResult.propTypes = {
  searchResults: PropTypes.array,
}

export default SearchResult
