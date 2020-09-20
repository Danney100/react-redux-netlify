import React from 'react'
import {Modal, Card, CardBody, Row, Col, Input, Label} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import iconSearch from 'images/commonIcons/search.svg'
import TopBar from './components/TopBar'
import ToolBar from './components/ToolBar'
import FileManager from './components/FileManager'

import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  root: {
    '& .card': {
      boxShadow: 'none',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .searchIcon': {
      backgroundImage: `url(${iconSearch})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundOrigin: 'content-box',
    },
    '& .arrange-by': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#27bfa3',
      cursor: 'pointer',
    },
    '& .label': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.36,
      color: '#6c6766',
    },
    '& .dropdown-menu': {
      boxShadow: '0 10px 30px 0 #d9d7d6',
    },
    '& .upload-file': {
      position: 'relative',
      overflow: 'hidden',
      width: '140px',
      height: '40px',
      background: '#27bfa3',
      border: 'none',
      cursor: 'pointer',
      '& span': {
        fontFamily: 'SFUIText-Heavy',
        fontSize: '13px',
        fontWeight: 900,
        color: '#ffffff',
      },
      '& input': {
        position: 'absolute',
        opacity: 0,
        top: 0,
        right: 0,
        width: '140px',
        height: '40px',
      },
    },
    '& .shadow-div': {
      boxShadow: 'inset 0px 35px 35px #f5f4f4, inset 0px -35px 25px #f5f4f4',
      clipPath: 'inset(0px 15px 0px 15px)',
    },
    '& .select-file:hover': {
      boxShadow: 'inset 0 0 26px 0 rgba(108, 103, 102, 0.2)',
      borderRadius: '10px',
      cursor: 'pointer',
    },
  },
})

const InsertImage = ({toggle, modal}) => {
  const classes = useStyles()

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={`${classes.root} mx-4 mx-sm-auto`}
      style={{minWidth: '50%'}}>
      <Card>
        <CardBody>
          <span className="sub-title">Insert Image</span>
          <hr />
          <TopBar />
          <ToolBar />
          <FileManager />
          <Row className="pt-2">
            <Label sm="auto">Web Address</Label>
            <Col>
              <Input
                type="text"
                defaultValue="https://scoutandcellar.blob.core.windows.net/images-staging/pick4.png"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-lg-end mb-2">
              <CommonButton
                title="Cancel"
                buttonType="cancelModalButton"
                onClick={toggle}
                wrapperClass="ml-0"
              />
            </Col>
            <Col sm="auto" className="d-flex justify-content-lg-end">
              <CommonButton title="Select" buttonType="addButton" wrapperClass="ml-0" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Modal>
  )
}

export default InsertImage
