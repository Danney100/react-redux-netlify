import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import iconGroup from 'images/commonIcons/group.svg'
import PropTypes from 'prop-types'
import moment from 'moment'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    color: '#403839',
  },
  border: {
    borderBottomStyle: 'inset',
    borderBottomWidth: 'thin',
  },
  detail: {
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
  },
  info: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
  },
})

const DetailInfo = ({details}) => {
  const classes = useStyles()

  return (
    <Col sm={6}>
      <div tag="h5" className={classes.border}>
        <p className={classes.title}>Detailed Info</p>
      </div>
      <Row className="mt-4">
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Mentor
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Button className={classes.detail} color="link" onClick={() => {}}>
            IDSTC Tester (3292)
            <span className="sc-btn-action__icon rounded-circle">
              <img className="sc-btn-action__img ml-2" src={iconGroup} />
            </span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Customer Count
        </Col>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          0
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Join Date
        </Col>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.JoinDate && moment(details.JoinDate).format('MM/DD/YYYY')}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Customer Type
        </Col>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.CustomerType}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Customer Status
        </Col>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.CustomerStatus}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4} sm={6} xs={6} className={classes.info}>
          Language
        </Col>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.language}
        </Col>
      </Row>
    </Col>
  )
}

DetailInfo.propTypes = {
  details: PropTypes.object,
}

export default DetailInfo
