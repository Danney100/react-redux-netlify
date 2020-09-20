import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, Button, Media, Alert} from 'components'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {FormGroup} from '@material-ui/core'
import {Label} from 'reactstrap'

const ShippingFileConfiguration = () => {
  const actionFormater = () => {
    return (
      <div>
        <FormGroup row>
          <Row>
            <Col sm={3} className="mb-1">
              <Button color="light" className="rounded-circle">
                <i className="fa fas fa-pencil"></i>
              </Button>
            </Col>
            <Col sm={3}>
              <Label className="mt-2 ">Edit</Label>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="mb-1">
              <Button color="light" className="rounded-circle">
                <i className="fa fas fa-trash-o"></i>
              </Button>
            </Col>
            <Col sm={3}>
              <Label className="mt-2 ">Delete</Label>
            </Col>
          </Row>
        </FormGroup>
      </div>
    )
  }
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'description',
      text: 'Description',
    },
    {
      dataField: 'importtype',
      text: 'Import Type',
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]
  const data = [
    {
      id: 0,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 1,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 2,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 3,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 4,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 5,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
    },
    {
      id: 6,
      name: 'Import from Shipstation',
      description: 'Import from Shipstation',
      importtype: 'Manual File Import',
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
    setTitle('Shipping > Shipping File Center > Shipping File Import Configuration')
  }, [])

  return (
    <div>
      <div className="my-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1>Shipping File Import Configuration</h1>
        <div className="col-example text-left">
          <Button
            onClick={() =>
              routeChange(
                '/shipping/shipping-file-center/import-configration-manage/import-configuration-edit',
              )
            }
            color="info"
            size="lg">
            Add New Shipping File Import Configuration
          </Button>
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className={`${classes.root} mb-3`}>
            <CardBody className="p-3">
              <Alert color="primary" className="mt-3">
                <Media>
                  <Media left middle className="mr-3">
                    <span className="fa-stack fa-lg">
                      <i
                        className="fa fa-circle fa-stack-2x text-primary-03"
                        aria-hidden="true"></i>
                      <i
                        className="fa fa-fw fa-check fa-stack-1x fa-inverse alert-icon"
                        aria-hidden="true"></i>
                    </span>
                  </Media>
                  <Media body>
                    <h6 className="alert-heading mb-1">
                      Shipping File Import Configuration allow you to set up Import Files. Once a
                      Configuration is used to import a shipping file, it will no longer be able to
                      delete it.
                    </h6>
                    <a className="text-secondary" href="#">
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

export default ShippingFileConfiguration
