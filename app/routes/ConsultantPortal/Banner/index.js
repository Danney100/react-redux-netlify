import React, {useState, useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, ListGroupItem, Input, Col, Row} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import Heading from './components/Heading'
import BannerTable from './components/BannerTable'
import iconSearch from 'images/commonIcons/search.svg'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .searchIcon': {
      backgroundImage: `url(${iconSearch})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundOrigin: 'content-box',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
  },
  countryName: {
    color: '#DE8B6D',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
})

const Banner = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')

  const history = useHistory()
  const routeChange = () => {
    history.push('/consultant-portal/banner/display-banner-add')
  }
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Consultant Portal >  Banners >  Banner Management')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="The banner management page displays all banners that will be displayed to 
        customers and consultants. The user can create and edit new or existing banners 
        within this interface. The banners display order can also be adjusted using the 
        drag and drop feature. Recommended banner size for desk top: 
        1300px wide by 200px high for mobile devices: 390px wide by 200px high."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton
            title="New Banner"
            buttonType="addBannerButton"
            wrapperClass="float-lg-right ml-3"
            onClick={routeChange}
          />
        </Col>
      </Row>
      <Card className="my-3">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col xs="12" lg="9">
              <span className="sub-title">Banners</span>
            </Col>
            <Col xs="8" sm="8" md="5" lg="3">
              <Input
                type="search"
                placeholder="search"
                onChange={(e) => setSearchVal(e.target.value)}
                className={`${!searchVal && 'searchIcon'}`}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="border-right">
              <ListGroupItem className={classes.countryName}>
                <Row md={2}>
                  <Col xs="6"> Location: Top </Col>
                  <Col xs="6" className="d-flex align-items-center justify-content-end">
                    <i className="fa fa-angle-right mr-2"></i>
                  </Col>
                </Row>
              </ListGroupItem>
            </Col>
            <Col md={9} sm={12} xs={12}>
              <BannerTable />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default Banner
