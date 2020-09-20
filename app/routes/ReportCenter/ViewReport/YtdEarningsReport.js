import React, {useState, useEffect, useContext} from 'react'
import AppContext from 'components/App/AppContext'

import {
  Card,
  CardBody,
  CardTitle,
  Collapse,
  Label,
  Input,
  FormGroup,
  Form,
  Col,
  Button,
  Row,
} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'

function YtdEarnings() {
  const context = useContext(AppContext)
  const {setTitle} = context

  const [isOpen, setIsOpen] = useState(true)

  const [isTableOpen, setIsTableOpen] = useState(true)

  const toggleTableOpen = () => setIsTableOpen(!isTableOpen)

  const toggleOpen = () => setIsOpen(!isOpen)

  useEffect(() => {
    setTitle('YTD Earning')
  }, [])

  const sortIcon = (order) => {
    if (!order) return <i className="fa far fa-sort ml-2 text-secondary"></i>
    else if (order === 'asc') return <i className="fa far fa-sort-up ml-2 text-black"></i>
    else if (order === 'desc') return <i className="fa far fa-sort-down ml-2 text-black"></i>
    return null
  }

  const columns = [
    {
      dataField: 'DisplayID',
      text: 'DisplayID',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'YTDTotal',
      text: 'YTDTotal',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'YTDAdjustments',
      text: 'YTDAdjustments',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'SSN',
      text: 'SSN',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'EIN',
      text: 'EIN',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'FirstName',
      text: 'FirstName',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'LastName',
      text: 'LastName',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'CompanyName',
      text: 'CompanyName',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Street1',
      text: 'Street1',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Street2',
      text: 'Street2',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'City',
      text: 'City',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Province',
      text: 'Province',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'PostalCode',
      text: 'PostalCode',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'CountryCode',
      text: 'CountryCode',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Email',
      text: 'Email',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'PhoneNumber',
      text: 'PhoneNumber',
      sort: true,
      sortCaret: sortIcon,
    },
  ]

  const data = [
    {
      Id: 1,
      DisplayID: '1001',
      YTDTotal: '2',
      YTDAdjustments: '0',
      SSN: '8350',
      EIN: '',
      FirstName: 'Nina',
      LastName: 'Bolin',
      CompanyName: 'Charlie B wine',
      Street1: 'Unit 106',
      Street2: 'Unit 108',
      City: 'Jacksonville Beach',
      Province: 'FL',
      PostalCode: '32250',
      CountryCode: 'USA',
      Email: 'xyz@gmail.com	',
      PhoneNumber: '14777474747',
    },
    {
      Id: 2,
      DisplayID: '1001',
      YTDTotal: '2',
      YTDAdjustments: '0',
      SSN: '8350',
      EIN: '',
      FirstName: 'Nina',
      LastName: 'Bolin',
      CompanyName: 'Charlie B wine',
      Street1: 'Unit 106',
      Street2: 'Unit 108',
      City: 'Jacksonville Beach',
      Province: 'FL',
      PostalCode: '32250',
      CountryCode: 'USA',
      Email: 'xyz@gmail.com	',
      PhoneNumber: '14777474747',
    },
    {
      Id: 3,
      DisplayID: '1001',
      YTDTotal: '2',
      YTDAdjustments: '0',
      SSN: '8350',
      EIN: '',
      FirstName: 'Nina',
      LastName: 'Bolin',
      CompanyName: 'Charlie B wine',
      Street1: 'Unit 106',
      Street2: 'Unit 108',
      City: 'Jacksonville Beach',
      Province: 'FL',
      PostalCode: '32250',
      CountryCode: 'USA',
      Email: 'xyz@gmail.com	',
      PhoneNumber: '14777474747',
    },
    {
      Id: 4,
      DisplayID: '1001',
      YTDTotal: '2',
      YTDAdjustments: '0',
      SSN: '8350',
      EIN: '',
      FirstName: 'Nina',
      LastName: 'Bolin',
      CompanyName: 'Charlie B wine',
      Street1: 'Unit 106',
      Street2: 'Unit 108',
      City: 'Jacksonville Beach',
      Province: 'FL',
      PostalCode: '32250',
      CountryCode: 'USA',
      Email: 'xyz@gmail.com	',
      PhoneNumber: '14777474747',
    },
    {
      Id: 5,
      DisplayID: '1001',
      YTDTotal: '2',
      YTDAdjustments: '0',
      SSN: '8350',
      EIN: '',
      FirstName: 'Nina',
      LastName: 'Bolin',
      CompanyName: 'Charlie B wine',
      Street1: 'Unit 106',
      Street2: 'Unit 108',
      City: 'Jacksonville Beach',
      Province: 'FL',
      PostalCode: '32250',
      CountryCode: 'USA',
      Email: 'xyz@gmail.com	',
      PhoneNumber: '14777474747',
    },
  ]

  return (
    <>
      <Card lg={12} md={12} sm={12} xs={12}>
        <CardBody
          className="py-2 bg-primary text-white rounded-top"
          onClick={toggleOpen}
          style={{cursor: 'pointer'}}>
          <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
            <div>
              <span className="big ml-1 text-white">Criteria</span>
            </div>
            <div className="d-flex text-white">
              <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
            </div>
          </CardTitle>
        </CardBody>
        <Collapse isOpen={isOpen}>
          <div style={{margin: '1rem'}}>
            <Form>
              <FormGroup row>
                <Label for="tex_year" sm={3} className="text-dark text-lg-right">
                  Tax Year
                </Label>
                <Col sm={3}>
                  <Input id="tex_year" type="text"></Input>
                </Col>
              </FormGroup>
            </Form>
            <Col
              xs={{size: 6}}
              md={{size: 6, offset: 3}}
              lg={{size: 6, offset: 3}}
              className="p-0 px-lg-2 px-sm-2">
              <Button color="success">Execute</Button>
            </Col>
          </div>
        </Collapse>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="my-3">
        <CardBody
          className="py-2 bg-primary text-white rounded-top"
          onClick={toggleTableOpen}
          style={{cursor: 'pointer'}}>
          <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
            <div>
              <span className="big ml-1 text-white">Results</span>
            </div>
            <div className="d-flex text-white">
              <i className={isTableOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
            </div>
          </CardTitle>
        </CardBody>
        <Collapse isOpen={isTableOpen}>
          <Row style={{marginLeft: '0rem', marginTop: '1rem'}} className="table-responsive">
            <BootstrapTable keyField="Id" classes="text-black" data={data} columns={columns} />
          </Row>
        </Collapse>
      </Card>
    </>
  )
}

export default YtdEarnings
