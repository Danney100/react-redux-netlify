import React from 'react'
import {Card, CardBody, Col, Row, CardTitle} from 'reactstrap'
import EditIcon from 'routes/components/CustomIconButton/EditIcon'
import {makeStyles} from '@material-ui/core/styles'
import DeleteModal from './DeleteModal'

const useStyles = makeStyles({
  root: {
    color: '#423b3c',
    border: 'solid 1px #c6cace',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    '& .card-number': {
      color: '#d18f77',
    },
    '& .card-title': {
      color: '#6c6766',
    },
    '& .sc-edit': {
      color: '#707070',
    },
  },
  bgc: {
    backgroundColor: '#6c6766',
    height: 71,
    color: '#ffffff',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
  },
  title: {
    color: '#423b3c',
    fontFamily: 'Oswald-SemiBold',
    fontSize: '16px',
  },
  address: {
    fontSize: '14px',
    fontFamily: 'Avenir-Book',
    marginLeft: '30px',
  },
})

const DefaultAddress = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Card className="mb-4">
            <CardBody className="py-3 text-white rounded-top mx-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div className="mt-3">
                  <span className={`${classes.title}`}>Defaut Address</span>
                </div>
              </CardTitle>
            </CardBody>
            <Col>
              <div className={`${classes.bgc} mt-4`}>
                <div className="mt-4 pt-4 mx-4">
                  Eddie test 123
                  <span className="float-right">Primary</span>
                </div>
              </div>
              <div className={`${classes.root} mb-3 p-3`}>
                <Row className="mt-2 mx-3">
                  <Col className="font-weight-bold card-title sc-Avenir-Heavy">Eddie test 123</Col>
                  <EditIcon />
                </Row>
                <Row className={`${classes.address}`}>
                  4101 McEwen Rd <br />
                  700
                  <br />
                  dallas, TX 75244
                  <br />
                  United States
                  <br />
                  16546515465
                  <br />
                </Row>
                <Row className="mr-2 card-number sc-avenir-black justify-content-end">
                  <DeleteModal />
                </Row>
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DefaultAddress
