import React, {useContext, useEffect, useState} from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'
import MoonLoader from 'react-spinners/MoonLoader'
import {makeStyles} from '@material-ui/core/styles'
import {useSelector, useDispatch} from 'react-redux'

import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import * as util from 'helpers/util'
import AppContext from 'components/App/AppContext'
import JoinOptionTable from './components/JoinOptionTable'
import iconSearch from 'images/commonIcons/search.svg'
import Heading from './components/Heading'
import {setLoadingStatus} from 'duck/actions/process'
import {getJoinOptions, deleteJoinOption} from 'api'
import {useHistory} from 'react-router-dom'
import {setJoinOptionToEdit} from 'duck/actions/productConfiguration'

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
    '& .show-expired': {
      fontSize: '14px',

      fontWeight: 500,
      lineHeight: 1.43,
      fontFamily: 'SFUIText-Medium',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
  },
})
const JoinOptionManager = () => {
  const classes = useStyles()
  const [joinOptions, setJoinOptions] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()

  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Join Option Management')
  }, [])

  const requestData = () => {
    return getJoinOptions({token})
      .then((res) => {
        if (!res?.hasError) {
          setJoinOptions(res)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoadingStatus(false))
      })
  }

  useEffect(() => {
    dispatch(setLoadingStatus(true))
    requestData()
  }, [])

  const handleDelete = (row) => {
    const payload = {
      token: token,
      id: row.id,
    }
    deleteJoinOption(payload)
      .then((res) => {
        if (!res?.hasError) {
          requestData()
          util.showInfoNotification('Join Option deleted successfully')
        } else {
          util.showErrorNotification('Failed to delete Join Option')
        }
      })
      .catch((err) => console.log(err))
  }

  const handleEdit = (row) => {
    dispatch(setJoinOptionToEdit(row))
    history.push(`/join/join-option-edit/${row.id}`)
  }

  const override = ` display: block; margin: 0 auto `

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-4`}>
      <Heading />
      <Card className="pb-3">
        <CardBody>
          <CommonDemo
            item="danger"
            content="A join option configuration is assigned to a product to enable that product 
            in the join process, along with rules configured for the configuration. The join option 
            management page includes each join option configuration that has been created in the 
            application. To enable or disable a join option configuration use the Enabled checkbox 
            and Save Changes. A join option configuration needs to be enabled to be available for 
            assignment to a product."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
            wrapperClass="mx-0"
          />
        </CardBody>
        {isLoading ? (
          <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} css={override} />
        ) : (
          <JoinOptionTable data={joinOptions} editRow={handleEdit} deleteRow={handleDelete} />
        )}
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-sm-end mb-2">
          <CommonButton
            title="Cancel"
            buttonType="cancelButton"
            wrapperClass="ml-0"
            width={180}
            height={40}
          />
        </Col>
        <Col sm="auto" className="d-flex justify-content-sm-end mb-2">
          <CommonButton
            title="Save"
            buttonType="addItemButton"
            wrapperClass="ml-0"
            width={180}
            height={40}
          />
        </Col>
      </Row>
    </div>
  )
}

export default JoinOptionManager
