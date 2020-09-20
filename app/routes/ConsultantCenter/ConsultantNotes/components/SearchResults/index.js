import React, {useState} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Table,
  PaginationItem,
  PaginationLink,
  ListGroup,
  Pagination,
  FormGroup,
  ListGroupItem,
  CardTitle,
  Collapse,
} from 'reactstrap'
import {Media} from 'reactstrap'

export const SearchResults = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Card lg={12} md={12} sm={12} xs={12} className="mb-1">
          <CardBody className="py-2 bg-primary text-white rounded-top">
            <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
              <div>
                <i className="fa fas fa-list text-white"></i>
                <span className="big ml-1 text-white">Search Results</span>
              </div>
              <div className="d-flex text-white" onClick={toggleOpen}>
                <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
              </div>
            </CardTitle>
          </CardBody>
          <Collapse isOpen={isOpen}>
            <ListGroup>
              <ListGroupItem className="border m-3 rounded">
                <Media className="d-flex justify-content-between">
                  <Media left>
                    <span className="fa-stack fa-lg">
                      <i className="fa fad fa-question-circle fa-2x text-warning"></i>
                    </span>
                  </Media>
                  <Media>
                    <span className="text-dark">
                      The search feature allows users to locate consultants using an intelligent
                      search based on various fields that are associated with the consultants.
                      Additional search filters are available to narrow the search results. Matching
                      consultants will be shown below in the results table and can be selected for
                      more details.
                    </span>
                  </Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem className="border mx-3 rounded">
                <Media className="d-flex justify-content-between">
                  <span className="text-dark">
                    The search results have been limited. There may be additional records that meet
                    the search criteria. Please narrow your search criteria.
                  </span>
                </Media>
              </ListGroupItem>
              <div className="border m-3">
                <FormGroup className="pagination justify-content-end">
                  <Input className="mt-2 mr-2 border" placeholder="Search..." style={{width: 200}}>
                    <span className="fa fa-check-circle"></span>
                  </Input>
                </FormGroup>
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th>
                        <span>Consultant Display ID</span>
                      </th>
                      <th>
                        <span>Join Date</span>
                      </th>
                      <th>
                        <span>Company Name</span>
                      </th>
                      <th>
                        <span>First Name</span>
                      </th>
                      <th>
                        <span>Last Name</span>
                      </th>
                      <th>
                        <span></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C100</td>
                      <td>6/30/2017 2:50:35 PM</td>
                      <td>CIDSTC</td>
                      <td>Katie</td>
                      <td>Shadonix</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                <div className="p-1 d-flex justify-content-between">
                  <div className="d-flex">
                    <Pagination
                      size="md"
                      className="pagination justify-content-end"
                      aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink first href="#"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink previous href="#"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">
                          0
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink last href="#"></PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </div>
                  <div>
                    <span>1 - 10 of 500 items</span>
                  </div>
                </div>
              </div>
            </ListGroup>
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

export default SearchResults
