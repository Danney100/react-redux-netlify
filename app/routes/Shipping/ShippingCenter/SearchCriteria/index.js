import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Label,
  ListGroup,
  CardTitle,
  Input,
  Button,
  Collapse,
  ListGroupItem,
} from 'reactstrap'
import {Media} from 'reactstrap'
import {FormGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import FilterItems from './components/FilterItems'
import CreateButton from './components/CreateButton'

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

export const SearchCriteria = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(true)
  const [orGroupCount, setOrGroupCount] = useState(0)
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Shipping Center')
  }, [])

  const toggleOpen = () => setIsOpen(!isOpen)
  const AddOrGroup = () => {
    setOrGroupCount((prevState) => prevState + 1)
  }

  const renderOrGroups = () => {
    const groups = []
    for (let i = 0; i < orGroupCount; i++) {
      groups.push(
        <Row form className="mx-2 mt-3">
          <Col sm={{size: 3, offset: 1}}>
            <Row>
              <Col sm="3" className="mb-1">
                <Button color="light" className="rounded-circle mr-2">
                  <i className="fa fas fa-times"></i>
                </Button>
              </Col>
              <Col sm="9">
                <FormGroup>
                  <Input type="text" name="select" id="exampleSelect" />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg={{size: 2}}>
            <FormGroup>
              <Input
                type="text"
                name="select"
                id="exampleSelect"
                className={classes.radiusButton}
              />
            </FormGroup>
          </Col>
          <Col lg={{size: 2}}>
            <FormGroup>
              <Input type="text" name="select" id="exampleSelect" />
            </FormGroup>
          </Col>
        </Row>,
      )
    }
    return groups
  }

  return (
    <div>
      <CreateButton />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
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
                <Row form className="mx-2 pb-4 border-bottom">
                  <Col xl={{size: 1}} className="mt-2 d-flex align-items-center">
                    <Label className="text-dark">New Filter</Label>
                  </Col>
                  <Col xl={{size: 3}} className="mt-2 rounded-circle">
                    <Input type="select">
                      <option>Date Created</option>
                    </Input>
                  </Col>
                  <Col xl={{size: 2}} className="mt-2">
                    <Input type="select" className={classes.radiusButton}>
                      <option>Between</option>
                    </Input>
                  </Col>
                  <Col xl={{size: 2}} className="mt-2">
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                    />
                  </Col>
                  <Col
                    xl={{size: 1}}
                    className="mt-2 d-flex align-items-center justify-content-center">
                    <Label>And</Label>
                  </Col>
                  <Col xl={{size: 2}} className="mt-2">
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                    />
                  </Col>
                  <Col xl={{size: 1}} className="mt-2 d-flex justify-content-end">
                    <Button onClick={AddOrGroup} className={classes.addButton}>
                      Add Filter
                    </Button>
                  </Col>
                </Row>
                <FilterItems />
                {renderOrGroups()}
                <Row className="mx-0 mb-3">
                  <Col lg={{size: 3, offset: 9}} className="d-flex justify-content-between">
                    <Button className={classes.resetButton}>Reset</Button>
                    <Button className={classes.searchButton} color="info">
                      Search
                    </Button>
                  </Col>
                </Row>
              </ListGroup>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
