import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody} from 'components'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'

const FilteringResult = () => {
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
  ]
  const data = [
    {
      id: 0,
      module: '',
      variables: ' ',
      queued: '',
      startafter: '',
      started: '',
      status: '',
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
      <Row className="mt-5">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className={`${classes.root} mb-3`}>
            <CardBody className="p-3">
              <div className="my-3 mx-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
                <h4>FilteringResult</h4>
              </div>
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

export default FilteringResult
