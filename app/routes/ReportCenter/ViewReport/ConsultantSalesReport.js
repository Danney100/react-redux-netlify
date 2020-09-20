import React, {useState, useEffect, useContext} from 'react'
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
import AppContext from 'components/App/AppContext'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import BootstrapTable from 'react-bootstrap-table-next'

const ConsultantSalesReport = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Consultant Sales Report')
  }, [])

  const [isFormOpen, setIsFormOpen] = useState(true)
  const [isTableOpen, setIsTableOpen] = useState(true)

  const toggleTableOpen = () => setIsTableOpen(!isTableOpen)

  const toggleFormOpen = () => setIsFormOpen(!isFormOpen)

  const paymentStatusOptions = [
    {
      label: 'Paid',
      value: 1,
    },
    {
      label: 'Partially Paid',
      value: 2,
    },
    {
      label: 'Refunded',
      value: 3,
    },
    {
      label: 'Unpaid',
      value: 4,
    },
  ]
  const countryOptions = [
    {
      label: 'United States',
      value: 1,
    },
    {
      label: 'Canada',
      value: 2,
    },
  ]

  const sortIcon = (order) => {
    if (!order) return <i className="fa far fa-sort ml-2 text-secondary"></i>
    else if (order === 'asc') return <i className="fa far fa-sort-up ml-2 text-black"></i>
    else if (order === 'desc') return <i className="fa far fa-sort-down ml-2 text-black"></i>
    return null
  }

  const columns = [
    {
      dataField: 'Consultant ID',
      text: 'Consultant ID',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'First Name',
      text: 'First Name',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Last Name',
      text: 'Last Name',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Join Date (Company)',
      text: 'Join Date (Company)',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Personal Orders',
      text: 'Personal Orders',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Customer Orders',
      text: 'Customer Orders',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Total Orders',
      text: 'Total Orders',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Customer Prices',
      text: 'Customer Prices',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Personal Prices',
      text: 'Personal Prices',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Total Prices',
      text: 'Total Prices',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'PersonalCV',
      text: 'PersonalCV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'CustomerCV',
      text: 'CustomerCV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TotalCV',
      text: 'TotalCV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'PersonalQV',
      text: 'PersonalQV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'CustomerQV',
      text: 'CustomerQV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TotalQV',
      text: 'TotalQV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'PersonalRV',
      text: 'PersonalRV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'CustomerRV',
      text: 'CustomerRV',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TotalRV',
      text: 'TotalRV',
      sort: true,
      sortCaret: sortIcon,
    },
  ]

  const data = [
    {
      Id: 1,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
    {
      Id: 2,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
    {
      Id: 3,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
    {
      Id: 4,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
    {
      Id: 5,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
    {
      Id: 6,
      'Consultant ID': '1101',
      'First Name': 'Nani',
      'Last Name': 'Varun',
      'Join Date (Company)': '2-2-2020',
      'Personal Orders': '1',
      'Customer Orders': '2',
      'Total Orders': '3',
      'Customer Prices': '50',
      'Personal Prices': '100',
      'Total Prices': '150',
      PersonalCV: '2',
      CustomerCV: '5',
      TotalCV: '7',
      PersonalQV: '3',
      CustomerQV: '5',
      TotalQV: '8',
      PersonalRV: '55',
      CustomerRV: '5',
      TotalRV: '60',
    },
  ]

  return (
    <>
      <Card lg={12} md={12} sm={12} xs={12}>
        <CardBody
          className="py-2 bg-primary text-white rounded-top"
          onClick={toggleFormOpen}
          style={{cursor: 'pointer'}}>
          <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
            <div>
              <span className="big ml-1 text-white">Criteria</span>
            </div>
            <div className="d-flex text-white">
              <i className={isFormOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
            </div>
          </CardTitle>
        </CardBody>
        <Collapse isOpen={isFormOpen}>
          <div style={{margin: '1rem'}}>
            <Form>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Order Begin Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Order End Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Order Posted Begin Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Order Posted End Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Payment Status
                </Label>
                <Col sm={6}>
                  <Select isMulti components={makeAnimated()} options={paymentStatusOptions} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Country
                </Label>
                <Col sm={6}>
                  <Select isMulti components={makeAnimated()} options={countryOptions} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Consultant Join Begin Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Consultant Join End Date
                </Label>
                <Col sm={6}>
                  <Input type="date" />
                </Col>
              </FormGroup>
            </Form>
            <Col
              xs={{size: 6}}
              md={{size: 6, offset: 4}}
              lg={{size: 6, offset: 4}}
              className="p-0 px-lg-2 px-sm-2">
              <Button color="success">Execute</Button>
            </Col>
          </div>
        </Collapse>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className={`my-3`}>
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
            <BootstrapTable keyField="Id" data={data} columns={columns} classes="text-black" />
          </Row>
        </Collapse>
      </Card>
    </>
  )
}

export default ConsultantSalesReport
