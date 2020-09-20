import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody, Input, CardTitle, FormGroup, Label} from 'reactstrap'
import AppContext from 'components/App/AppContext'
import CommonButton from 'routes/components/CommonButton'
import Name from './components/Name'
import ContactInformation from './components/ContactInformation'
import Identification from './components/Identification'

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
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
})

const EditContactInfo = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Profile > Edit Contact Info')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Edit Contact Info</span>

      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-bottom">
            <span className="sub-title">Name</span>
          </CardTitle>
          <Name />
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-botttom">
            <span className="sub-title">Contact Information</span>
          </CardTitle>
          <ContactInformation />
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-bottom">
            <span className="sub-title">Identification</span>
          </CardTitle>
          <Identification />
        </CardBody>
      </Card>
      <Card className="my-3">
        <CardBody>
          <CardTitle className="border-bottom">
            <span className="sub-title">Othere Information</span>
          </CardTitle>
          <Col md={{size: 4, offset: 1}}>
            <Row>
              <span className={`${classes.name} mt-2 ml-2`}>
                <Label for="exampleDate">Date of Birth</Label>
              </span>
              <Col>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
              </Col>
            </Row>
          </Col>
        </CardBody>
      </Card>
      <Row>
        <Col className="mb-3 d-flex justify-content-end">
          <CommonButton title="Cancel Change" buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default EditContactInfo
