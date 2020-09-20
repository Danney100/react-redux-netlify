import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  CardTitle,
  Button,
  Collapse,
  ListGroupItem,
  Input,
  Label,
  FormGroup,
  Form,
  PaginationItem,
  Pagination,
  PaginationLink,
} from 'reactstrap'
import Select from 'react-select'
import {Media} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import PropTypes from 'prop-types'
import makeAnimated from 'react-select/animated'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import SearchResult from 'routes/ConsultantCenter/ConsultantCreate/components/SearchResult/index'

const ReferenceTranslationsArea = [
  {label: 'Consultant Rank Type', value: 1},
  {label: 'Consultant Status', value: 2},
  {label: 'Consultant Type', value: 3},
]
const StaticTranslationsArea = [
  {label: 'Consultant Create Edit', value: 1},
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
})

export const TransSearchCriteria = (props) => {
  const {register} = props

  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(true)
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Consultant Center > Create Consultant > Translate')
  }, [])

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="text-dark font-weight-bold">Search Criteria</span>
                </div>
                <div className="d-flex text-dark" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <ListGroupItem className={classes.demos}>
                  <Media className="d-flex justify-content-between">
                    <Media>
                      <div className={classes.media}>
                        <i className="fa fas fa-check text-primary"></i>
                      </div>
                    </Media>
                    <Media className="ml-3">
                      <span className="text-dark">
                        The search feature allows users to search based on various fields that are
                        associated with chosen center. This search feature allows users to run
                        generic searches or if desired they can build complex queries with dependent
                        and smart operators.
                        <p>
                          Feature Guide Link <i className="fa fas fa-long-arrow-right"></i>
                        </p>
                      </span>
                    </Media>
                  </Media>
                </ListGroupItem>
                <Form>
                  <FormGroup row>
                    <Label for="input" sm={4} className="d-flex justify-content-end ">
                      Static Translations
                    </Label>
                    <Col sm={5}>
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
                    <Label for="input" sm={4} className="d-flex justify-content-end ">
                      Static Translations Area
                    </Label>
                    <Col sm={5}>
                      <Select
                        components={makeAnimated()}
                        isMulti
                        options={StaticTranslationsArea}
                        styles={customMultiStyles}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="input" sm={4} className="d-flex justify-content-end ">
                      Reference Translations
                    </Label>
                    <Col sm={5}>
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
                    <Label for="input" sm={4} className="d-flex justify-content-end ">
                      Reference Translations Area
                    </Label>
                    <Col sm={5}>
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
            <Col lg={{size: 3, offset: 9}} className="d-flex justify-content-end">
              <Button className={classes.searchButton} color="info">
                Search
              </Button>
            </Col>
          </Row>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="text-dark font-weight-bold">Search Criteria</span>
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
                    <PaginationLink previous href="#">
                      <i className="fa fa-fw fa-angle-left"></i>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#">
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

TransSearchCriteria.propTypes = {
  register: PropTypes.func,
}

export default TransSearchCriteria
