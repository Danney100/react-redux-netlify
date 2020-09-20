import React, {useEffect, useContext} from 'react'
import {Col, Card, Row, CardBody} from 'components'
import {useHistory, useParams} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import {useForm} from 'react-hook-form'
import {Map} from 'immutable'
import {useSelector, useDispatch} from 'react-redux'

import * as util from 'helpers/util'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ProductTypeForm from './components/ProductTypeForm'
import {createProductType, updateProductType} from 'api'
import {setProductTypeToEdit} from 'duck/actions/productConfiguration'

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
    '& .pointer': {
      cursor: 'pointer',
    },
  },
})

function AddProductType() {
  const classes = useStyles()
  const token = useSelector(({user}) => user.get('token'))
  const context = useContext(AppContext)
  const {setTitle} = context
  const history = useHistory()

  const {id} = useParams()

  const dispatch = useDispatch()

  const productTypeToEdit = useSelector(({productConfig}) =>
    productConfig.get('productType', Map({})).toJS(),
  )
  const {register, handleSubmit, errors} = useForm({
    defaultValues: {
      name: id ? productTypeToEdit.name : '',
      description: id ? productTypeToEdit.description : '',
    },
  })

  useEffect(() => {
    if (id) {
      setTitle('Product Configuration > Product Types > Edit Product Type')
    } else {
      setTitle('Product Configuration > Product Types > Add Product Type')
    }
  }, [])

  const routeChange = () => {
    dispatch(setProductTypeToEdit({}))
    history.push('/products/product-type-manager')
  }

  const saveProductType = (data) => {
    const payload = {
      token: token,
      data: data,
      id: id,
    }
    if (id) {
      updateProductType(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Product Type updated successfully')
            history.push('/products/product-type-manager')
            dispatch(setProductTypeToEdit({}))
          } else {
            util.showErrorNotification('Failed to update Product Type')
          }
        })
        .catch((err) => console.log(err))
    } else {
      createProductType(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Product Type created successfully')
            history.push('/products/product-type-manager')
            dispatch(setProductTypeToEdit({}))
          } else {
            util.showErrorNotification('Failed to create Product Type')
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 pt-3 pt-lg-0`}>
      <span className="title">{id ? 'Edit Product Type' : 'New Product Type'}</span>
      <Card className="mb-3 mt-2">
        <CardBody>
          <span className="sub-title">Basic Info</span>
          <hr />
          <CommonDemo
            wrapperClass="mx-0"
            content="Create/edit a product type. You can set 
                    the name of the type and an optional description."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <ProductTypeForm register={register} errors={errors} />
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton
            title="Cancel"
            buttonType="cancelButton"
            onClick={routeChange}
            wrapperClass="m-0"
          />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton
            title="Save Changes"
            buttonType="addItemButton"
            wrapperClass="ml-0"
            onClick={handleSubmit(saveProductType)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddProductType
