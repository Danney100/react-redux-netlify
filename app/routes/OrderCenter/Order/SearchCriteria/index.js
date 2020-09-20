import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, ListGroup, CardTitle, Input, Label} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import PropTypes from 'prop-types'
import CreateButton from './components/CreateButton'
import {makeStyles} from '@material-ui/core/styles'

import FilterItems from './components/FilterItems'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'

const useStyles = makeStyles({
  title: {
    fontSize: '16px',
    color: '#423b3c',
    fontFamily: 'Oswald-SemiBold',
  },
  filterTitle: {
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
  },
  inputStyle: {
    fontSize: '14px',
    color: '#adaaaa',
    fontFamily: 'SFUIText-Medium',
  },
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
  },
})

export const SearchCriteria = ({
  setForm,
  handleOrderSearch,
  resetFilters,
  register,
  applyFilter,
  handleSubmit,
  filters,
  clearFilter,
}) => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Order Center')
  }, [])

  const OrderInfo = [
    {label: 'Select', value: 'customer.select'},
    {label: 'Is Host Ordeer', value: 'customer.IsHostOrder'},
    {label: 'Order Customer ID', value: 'customer.OrderCustomID'},
    {label: 'Order Customer Username', value: 'customer.name'},
    {label: 'Order Customer Email', value: 'customer.email'},
    {label: 'Address City', value: 'shipping_address.city'},
    {label: 'Address Company Name', value: 'shipping_address.company_name'},
    {label: 'Address Country', value: 'shipping_address.country'},
    {label: 'Address First Name', value: 'shipping_address.first_name'},
    {label: 'Address Last Name', value: 'shipping_address.last_name'},
    {label: 'Address Phone Number', value: 'shipping_address.phone_number'},
    {label: 'Address Postal Code', value: 'shipping_address.postcode'},
    {label: 'Address Province', value: 'shipping_address.county'},
    {label: 'Address Street 1', value: 'shipping_address.line_1'},
    {label: 'Address Street 2', value: 'shipping_address.line_2'},
    {label: 'Order Commissionable', value: 'commissionable'},
    {label: 'Order Consultant ID', value: 'customer.data.id'},
    {label: 'Order Date', value: 'timestamps.created_at'},
    {label: 'Order ID', value: 'id'},
    {label: 'Order Locked', value: 'locked'},
    {label: 'Order Payment Status ID', value: 'payment'},
    {label: 'Original Order ID', value: 'id'},
    {label: 'Shipment Status', value: 'shipping'},
    {label: 'Taxable Total', value: 'meta.display_price.with_tax.amount'},
    {label: 'Total', value: 'meta.display_price.tax.amount'},
  ]

  const handleFieldChange = (selectedOption) => {
    setForm((prevState) => {
      return {
        ...prevState,
        field: selectedOption.value,
      }
    })
  }

  return (
    <div className="p-3">
      <CreateButton />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-4">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5">
                <div>
                  <span className={classes.title}>Criteria</span>
                </div>
              </CardTitle>
            </div>
            <ListGroup className="">
              <CommonDemo
                item="success"
                content="The search feature allows users to search based on various fields that are associated with chosen center. This search feature allows users to run generic searches or if desired they can build complex queries with dependent and smart operators."
                contentOne="Feature Guide Link "
                contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
              />
              <Row lg={12} md={12} sm={12} xs={12} form className="mx-2 pb-4 border-bottom">
                <Col xl={{size: 1}} className="mt-3 d-flex align-items-center">
                  <Label className={`${classes.filterTitle} ml-3`}>New Filter</Label>
                </Col>
                <Col xl={{size: 3}} className={`${classes.inputStyle} mt-2 mr-2`}>
                  <Input
                    type="select"
                    innerRef={register}
                    name="field"
                    onChange={handleFieldChange}>
                    {OrderInfo.map((option, index) => {
                      return (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      )
                    })}
                  </Input>
                </Col>
                <Col xl={{size: 2}} className={`${classes.inputStyle} mt-2`}>
                  <Input
                    innerRef={register}
                    type="select"
                    name="operator"
                    className={classes.radiusButton}>
                    <option value="Contains">Contains</option>
                    <option value="Is">Is</option>
                    {/* <option value="Does Not Contain">Does Not Contain</option>
                    <option value="Starts With">Starts With</option> */}
                  </Input>
                </Col>
                <Col xl={{size: 4}} className={`${classes.inputStyle} mt-2 mx-2`}>
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
          </Card>
          <Row>
            <Col className="mb-3 d-flex justify-content-end">
              <CommonButton onClick={resetFilters} title="Reset" buttonType="cancelButton" />
              <CommonButton onClick={handleOrderSearch} title="Search" buttonType="addItemButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
  handleOrderSearch: PropTypes.func,
  register: PropTypes.func,
  applyFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  filters: PropTypes.array,
  clearFilter: PropTypes.func,
  resetFilters: PropTypes.func,
}

export default SearchCriteria
