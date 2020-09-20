import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, Input, Label, CardBody, Button, Media, Alert} from 'components'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {FormGroup} from '@material-ui/core'

const ShippingFileCenter = () => {
  const actionFormater = () => {
    return (
      <div>
        <FormGroup row>
          <Col>
            <Row className="mb-1">
              <Button color="light" className="rounded-circle">
                <i className="fa fas fa-pencil"></i>
              </Button>
              <Label className="mt-2 ">Edit</Label>
            </Row>
            <Row className="mb-1">
              <Button color="light" className="rounded-circle">
                <i className="fa fas fa-trash-o"></i>
              </Button>
              <Label className="mt-2 ">Delete</Label>
            </Row>
          </Col>
        </FormGroup>
      </div>
    )
  }
  const columns = [
    {
      dataField: 'displayorder',
      text: 'Display Order',
    },
    {
      dataField: 'enabled',
      text: 'Enabled',
    },
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'description',
      text: 'Description',
    },
    {
      dataField: 'displayname',
      text: 'Display Name',
    },
    {
      dataField: 'countries',
      text: 'Countries',
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]
  const data = [
    {
      id: 0,
      displayorder: '0',
      enabled: 'Yes',
      name: 'Special Bulk Shipping',
      description: 'Holiday Bulk Ordering',
      displayname: 'Holiday Bulk Ordering',
      countries: 'United States',
    },
    {
      id: 1,
      displayorder: '0',
      enabled: 'Yes',
      name: 'SSS Host Ground Shipping',
      description: 'SSS Host Ground Shipping',
      displayname: 'SSS Host Ground Shipping',
      countries: 'United States',
    },
    {
      id: 2,
      displayorder: '0',
      enabled: 'Yes',
      name: 'SSS Host Ground Shipping',
      description: 'SSS Host Ground Shipping',
      displayname: 'SSS Host Ground Shipping',
      countries: 'United States',
    },
    {
      id: 3,
      displayorder: '0',
      enabled: 'Yes',
      name: 'SSS Host Ground Shipping',
      description: 'Fed Ex ground Shipping',
      displayname: 'SSS Host Ground Shipping',
      countries: 'United States',
    },
    {
      id: 4,
      displayorder: '0',
      enabled: 'Yes',
      name: '2-Day Air Shipping',
      description: '2-Day Air Shipping',
      displayname: '2-Day Air',
      countries: 'United States',
    },
    {
      id: 5,
      displayorder: '0',
      enabled: 'Yes',
      name: 'Special Bulk Shipping',
      description: 'Holiday Bulk Ordering',
      displayname: 'Holiday Bulk Ordering',
      countries: 'United States',
    },
    {
      id: 6,
      displayorder: '0',
      enabled: 'Yes',
      name: 'SSS Host Ground Shipping',
      description: 'Fed Ex ground Shipping',
      displayname: 'SSS Host Ground Shipping',
      countries: 'United States',
    },
    {
      id: 7,
      displayorder: '0',
      enabled: 'Yes',
      name: 'SSS Host Ground Shipping',
      description: 'Fed Ex ground Shipping',
      displayname: 'SSS Host Ground Shipping',
      countries: 'United States',
    },
    {
      id: 8,
      displayorder: '0',
      enabled: 'Yes',
      name: '2-Day Air Shipping',
      description: '2-Day Air Shipping at member or Consultants Electron',
      displayname: '2-Day Air',
      countries: 'United States',
    },
  ]

  const useStyles = makeStyles(() => ({
    root: {
      '& .table-responsive-sm thead th': {
        borderColor: '#fff',
        backgroundColor: '#F7F7F7',
        fontSize: '14px',
      },
      '& .table-responsive-sm th, tbody': {
        color: '#423b3c',
      },
      '& .table-responsive-sm tbody tr': {
        backgroundColor: '#fff',
      },
      '& .table-responsive-sm tbody tr:nth-child(even)': {
        backgroundColor: '#f2f2f2',
      },
      '& .table-responsive-sm tbody td': {
        borderColor: '#fff',
      },

      '& .table-responsive-sm tbody td:first-child,thead th:first-child': {
        borderLeftWidth: 0,
      },
      '& .table-responsive-sm tbody td:last-child,thead th:last-child': {
        borderRightWidth: 0,
      },
    },
  }))
  const classes = useStyles()
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Shipping > Shipping Charges')
  }, [])

  return (
    <div>
      <div className="my-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1>Shipping Charges</h1>
        <div className="col-example text-left">
          <Button
            onClick={() =>
              routeChange(
                '/shipping/shipping-file-center/import-configration-manage/import-configuration-edit',
              )
            }
            color="info"
            size="lg">
            Add New Shipping Charges
          </Button>
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className={`${classes.root} mb-3`}>
            <CardBody className="p-3">
              <Row className="d-flex justify-content-between mt-1">
                <Col sm={{size: '2', offset: 0}}>
                  <Input type="select">
                    <option>Set Display Order Manaually </option>
                    <option>Cart Display Order Setting </option>
                    <option>Price (low to high) </option>
                    <option>Price (high to low) </option>
                    <option>Alphabetically By Name </option>
                  </Input>
                </Col>
                <Col className="mx-4" sm={{size: '2', offset: 0}}>
                  <Input type="checkbox"></Input>
                  <Label className="text-warning">Show Disabled Shopping Methods</Label>
                </Col>
              </Row>
              <Alert color="primary" className="mt-3">
                <Media>
                  <Media left middle className="mr-3">
                    <span className="fa-stack fa-lg p-3">
                      <i
                        className="fa fa-circle fa-stack-2x text-primary-03"
                        aria-hidden="true"></i>
                      <i
                        className="fa fa-fw fa-check fa-stack-1x fa-inverse alert-icon"
                        aria-hidden="true"></i>
                    </span>
                  </Media>
                  <Media body>
                    <h6 className="alert-heading mb-1 p-3">
                      The Shipping Charges interface allows users to configure the different
                      shipping methods that will be available in the system and how those methods
                      calculate shipping on orders.
                    </h6>
                    <a className="text-secondary p-3" href="#">
                      Features Guide Link
                      <i className="fa fa-fw fa-long-arrow-right ml-1" aria-hidden="true"></i>
                    </a>
                  </Media>
                </Media>
              </Alert>
              <Row className="m-0 mt-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                <Col sm={12} className="p-0">
                  <ToolkitProvider keyField="id" data={data} columns={columns} search>
                    {(props) => (
                      <React.Fragment>
                        <BootstrapTable
                          keyField="id"
                          classes="table-responsive-sm"
                          {...props.baseProps}
                        />
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingFileCenter
