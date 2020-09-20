import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import iconmail from 'images/commonIcons/mail.svg'
import PropTypes from 'prop-types'
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
  info: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
  },
  detail: {
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
  },
})
const BasicInfo = ({details}) => {
  const classes = useStyles()

  return (
    <Col sm={6}>
      <div tag="h5" className={classes.border}>
        <p className={classes.title}>BasicInfo</p>
      </div>
      <Row>
        <Col md={6} sm={6} xs={6} className={classes.info}>
          {details.username}
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.PersonDisplayID}
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          {details.phone}
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={6} className={classes.detail}>
          <Button className="sc-btn-action px-1 " color="link" onClick={() => {}}>
            {details.email}
            <span className="sc-btn-action__icon rounded-circle ml-2">
              <img className="sc-btn-action__img" src={iconmail} />
            </span>
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

BasicInfo.propTypes = {
  details: PropTypes.object,
}

export default BasicInfo
