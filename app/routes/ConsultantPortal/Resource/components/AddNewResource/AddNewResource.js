import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody, Input} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ClassificationForm from './components/ClassificationForm'
import ResourceOptions from './components/ResourceOptions'
import DisplayConditions from './components/DisplayConditions/index'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .second-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '21px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
    '& .checkboxStyle': {
      marginTop: 5,
    },
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  boxStyle: {
    marginTop: 10,
  },
})

const AddNewResource = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Consultant Portal > Resources > New Resource')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/consultant-portal/resource')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Create Resource</span>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="This page allows you to edit a portal resource that can 
        eventually be viewed by consultants or customers."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="my-3">
        <CardBody>
          <span className="sub-title">Display Options</span>
          <hr />
          <ClassificationForm />
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <span className="sub-title">Resource Options</span>
          <hr />
          <ResourceOptions />
        </CardBody>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <DisplayConditions />
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Cancel" buttonType="cancelButton" onClick={routeChange} />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default AddNewResource
