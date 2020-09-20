import React from 'react'
import {Media, ListGroupItem} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  Radius: {
    borderRadius: 6,
  },
})

const TabDemo = (props) => {
  const {content} = props
  const classes = useStyles()

  return (
    <div className={classes.Radius}>
      <ListGroupItem className={classes.demos}>
        <Media>
          <Media>
            <div className={classes.media}>
              <i className="fa fas fa-check text-primary"></i>
            </div>
          </Media>
          <Media className="ml-4">
            <span>
              <p>{content}</p>
            </span>
          </Media>
        </Media>
      </ListGroupItem>
    </div>
  )
}

TabDemo.propTypes = {
  content: PropTypes.string.isRequired,
}

export default TabDemo
