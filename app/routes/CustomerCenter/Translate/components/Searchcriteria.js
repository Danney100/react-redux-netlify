import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  CardTitle,
  Collapse,
  Input,
  Label,
  FormGroup,
  Form,
  PaginationItem,
  Pagination,
  PaginationLink,
} from 'reactstrap'
import Select from 'react-select'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import PropTypes from 'prop-types'
import makeAnimated from 'react-select/animated'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import SearchResult from './SearchResult/index'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const ReferenceTranslationsArea = [
  {label: 'Customer Rank Type', value: 1},
  {label: 'Customer Status', value: 2},
  {label: 'Customer Type', value: 3},
]
const StaticTranslationsArea = [
  {label: 'Customer Create Edit', value: 1},
  {label: 'Address', value: 2},
  {label: 'Credit Edit', value: 3},
]
const customMultiStyles = {
  control: (provided) => ({
    ...provided,
    bottom: '0px',
  }),
}
const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
  },
  addButton: {
    backgroundColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
    },
    width: 150,
  },
  resetButton: {
    backgroundColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
    },
    width: 180,
  },
  searchButton: {
    width: 180,
    marginLeft: 20,
  },
  title: {
    color: '#403839',
    fontSize: 32,
    fontFamily: 'DINCondensed-Bold',
  },
  border: {
    borderBottomStyle: 'inset',
    borderBottomWidth: 'thin',
    marginRight: 25,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
  },
  font: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#403839',
  },
  holder: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 12,
    color: '#adaaaa',
  },
  Pagination: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#6c6766',
  },
})

export const SearchCriteria = (props) => {
  const {register} = props

  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(true)
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Customer Center > Create Customer > Translate')
  }, [])

  return (
    <div className="p-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Col lg={{size: 3}} className="d-flex align-items-center">
            <p className={classes.title}>Translation Management</p>
          </Col>
          <Card lg={12} md={12} sm={12} xs={12}>
            <CardBody className={classes.border}>
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className={classes.name}>Search Criteria</span>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <CommonDemo
                  content="The translation manager allows users the ability to modify any language
                  including the default language as needed. The system also includes the
                  ability to bulk translate the same field throughout the entire system within
                  a single action. NOTE: When translating product information, only active
                  products will appear in the transaction manager."
                  contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
                />
                <Form className="mt-3 mb-4">
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={4}
                      className="d-flex justify-content-sm-end justify-content-start mx-sm-0 mx-4 ">
                      <p className={classes.font}>Static Translations</p>
                    </Label>
                    <Col md={{size: 5}} className={`${classes.holder} mx-sm-0 mx-4`}>
                      <Input
                        type="text"
                        name="first_name"
                        defaultValue=""
                        innerRef={register}
                        placeholder="Enter text to search"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={4}
                      className="d-flex justify-content-sm-end justify-content-start mx-sm-0 mx-4 ">
                      <p className={classes.font}>Static Translations Area</p>
                    </Label>
                    <Col md={{size: 5}} className={`${classes.holder} mx-sm-0 mx-4`}>
                      <Select
                        components={makeAnimated()}
                        isMulti
                        options={StaticTranslationsArea}
                        styles={customMultiStyles}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={4}
                      className="d-flex justify-content-sm-end justify-content-start mx-sm-0 mx-4 ">
                      <p className={classes.font}>Reference Translations</p>
                    </Label>
                    <Col md={{size: 5}} className={`${classes.holder} mx-sm-0 mx-4`}>
                      <Input
                        type="text"
                        name="first_name"
                        defaultValue=""
                        innerRef={register}
                        placeholder="Enter text to search"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="input"
                      sm={4}
                      className="d-flex justify-content-sm-end justify-content-start mx-sm-0 mx-4 ">
                      <p className={classes.font}>Reference Translations Area</p>
                    </Label>
                    <Col md={{size: 5}} className={`${classes.holder} mx-sm-0 mx-4`}>
                      <Select
                        components={makeAnimated()}
                        isMulti
                        options={ReferenceTranslationsArea}
                        styles={customMultiStyles}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </ListGroup>
            </Collapse>
          </Card>
          <Row className="mb-3">
            <Col lg={{size: 3, offset: 9}} className="d-flex justify-content-end mt-4 mb-3">
              <CommonButton title="Search" buttonType="saveButton" />
            </Col>
          </Row>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className={classes.border}>
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className={classes.name}>Search Result</span>
                </div>
                <div>
                  <CustomSearch onSearch={() => {}} />
                </div>
              </CardTitle>
            </CardBody>
            <SearchResult />
            <Col className="d-flex justify-content-between">
              <div>
                <Pagination aria-label="Page navigation example" className="ml-2 ">
                  <PaginationItem>
                    <PaginationLink className={classes.Pagination} previous href="#">
                      <i className="fa fa-fw fa-angle-left"></i>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink className={classes.Pagination} href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className={classes.Pagination} href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className={classes.Pagination} href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className={classes.Pagination} next href="#">
                      <i className="fa fa-fw fa-angle-right"></i>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
              <div>
                <span className="align-self-center mr-2 ">1 - 247 of 247 items</span>
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  register: PropTypes.func,
}

export default SearchCriteria
