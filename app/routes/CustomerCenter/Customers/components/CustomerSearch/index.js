import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useSelector, useDispatch} from 'react-redux'
import {Row, Col, Card, CardBody, FormGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {Map} from 'immutable'
import {useHistory} from 'react-router-dom'
import {showErrorNotification} from 'helpers/util'
import MoonLoader from 'react-spinners/MoonLoader'

import CommonButton from 'routes/components/CommonButton'
import BasicInfo from './BasicInfo'
import DetailInfo from './DetailInfo'
import SearchPagination from './Pagination'
import {getCustomerDetails} from 'api'
import {setCustomerDetails} from 'duck/actions/customer'

const useStyles = makeStyles({
  title: {
    fontSize: 22,
    fontFamily: 'DINCondensed-Bold',
    color: '#403839',
  },
  border: {
    borderBottomStyle: 'inset',
    borderBottomWidth: 'thin',
    marginBottom: 45,
    justifyContent: 'between',
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 180,
    fontSize: 13,
  },
  dropStyle: {
    backgroundColor: 'white !important',
    color: '#27BFA3 !important',
    borderColor: 'white !important',
    fontSize: 14,
    outline: 'none',
  },
})

export const CustomerSearch = ({isDisplay, isLoading, setIsDisplay, setIsLoading}) => {
  const customerToDisplay = useSelector(({customer}) => customer.get('customerToDisplay'))
  const token = useSelector(({user}) => user.get('token'))
  const customerDetails = useSelector(({customer}) => customer.get('customerDetails', Map()).toJS())
  const dispatch = useDispatch()
  const routeChange = () => {
    history.push({
      pathname: `/customer-center/customer-edit`,
      stage: customerDetails,
    })
  }
  const history = useHistory()

  const classes = useStyles()

  useEffect(() => {
    const payload = {
      id: customerToDisplay,
      token: token,
    }
    if (customerToDisplay) {
      setIsDisplay(true)
      setIsLoading(true)
      getCustomerDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setCustomerDetails(res))
          } else {
            console.log(res)
            dispatch(setCustomerDetails(null))
            showErrorNotification(res.response.data.message)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsDisplay(false)
          setIsLoading(false)
        })
    }
  }, [customerToDisplay])

  if (Object.keys(customerDetails).length === 0) {
    return ''
  }

  return (
    <div className="mt-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-end mb-4">
            <CommonButton
              title="Edit Customer"
              buttonType="saveButton"
              onClick={routeChange}
              disabled={isDisplay && isLoading}
            />
          </div>
          <Card lg={12} md={12} sm={12} xs={12} className={isDisplay && isLoading ? 'sc-loading' : ''}>
            <div className="sc-loading__icon-wrapper">
              <MoonLoader size={32} color={'#de8b6d'} loading={isDisplay && isLoading} />
            </div>
            <CardBody>
              <Row form className={classes.border}>
                <Col md={6} className="d-flex justify-content-start">
                  <FormGroup>
                    <p className={classes.title}>
                      Customer:{`${customerDetails.username}`}(record 1 of 500)
                    </p>
                  </FormGroup>
                </Col>
                <Col md={6} className="d-flex justify-content-end">
                  <FormGroup>
                    <SearchPagination classes={classes} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <BasicInfo details={customerDetails} />
                <DetailInfo details={customerDetails} />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

CustomerSearch.propTypes = {
  isDisplay: PropTypes.bool,
  isLoading: PropTypes.bool,
  setIsDisplay: PropTypes.func,
  setIsLoading: PropTypes.func,
}

export default CustomerSearch
