import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardBody} from 'components'
import ReactPlayer from 'react-player'

const Player = ({url, description}) => {
  return (
    <Card className="mb-4">
      <CardBody>
      <div className="embed-responsive embed-responsive-16by9">
        <ReactPlayer url={url} width="100%" height="100%" className="embed-responsive-item r-player" />
      </div>
        <div className="d-flex m-2 text-center">
          <span>
            <a className="h6 text-decoration-none font-weight-bold" href="#">
              Scout & Cellar - &nbsp;
            </a>
            {description}
          </span>
        </div>
      </CardBody>
    </Card>
  )
}

Player.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
}

export default Player
