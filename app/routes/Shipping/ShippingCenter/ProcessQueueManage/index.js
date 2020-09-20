import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Media,
  Alert,
} from 'components'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import FilteringResult from './FilteringResult'
import ProcessQueueFilter from './ProcessQueueFilter'

const ProcessQueueManage = () => {
  const actionFormater = () => {
    return (
      <div>
        <FormGroup row>
          <Row>
            <Col sm="3" className="mb-1">
              <Button color="light" className="rounded-circle mr-2">
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col>
              <Label className="mt-2 ">Cancel</Label>
            </Col>
          </Row>
        </FormGroup>
      </div>
    )
  }
  const columns = [
    {
      dataField: 'module',
      text: 'Module',
    },
    {
      dataField: 'variables',
      text: 'Variables',
    },
    {
      dataField: 'queued',
      text: 'Queued',
    },
    {
      dataField: 'startafter',
      text: 'Start After',
    },
    {
      dataField: 'started',
      text: 'Started',
    },
    {
      dataField: 'status',
      text: 'Status',
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]
  const data = [
    {
      id: 0,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
    },
    {
      id: 1,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
    },
    {
      id: 2,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
    },
    {
      id: 3,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
    },
    {
      id: 4,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
    },
    {
      id: 5,
      module: 'Shipping File Run',
      variables: 'Run ID (1518) ',
      queued: '6/27/2020 1:52 AM',
      startafter: '',
      started: '',
      status: 'pending',
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
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Shipping > Shipping Center > Process Queue Manager')
  }, [])

  return (
    <div>
      <div className="my-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
        <h1>Process Queue Manager</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className={`${classes.root} mb-3`}>
            <CardBody className="p-3">
              <div className="my-3 mx-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
                <h4>Current Status:Tax Integration-Locked Orders</h4>
              </div>
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
                      The Scheduled process queue is a compiled list of all scheduled jobs
                      throughout the system.User has the ability to filter through current jobs
                      using the filter criteria below.
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
              <Row className="my-3 mx-1">
                <Col
                  lg="4"
                  className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink first />
                    </PaginationItem>
                    <PaginationItem disabled>
                      <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>...</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last />
                    </PaginationItem>
                  </Pagination>
                </Col>
                <Col
                  lg="4"
                  className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
                  <Row>
                    <Col>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className={classes.pagination}>
                        <option>5</option>
                        <option>10</option>
                      </Input>
                    </Col>
                    items per page
                  </Row>
                </Col>
                <Col
                  lg={{size: 2, offset: 2}}
                  className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
                  <Label>1-5 of 500 items</Label>
                </Col>
              </Row>
            </CardBody>
            <ProcessQueueFilter />
            <FilteringResult />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProcessQueueManage
