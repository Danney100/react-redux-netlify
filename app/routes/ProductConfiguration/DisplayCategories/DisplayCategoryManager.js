import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody} from 'components'
import { useDispatch, useSelector } from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import { useHistory } from 'react-router'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'

import * as util from 'helpers/util'
import Heading from './components/Heading'
import DataTreeView from './components/DataTreeView'
import { setLoadingStatus } from 'duck/actions/process'
import {getDisplayCategories, deleteDisplayCategory} from 'api'
import { setDisplayCategoryToEdit } from 'duck/actions/productConfiguration'

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
  },
})

const DisplayCategoryManager = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [displayCategories, setDisplayCategories] = useState([])
  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Product Configuration > Product Display Categories')
  }, [])
  
  const requestData = () => {
    return getDisplayCategories({token})
      .then((res) => {
        if (!res?.hasError) {
          setDisplayCategories(res)
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
    deleteDisplayCategory(payload)
      .then((res) => {
        if (!res?.hasError) {
          requestData()
          util.showInfoNotification('Display Category deleted successfully')
        } else {
          util.showErrorNotification('Failed to delete Display Category')
        }
      })
      .catch((err) => console.log(err))
  }

  const handleEdit = (row) => {
    dispatch(setDisplayCategoryToEdit(row))
    history.push(`/products/display-category-edit/${row.id}`)
  }
  
  const override = ` display: block; margin: 0 auto `
  
  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        wrapperClass="mx-0"
        content="To restructure categories, just drag and drop a category to its new location."
      />
      <Card>
        <CardBody>
          <span className="sub-title">Categories</span>
          <hr />
            {isLoading ? (
              <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} css={override} />
            ) : (
            <Row className="d-flex justify-content-end">
              <Col sm={10}>
                  <DataTreeView data={displayCategories}  editRow={handleEdit} deleteRow={handleDelete} />
              </Col>
            </Row>
            )}
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton title="Cancel Changes" buttonType="cancelButton" />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton title="Save Changes" buttonType="addItemButton" wrapperClass="ml-0" />
        </Col>
      </Row>
    </div>
  )
}

export default DisplayCategoryManager
