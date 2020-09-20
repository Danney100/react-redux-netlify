import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, ListGroup, Label, CardTitle, Input, Collapse} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

import AppContext from 'components/App/AppContext'
import CreateButton from './components/CreateButton'
import FilterItems from './components/FilterItems'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import {productOptions} from './options'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
  },
})

export const SearchCriteria = ({
  register,
  filters,
  clearFilter,
  resetFilters,
  handleSearch,
  handleSubmit,
  applyFilter,
}) => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(true)

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Product Center')
  }, [])

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <CreateButton />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary text-white rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <i className="fa fas fa-search text-white"></i>
                  <span className="big ml-1 text-white">Search Criteria</span>
                </div>
                <div className="d-flex text-white" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <CommonDemo
                  item="success"
                  content="The search feature allows users to search based on various fields that are associated with chosen center. This search feature allows users to run generic searches or if desired they can build complex queries with dependent and smart operators."
                  contentOne="Feature Guide Link "
                  contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
                />
                <Row lg={12} md={12} sm={12} xs={12} form className="mx-2 pb-4 border-bottom">
                  <Col xl={{size: 1}} className="mt-2 d-flex align-items-center">
                    <Label className="text-dark">New Filter</Label>
                  </Col>
                  <Col xl={{size: 3}} className="mt-2 rounded-circle">
                    <Input type="select" innerRef={register} name="field">
                      {productOptions.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        )
                      })}
                    </Input>
                  </Col>
                  <Col xl={{size: 2}} className="mx-2 mt-2">
                    <Input
                      type="select"
                      className={classes.radiusButton}
                      innerRef={register}
                      name="operator">
                      <option value="Contains">Contains</option>
                      <option value="Is">Is</option>
                    </Input>
                  </Col>
                  <Col xl={{size: 4}} className="mt-2 mx-2">
                    <Input type="text" placeholder="Value" innerRef={register} name="value" />
                  </Col>
                  <Col className="mt-2 mx-2 d-flex justify-content-end">
                    <CommonButton
                      onClick={handleSubmit(applyFilter)}
                      title="Add Filter"
                      buttonType="filterButton"
                    />
                  </Col>
                </Row>
                <FilterItems filters={filters} clearFilter={clearFilter} />
              </ListGroup>
            </Collapse>
          </Card>
          <Row>
            <Col lg={{size: 3, offset: 9}} className="mb-3 d-flex justify-content-end">
              <CommonButton onClick={resetFilters} title="Reset" buttonType="cancelButton" />
              <CommonButton onClick={handleSearch} title="Search" buttonType="addItemButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  register: PropTypes.func,
  applyFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  filters: PropTypes.array,
  clearFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handleSearch: PropTypes.func,
}

export default SearchCriteria
