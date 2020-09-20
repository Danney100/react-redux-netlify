import React, {useState, useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, ListGroupItem, Input, Col, Row} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import iconSearch from 'images/commonIcons/search.svg'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'
import ResourceTable from './components/ResourceTable'

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

const index = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')

  const history = useHistory()
  const routeChange = () => {
    history.push('/customer-portal/resources/create-resources')
  }
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Consultant Portal > Resources')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Row className="pt-3 pt-lg-0">
        <Col sm="auto" className="mr-auto">
          <span className="title">Portal Resources Manager</span>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="This page allows you to manage portal resources. You can rearrange your resources by dragging and droping then from one folder to another folder. You can re-order resources by dragging and dropping them within the same folder (or top level)."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Row className="justify-content-between">
        <Col md={{size: 6}} className="mb-3 d-flex justify-content-start">
          <CommonButton
            title="Expand All"
            buttonType="ExpandButton"
            wrapperClass="float-lg-right"
          />
          <CommonButton
            title="Collapse All"
            buttonType="ExpandButton"
            wrapperClass="float-lg-right ml-3"
          />
        </Col>
        <Col md={{size: 6}} className="mb-3 d-flex justify-content-end">
          <CommonButton
            title="Add New Resources"
            buttonType="addBannerButton"
            wrapperClass="float-lg-right"
            onClick={routeChange}
          />
          <CommonButton
            title="Add New Folder"
            buttonType="addBannerButton"
            wrapperClass="float-lg-right ml-3"
          />
        </Col>
      </Row>
      <Card className="my-3">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col xs="12" lg="9">
              <span className="sub-title">Resources</span>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12} sm={12} xs={12}>
              <ResourceTable />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Row>
        <Col className="mb-5 mt-3 d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default index
