import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    '&  .data-card': {
      borderRadius: '5px',
      boxShadow: ' 0 3px 15px 0 rgba(195, 185, 185, 0.12)',
      border: 'none',
      '& .card-body': {
        padding: '12px',
      },
      '& .title': {
        fontFamily: 'Oswald-Semibold',
        fontSize: '24px',
        fontWeight: '600',
        textAlign: 'left',
        color: '#423b3c',
      },
      '& .sub-title': {
        fontFamily: 'Oswald-Regular',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.29',
        letterSpacing: '0.28px',
        textAlign: 'left',
        color: '#6c6766',
      },
    },
  },
})

const DataRow = ({data}) => {
  const classes = useStyles()

  return (
    <Row className={`pb-4 mt-sm-4 ${classes.root}`}>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100 data-card">
              <CardBody>
                <div className="title">{data.orders_past}</div>
                <div className="sub-title">Orders Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.revenue_past}</div>
                <div className="sub-title">Revenue Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.consultants_past}</div>
                <div className="sub-title">Consultants Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.customers_past}</div>
                <div className="sub-title">Customers Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.leads_past}</div>
                <div className="sub-title">Leads Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.total_consultants}</div>
                <div className="sub-title">Total Consultants</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">{data.total_customers}</div>
                <div className="sub-title">Total Customers</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

DataRow.propTypes = {
  data: PropTypes.object,
}
export default DataRow
