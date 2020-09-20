import React, {useContext, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import {Map} from 'immutable'

import * as util from 'helpers/util'
import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import BasicInfo from './components/BasicInfo'
import ShoppingCarts from './components/ShoppingCarts'
import {createDisplayCategory, updateDisplayCategory} from 'api'
import {setDisplayCategoryToEdit} from 'duck/actions/productConfiguration'

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
    '& .label': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#403839',
    },
    '& .checkbox': {
      marginBottom: '0.2rem',
    },
    '& .active': {
      color: '#de8b6d',
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
    },
  },
})

const AddDisplayCategory = () => {
  const classes = useStyles()
  const {id} = useParams()
  const history = useHistory()
  const token = useSelector(({user}) => user.get('token'))

  const displayCategory = useSelector(({productConfig}) =>
    productConfig.get('displayCategory', Map({})).toJS(),
  )
  const {register, handleSubmit, errors} = useForm({
    defaultValues: {
      name: id ? displayCategory.name : '',
      description: id ? displayCategory.description : '',
      slug: id ? displayCategory.slug : '',
    },
  })

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle(
      id
        ? 'Product Configuration > Product Display Categories > Edit Display Category'
        : 'Product Configuration > Product Display Categories > Add New Display Category',
    )
  }, [])

  const routeChange = () => {
    history.push('/products/display-category-manager')
  }

  const dispatch = useDispatch()

  const saveDisplayCategory = (data) => {
    const payload = {
      token: token,
      data: data,
      id: id,
    }
    if (id) {
      updateDisplayCategory(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Display Category updated successfully')
            history.push('/products/display-category-manager')
            dispatch(setDisplayCategoryToEdit({}))
          } else {
            util.showErrorNotification('Failed to update Display Category')
          }
        })
        .catch((err) => console.log(err))
    } else {
      createDisplayCategory(payload)
        .then((res) => {
          if (!res?.hasError) {
            util.showInfoNotification('Display Category created successfully')
            history.push('/products/display-category-manager')
            dispatch(setDisplayCategoryToEdit({}))
          } else {
            util.showErrorNotification('Failed to create Display Category')
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <div className="d-flex mt-3 mt-lg-0">
        <h2 className="title">{id ? 'Edit Display Category' : 'Create Display Category'}</h2>
      </div>
      <BasicInfo register={register} errors={errors} />
      <ShoppingCarts />
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton
            title="Cancel"
            buttonType="cancelButton"
            onClick={routeChange}
            wrapperClass="ml-0"
          />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton
            title="Save"
            buttonType="addItemButton"
            wrapperClass="ml-0"
            onClick={handleSubmit(saveDisplayCategory)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddDisplayCategory
