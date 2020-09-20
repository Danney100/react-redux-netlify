import React from 'react'
import {Media, ListGroupItem} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
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
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },

  mainFontOne: {
    color: '#6c6766',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'SFUIText-Medium',
  },
  linkFont: {
    color: 'rgba(64, 56, 57, 0.5)',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 8,
    fontFamily: 'SFUIText-Semibold',
  },

  alertDemos: {
    marginBottom: 15,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#e94b35',
    borderRadius: 6,
  },
  alertMedia: {
    backgroundColor: '#ffe6e6',
    borderRadius: 50,
    width: 37,
    height: 37,
    textAlign: 'center',
    paddingTop: 6,
  },
  Radius: {
    borderRadius: 6,
    marginLeft: 25,
    marginRight: 25,
  },
  orderFont: {
    color: '#27bfa3',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    borderBottomWidth: '10px',
  },
})

const TabDemo = (props) => {
  const {
    content,
    item,
    contentOne,
    contentTwo,
    contentThree,
    contentFour,
    contentFive,
    contentSix,
    wrapperClass,
  } = props
  const classes = useStyles()

  return (
    <div className={`${classes.Radius} ${wrapperClass}`}>
      <ListGroupItem className={item === 'warning' ? classes.alertDemos : classes.demos}>
        <Media>
          <Media>
            {(() => {
              switch (item) {
                case 'warning':
                  return (
                    <div className={classes.alertMedia}>
                      <i className="fa fas fa-exclamation text-danger"></i>
                    </div>
                  )
                case 'success':
                  return (
                    <div className={classes.media}>
                      <i className="fa fas fa-check text-primary"></i>
                    </div>
                  )
                case 'danger':
                  return (
                    <div className={classes.media}>
                      <i className="fa fas fa-question text-primary"></i>
                    </div>
                  )
              }
            })()}
          </Media>
          <Media className="ml-4">
            <span>
              <div className={classes.mainFontOne}>{content}</div>
              <div className={classes.mainFont}>{contentThree}</div>
              <div className={classes.mainFont}>{contentFour}</div>
              <div className={classes.mainFont}>{contentFive}</div>
              <div className={classes.orderFont}>{contentSix}</div>
              <div className={classes.linkFont}></div>
            </span>
          </Media>
        </Media>
      </ListGroupItem>
    </div>
  )
}

TabDemo.propTypes = {
  content: PropTypes.string.isRequired,
  item: PropTypes.string,
  contentOne: PropTypes.string,
  contentTwo: PropTypes.object,
  contentThree: PropTypes.string,
  contentFour: PropTypes.string,
  contentFive: PropTypes.string,
  contentSix: PropTypes.string,
  wrapperClass: PropTypes.string,
}

TabDemo.defaultProps = {
  wrapperClass: '',
}

export default TabDemo
