import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import JoditEditor from 'jodit-react'
import {CustomInput} from 'components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  font: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  size: {
    height: '300px',
  },
  boxStyle: {
    marginTop: 10,
  },
})
const EditAnnouncements = () => {
  const IconButton = ({icon, className}) => (
    <div className={`${className} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
    </div>
  )
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const history = useHistory()
  const classes = useStyles()
  const [content, setContent] = useState('')
  const routeChange = () => {
    history.push('/consultant-portal/announcement')
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Consultant Portal > Announcement > Edit Announcement')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Edit Announcement</p>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="The edit announcement page allows the user to update existing announcements. The user can update the name, description, display locations, and custom website urls."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>Edit Announcement</p>
          <hr className={classes.border} />
        </div>
        <div className="mt-2">
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Title</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Announcement Date (Asia/Shanghai)</Label>
                <Input className={classes.font} type="date" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Display Begin Date (Asia/Shanghai)</Label>
                <Input className={classes.font} type="datetime-local" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Display End Date (Asia/Shanghai)</Label>
                <Input className={classes.font} type="datetime-local" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 8, offset: 2}}>
              <FormGroup>
                <Label className={classes.name}>Announcement Type</Label>
                <Input className={classes.value} type="select">
                  <option>Image</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 7, offset: 2}}>
              <FormGroup>
                <Label className={classes.name}>Announcement Type</Label>
                <Input className={classes.value} type="select">
                  <option>Image</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xl={{size: 3}} className="mt-4 mb-2 d-flex justify-content-start">
              <CommonButton title="Choose Image" buttonType="filterButton" />
            </Col>
          </Row>
          <Row form className="mt-1">
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-1">
                <Label className={classes.name}>Link To</Label>
                <Input className={classes.value} type="select">
                  <option>Announcement Page</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-1">
                <Label className={classes.name}>Link Target</Label>
                <Input className={classes.value} type="select">
                  <option>New Tab / Window</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mb-4">
            <Col md={{size: 8, offset: 2}}>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />
            </Col>
          </Row>
          <Row form className="mt-5 mb-5">
            <Col md={{size: 1, offset: 2}}>
              <CustomInput type="checkbox" id="Enabled" label="Enabled" className={classes.label} />
            </Col>
            <Col md={{size: 4}}>
              <CustomInput type="checkbox" id="Sticky" label="Sticky" className={classes.label} />
            </Col>
          </Row>
        </div>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>Display Conditions</p>
          <hr className={classes.border} />
        </div>
        <div>
          <Row className="mx-5 mt-2 mb-4">
            <Col md={{size: 3, offset: 3}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}>Countries</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>United States</span>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Languages</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> English</span>
              </Row>
            </Col>
            <Col md={{size: 2}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}> Consultant Rank Types</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}> Consultant</span>
              </Row>
              <Row className="ml-3 mt-4 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Senior Consultant</span>
              </Row>
              <Row className="ml-3 mt-4 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Executive Consultant</span>
              </Row>
            </Col>
          </Row>
          <Row className="mx-5 mt-2 mb-4">
            <Col md={{size: 3, offset: 3}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}>Consultant Types</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Consultant</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Circle Consultant</span>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-2">
                <Input type="checkbox" className={classes.boxStyle} />
                <span className={classes.check}>Consultant Statuses</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Active</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>InActive</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Hold</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Suspended</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Financial Hold</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Cancelled</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Incomplete</span>
              </Row>
            </Col>
            <Col md={{size: 2}}>
              <Row className="ml-3">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Associate Manager</span>
              </Row>
              <Row className="ml-3 mt-4 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Senior Manager</span>
              </Row>
              <Row className="ml-3 mt-4 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Executive Manager</span>
              </Row>
              <Row className="ml-3 mt-4 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Associate Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Senior Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Executive Director</span>
              </Row>
              <Row className="ml-3 mt-3 ">
                <Input type="checkbox" />
                <span className={classes.subcheck}>Managing Director</span>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <CommonButton title="Cancel" onClick={() => routeChange()} buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default EditAnnouncements
