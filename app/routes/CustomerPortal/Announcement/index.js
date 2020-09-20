import React, {useContext, useEffect} from 'react'
import {Row, Col, Card} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import AnnouncementTable from './components/AnnouncementTable'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})
const index = () => {
  const history = useHistory()
  const classes = useStyles()
  const routeChange = () => {
    history.push('/customer-portal/announcement/create-announcement')
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Customer Portal > Announcement')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="d-flex justify-content-between mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Announcement Management</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end">
          <CommonButton
            title="New Announcement"
            onClick={() => routeChange()}
            buttonType="addItemButton"
          />
        </Col>
      </Row>
        <CommonDemo
          item="success"
          wrapperClass="mx-0"
          content="Announcements and subcategories that will be displayed to customers and consultants are displayed for easy viewing. The user can create and edit new or existing announcements within this interface. Recommended image sizes for: banner image only announcements: 470px wide by 330px high, banner with text announcement: 470px by 100px high."
          contentOne="Feature Guide Link "
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
        />
      <Card lg={12} md={12} sm={12} xs={12} className="mb-3 p-1">
        <div className="mt-2">
          <AnnouncementTable />
        </div>
      </Card>
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <CommonButton title="Cancel Changes" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default index
