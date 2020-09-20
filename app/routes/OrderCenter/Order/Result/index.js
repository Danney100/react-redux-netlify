import React, {useState} from 'react'
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  ListGroup,
  FormGroup,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
} from 'reactstrap'
import CommonDemo from 'routes/components/CommonDemo'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import ResultTable from './ResultTable'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import Pagination from './Pagination'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 16,
    color: '#423b3c',
  },
  modelTitle: {
    fontSize: 22,
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  modelLabel: {
    fontSize: 12,
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  modelText: {
    fontFamily: 'SFUIText-Semibold',
  },
  modalSize: {
    width: '332px',
    height: '416px',
  },
})

export const Results = ({searchResults}) => {
  const classes = useStyles()

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div className="p-3">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Filter</ModalHeader>
        <ModalBody>
          <Form className="mb-5">
            <FormGroup>
              <Label for="input" sm={12} className={classes.modelLabel}>
                Tasting Name
              </Label>
              <Col sm={12}>
                <Input type="select">
                  <option>Select</option>
                  <option>Is Host Order</option>
                  <option>Order Customer ID</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Filter Rule
              </Label>
              <Col sm={12}>
                <Input type="select">
                  <option>Select</option>
                  <option>Contains</option>
                  <option>Is In</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Filters
              </Label>
              <Col sm={12}>
                <Input type="select">
                  <option>Fill Order</option>
                  <option>Yes</option>
                  <option>392429</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Col className="d-flex justify-content-end">
            <CommonButton title="Cancel" buttonType="cancelModalButton" onClick={toggle} />
            <CommonButton title="Save" buttonType="saveModalButton" onClick={toggle} />{' '}
          </Col>
        </ModalFooter>
      </Modal>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <div className="ml-4 mr-4 mb-2 py-2 text-white rounded-top mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div className="mt-3">
                  <span className={classes.title}>Results</span>
                </div>
                <div>
                  <CustomSearch className="mr-3" />
                </div>
              </CardTitle>
            </div>
            <div>
              <ListGroup>
                <CommonDemo
                item="success"
                  content="The search feature allows users to locate orders using an intelligent search based on various fields that are associated with the order. Additional search filters are available to narrow the search results. Matching orders will be shown below in the results table and can be selected for more details."
                  contentOne="Feature Guide Link "
                  contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
                />
                <CommonDemo
                  item="warning"
                  content="The search results have been limited. There may be additional records that meet the search criteria. Please narrow your search criteria."
                />
                <ResultTable data={searchResults} />
                <Pagination />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Results.propTypes = {
  searchResults: PropTypes.array,
}

export default Results
