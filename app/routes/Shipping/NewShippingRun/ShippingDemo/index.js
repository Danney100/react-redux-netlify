import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, Input, Media, CardBody, ListGroupItem} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'

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
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },

  selectStyle: {
    borderColor: 'white',
    backgroundColor: 'white',
    color: '#27BFA3',
    width: 230,
  },
})

export const ShippingRun = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('New Shipping Run')
  }, [])

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top border-bottom">
              <Row>
                <Col lg="6">
                  <span className="h5 text-dark font-weight-bold">
                    Shipping File Run Configuration
                  </span>
                </Col>
                <Col
                  lg={{size: 3, offset: 3}}
                  className="d-flex justify-content-center justify-content-lg-end">
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    className={classes.selectStyle}>
                    <option>Select Previous Configurations</option>
                  </Input>
                </Col>
              </Row>
            </CardBody>
            <ListGroupItem className={classes.demos}>
              <Media className="d-flex">
                <Media>
                  <div className={classes.media}>
                    <i className="fa fas fa-check text-primary"></i>
                  </div>
                </Media>
                <Media className="ml-4">
                  <span className="text-dark">
                    This is where you configure a shipping file run. You can also save the
                    configuration so that it can used again later
                    <p>
                      Feature Guide Link <i className="fa fas fa-long-arrow-right"></i>
                    </p>
                  </span>
                </Media>
              </Media>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingRun
