import React, {useContext, useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Map} from 'immutable'
import * as util from 'helpers/util'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ClassificationForm from './components/ClassificationForm'
import {updateProductClassification, createProductClassification} from 'api'

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

const AddNewClassification = () => {
  const classes = useStyles()
  const [count, setCount] = useState(0)
  const token = useSelector(({user}) => user.get('token'))
  const {id} = useParams()

  const productClassification = useSelector(({productConfig}) =>
    productConfig.get('productClassification', Map({})).toJS(),
  )

  const {register, handleSubmit, errors} = useForm({
    defaultValues: {
      name: id ? productClassification.name : '',
      description: id ? productClassification.description : '',
    },
  })

  useEffect(() => {
    if (id) {
      setCount(parseInt(productClassification.max_per_order))
    }
  }, [id])

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    if (id) {
      setTitle('Product Configuration > Product Classifications > Edit Product Classification')
    } else {
      setTitle('Product Configuration > Product Classifications > Add Product Classification')
    }
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/products/product-classification-manager')
  }

  const saveClassification = (data) => {
    const payload = {
      token: token,
      data: data,
      id: id,
    }
    if (id) {
      updateProductClassification(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Product Classification updated successfully')
            history.push('/products/product-classification-manager')
          } else {
            util.showErrorNotification('Failed to update Product Classification')
          }
        })
        .catch((err) => console.log(err))
    } else {
      createProductClassification(payload)
        .then((res) => {
          if (!res?.hasError) {
            history.push('/products/product-classification-manager')
            util.showInfoNotification('Product classification created successfully')
          } else {
            util.showErrorNotification('Failed to update Product Classification')
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Create Product Classification</span>
      <Card className="my-3">
        <CardBody>
          <span className="sub-title">Basic Info</span>
          <hr />
          <CommonDemo
            wrapperClass="mx-0"
            content="A Product Classification is a logical grouping of products that support 
                    specific functional needs such as coupons, rewards, discounts, skywallet and trigger 
                    options. In the Product Classification Manger you can edit existing product 
                    classifications and create new ones."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <ClassificationForm
            register={register}
            errors={errors}
            setCount={setCount}
            count={count}
          />
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton title="Cancel" buttonType="cancelButton" onClick={routeChange} />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton
            title="Save Changes"
            buttonType="addItemButton"
            wrapperClass="ml-0"
            onClick={handleSubmit(saveClassification)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddNewClassification
