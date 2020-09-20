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
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import BootstrapTable from 'react-bootstrap-table-next'
import PropTypes from 'prop-types'

function ProductCustomReports({report}) {
  const about =
    report == 'zipCode'
      ? 'Get sales tax breakdown grouped by entered zip/postal code.'
      : `Get US sales tax breakdown grouped by ${report}.`

  const context = useContext(AppContext)
  const {setTitle} = context

  const [isOpen, setIsOpen] = useState(true)
  const [isTableOpen, setIsTableOpen] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(true)

  const toggleTableOpen = () => setIsTableOpen(!isTableOpen)

  const toggleFormOpen = () => setIsFormOpen(!isFormOpen)

  const toggleOpen = () => setIsOpen(!isOpen)

  const stateOptions = [
    {
      label: 'Alabama',
      value: 1,
    },
    {
      label: 'Arkansas',
      value: 2,
    },
    {
      label: 'AE',
      value: 3,
    },
    {
      label: 'California',
      value: 4,
    },
    {
      label: 'Colorado',
      value: 5,
    },
    {
      label: 'Delaware',
      value: 6,
    },
    {
      label: 'Florida',
      value: 7,
    },
  ]

  const orderStatusOptions = [
    {
      label: 'Back Order',
      value: 1,
    },
    {
      label: 'Building',
      value: 2,
    },
    {
      label: 'Entered',
      value: 3,
    },
    {
      label: 'Partial Back Order',
      value: 4,
    },
    {
      label: 'Partial Shipped',
      value: 5,
    },
    {
      label: 'Partial Shipped BackOrder',
      value: 6,
    },
    {
      label: 'Posted',
      value: 7,
    },
    {
      label: 'Shipped',
      value: 8,
    },
    {
      label: 'Shipping',
      value: 9,
    },
    {
      label: 'Void',
      value: 10,
    },
  ]

  const sortIcon = (order) => {
    if (!order) return <i className="fa far fa-sort ml-2 text-secondary"></i>
    else if (order === 'asc') return <i className="fa far fa-sort-up ml-2 text-black"></i>
    else if (order === 'desc') return <i className="fa far fa-sort-down ml-2 text-black"></i>
    return null
  }

  const capitalize = (name) => {
    return name.toUpperCase()
  }

  const columns = [
    {
      dataField: 'Id',
      hidden: true,
    },
    {
      dataField: 'State',
      text: 'State',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: `${capitalize(report)}`,
      text: `${capitalize(report)}`,
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TotalPrice',
      text: 'TotalPrice',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'Subtotal',
      text: 'Subtotal',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TaxableAmmount',
      text: 'TaxableAmmount',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'TaxTotal',
      text: 'TaxTotal',
      sort: true,
      sortCaret: sortIcon,
    },
    {
      dataField: 'ShippingTotal',
      text: 'ShippingTotal',
      sort: true,
      sortCaret: sortIcon,
    },
  ]

  const data = [
    {
      Id: 1,
      State: 'Florida',
      ZipCode: '30656',
      County: 'Flor54',
      City: 'Florida',
      TotalPrice: '$550.00',
      Subtotal: '$538.00',
      TaxableAmmount: '$65.00',
      TaxTotal: '$87.00',
      ShippingTotal: '$45.00',
    },
    {
      Id: 2,
      State: 'Alabama',
      ZipCode: '30656',
      County: 'Alab85',
      City: 'Alabama',
      TotalPrice: '$505.00',
      Subtotal: '$388.00',
      TaxableAmmount: '$750.00',
      TaxTotal: '$9.00',
      ShippingTotal: '$35.00',
    },
    {
      Id: 3,
      State: 'Arkansas',
      ZipCode: '30856',
      County: 'Arka96',
      City: 'Arkansas',
      TotalPrice: '95.00',
      Subtotal: '$345.00',
      TaxableAmmount: '$55.00',
      TaxTotal: '$5.00',
      ShippingTotal: '$14.00',
    },
    {
      Id: 4,
      State: 'California',
      ZipCode: '30985',
      County: 'Calif65',
      City: 'California',
      TotalPrice: '$650.00',
      Subtotal: '$318.00',
      TaxableAmmount: '$150.00',
      TaxTotal: '$3.00',
      ShippingTotal: '$19.00',
    },
    {
      Id: 5,
      State: 'AE',
      ZipCode: '30125',
      County: 'Aea56',
      City: 'AE',
      TotalPrice: '$870.00',
      Subtotal: '$38.00',
      TaxableAmmount: '$624.00',
      TaxTotal: '$81.00',
      ShippingTotal: '$73.00',
    },
    {
      Id: 6,
      State: 'DC',
      ZipCode: '30987',
      County: 'Dce56',
      City: 'DC',
      TotalPrice: '$34.00',
      Subtotal: '$12.00',
      TaxableAmmount: '$8.00',
      TaxTotal: '$3.00',
      ShippingTotal: '$4.00',
    },
    {
      Id: 7,
      State: 'Colorado',
      ZipCode: '30753',
      County: 'Color65',
      City: 'Colorado',
      TotalPrice: '$50.00',
      Subtotal: '$38.00',
      TaxableAmmount: '$50.00',
      TaxTotal: '$8.00',
      ShippingTotal: '$4.00',
    },
  ]

  useEffect(() => {
    setTitle(`Sales Tax by ${capitalize(report)} Code`)
  }, [])

  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12}>
        <CardBody
          className="py-2 bg-primary text-white rounded-top"
          onClick={toggleOpen}
          style={{cursor: 'pointer'}}>
          <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
            <div>
              <span className="big ml-1 text-white">About This Report</span>
            </div>
            <div className="d-flex text-white">
              <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
            </div>
          </CardTitle>
        </CardBody>
        <Collapse isOpen={isOpen}>
          <div style={{margin: '1rem'}}>{about}</div>
        </Collapse>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="my-3">
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
                  State
                </Label>
                <Col sm={6}>
                  <Select isMulti components={makeAnimated()} options={stateOptions} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} md={4} className="text-dark text-lg-right">
                  Order Status
                </Label>
                <Col sm={6}>
                  <Select isMulti components={makeAnimated()} options={orderStatusOptions} />
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
          <Row className="table-responsive mt-1 ml-0 p-3">
            <BootstrapTable keyField="Id" classes="text-black" data={data} columns={columns} />
          </Row>
        </Collapse>
      </Card>
    </div>
  )
}

ProductCustomReports.propTypes = {
  report: PropTypes.string,
}

export default ProductCustomReports
