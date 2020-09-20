import React, {useContext, useEffect, useState} from 'react'
import {Card, CardBody, CardDeck, Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import MoonLoader from 'react-spinners/MoonLoader'
import PropTypes from 'prop-types'
import {Map} from 'immutable'

import AppContext from 'components/App/AppContext'
import PastBarChart from './components/PastBarChart'
import JoinPastChart from './components/JoinPastChart'
import PartiesPast from './components/PartiesPast'
import OrderOriginPast7Days from './components/OrderOriginPast7Days'
import DataRow from './components/DataRow'
import {useDispatch, useSelector} from 'react-redux'
import {setPortal} from 'duck/actions/process'
import {getDashboardReports} from 'api'

const useStyles = makeStyles({
  root: {
    '& .card': {
      border: 'none',
      borderRadius: '5px',
      boxShadow: '0 3px 15px 0 rgba(195, 185, 185, 0.12)',
    },
    '& .card-title': {
      fontSize: '26px',
      fontFamily: 'Oswald-SemiBold',
      color: '#423b3c',
      marginBottom: '10px',
      fontWeight: 600,
    },
  },
})

export const Dashboard = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()
  const [reports, setReports] = useState({})
  const token = useSelector(({user}) => user.get('token'))
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTitle('Dashboard')
  }, [])

  useEffect(() => {
    dispatch(setPortal(1))
  }, [])

  useEffect(() => {
    setLoading(true)
    getDashboardReports(token)
      .then((res) => {
        setReports(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const immutableData = Map(reports)

  const cardData = {
    orders_past: immutableData.get('total_orders_past_7_days', 0),
    revenue_past: immutableData.get('revenue_past_7_days', 0),
    consultants_past: immutableData.get('consultants_past_7_days', 0),
    customers_past: immutableData.get('customers_past_7_days', 0),
    leads_past: immutableData.get('leads_past_7_days', 0),
    total_consultants: immutableData.get('total_consultants', 0),
    total_customers: immutableData.get('total_customers', 0),
  }

  return (
    <div className="p-lg-0 px-3">
      <Row className="mb-lg-0 mb-3">
        <Col style={{fontFamily: 'Oswald-Medium', fontSize: '24px', color: '#423b3c'}}>
          Dashboard
        </Col>
      </Row>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <MoonLoader size={75} color={'#de8b6d'} loading={loading} />
        </div>
      ) : (
        <>
          <DataRow data={cardData} />
          <CardDeck className={classes.root}>
            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Orders Past 7 Days</span>
                  </div>
                </div>
                <PastBarChart
                  label="orderPast"
                  BarOffset={{dy: 25, dx: -15, angle: -45}}
                  reportData={reports.orders}
                />
              </CardBody>
            </Card>

            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Joins Past 7 Days</span>
                  </div>
                </div>
                <JoinPastChart reportData={reports.joins} />
              </CardBody>
            </Card>

            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Parties Past 7 Days</span>
                  </div>
                </div>
                <PartiesPast reportData={{}} />
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck className={`my-4 ${classes.root}`}>
            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Tasting Sales Past 7 Days</span>
                  </div>
                </div>
                <PastBarChart
                  label="testingSalesPast"
                  BarOffset={{dy: 25, dx: -15, angle: -45}}
                  reportData={reports.tasting_sales}
                />
              </CardBody>
            </Card>
            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Parties Past 6 Months</span>
                  </div>
                </div>
                <PastBarChart
                  label="partiesPast"
                  BarOffset={{dy: 10, dx: -1, angle: 0}}
                  reportData={reports.Parties}
                />
              </CardBody>
            </Card>
            <Card lg={4}>
              <CardBody>
                <div className="d-flex border-bottom mb-4">
                  <div className="card-title">
                    <span>Order Origin Past 7 Days</span>
                  </div>
                </div>
                <OrderOriginPast7Days reportData={reports.order_origin} />
              </CardBody>
            </Card>
          </CardDeck>
        </>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object,
}

export default Dashboard
