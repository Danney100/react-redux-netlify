import React, {useState, useRef} from 'react'
import {Col, Label, Input, Row} from 'reactstrap'
import JoditEditor from 'jodit-react'
import {makeStyles} from '@material-ui/core/styles'
import uploadButton from 'images/commonIcons/uploadButton.svg'

const useStyles = makeStyles({
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
})
const ProfileInformation = () => {
  const classes = useStyles()
  const [content, setContent] = useState('')
  const editor = useRef(null)
  const config = {
    readonly: false,
  }
  return (
    <Col>
      <Row form>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2" style={{width: '95px'}}>
              <Label className={classes.name}>Profile Website</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <Input />
            </Col>
          </Row>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`} style={{width: '95px'}}>
              Facebook
            </span>
            <Col xs={12} sm={12} md={8}>
              <Input placeholder="http://www.facebook.com/" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3" md={{size: 5, offset: 1}}>
          <Row form>
            <span className="mt-2 ml-2" style={{width: '95px'}}>
              <Label className={classes.name}>Profile Image</Label>
            </span>
            <Col xs={12} sm={12} md={8} className="mr-5 mb-2">
              <img src={uploadButton} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-1" md={{size: 11, offset: 1}}>
          <Row form className="mt-2">
            <span className={`${classes.name} mt-2 ml-2`}>Profile Message</span>
            <Col xs={12} sm={12} md={8}>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default ProfileInformation
