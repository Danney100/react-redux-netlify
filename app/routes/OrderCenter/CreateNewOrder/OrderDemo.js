import React from 'react'
import {Media, ListGroupItem, Row} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    marginTop: 15,
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 37,
    height: 37,
    textAlign: 'center',
    paddingTop: 6,
  },
  demos: {
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  mainFont: {
    marginTop: 12,
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },

  mainFontOne: {
    marginTop: 15,
    color: '#6c6766',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'SFUIText-Medium',
  },
  alertDemos: {
    marginBottom: 15,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#27bfa3',
    borderRadius: 6,
    marginLeft: 25,
    marginRight: 25,
  },
  alertMedia: {
    marginTop: '9px',
    backgroundColor: 'rgba(39, 191, 163, 0.2)',
    borderRadius: 50,
    width: 37,
    height: 37,
    textAlign: 'center',
    paddingTop: 6,
  },
  Radius: {
    borderRadius: 6,
  },
  orderFont: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    marginBottom: '10px',
    marginLeft: '16px',
  },
  linkFont: {
    color: '#27bfa3',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    marginLeft: '16px',
  },
})

const OrderDemo = (props) => {
  const {alert_heading_first, item, alert_filter_heading, alert_filter_link, alert_heading_second, wrapperClass} = props
  const classes = useStyles()

  return (
    <div className={`${classes.Radius} ${wrapperClass}`}>
      <ListGroupItem className={item === 'warning' ? classes.alertDemos : classes.demos}>
        <Media>
          <Media>
            {item === 'warning' ? (
              <div className={classes.alertMedia}>
                <i className="fa fa-shopping-cart text-success"></i>
              </div>
            ) : (
              <div className={classes.media}>
                <i className="fa fas fa-check text-primary"></i>
              </div>
            )}
          </Media>
          <Media className="ml-4">
            <div>
              <div className={classes.mainFontOne}>{alert_heading_first}</div>
              <div className={classes.mainFont}>{alert_heading_second}</div>
              <Row>
                <div className={classes.orderFont}>{alert_filter_heading}</div>
                <div className={`${classes.linkFont}`}>{alert_filter_link}</div>
              </Row>
            </div>
          </Media>
        </Media>
      </ListGroupItem>
    </div>
  )
}

OrderDemo.propTypes = {
  alert_heading_first: PropTypes.string,
  item: PropTypes.string,
  alert_filter_heading: PropTypes.string,
  alert_filter_link: PropTypes.string,
  alert_heading_second: PropTypes.string,
  wrapperClass: PropTypes.string,
}

OrderDemo.defaultProps = {
  wrapperClass: '',
}

export default OrderDemo
