import React, {useState, useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, Input, CardBody} from 'reactstrap'
import MoonLoader from 'react-spinners/MoonLoader'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import CommonDemo from 'routes/components/CommonDemo'
import iconSearch from 'images/commonIcons/search.svg'
import AppContext from 'components/App/AppContext'
import ProductTypeTable from './components/ProductTypeTable'
import Heading from './components/Heading'
import {getProductTypes, deleteProductType} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import * as util from 'helpers/util'
import {setProductTypeToEdit} from 'duck/actions/productConfiguration'

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

const ProductTypeManager = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')
  const [productTypes, setProductTypes] = useState([])

  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const dispatch = useDispatch()
  const history = useHistory()

  const context = useContext(AppContext)

  const {setTitle} = context
  useEffect(() => {
    setTitle('Product Configuration > Product Types')
  }, [])

  const requestData = () => {
    const payload = {
      token: token,
    }
    return getProductTypes(payload)
      .then((res) => {
        if (!res?.hasError) {
          setProductTypes(res)
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
    deleteProductType(payload)
      .then((res) => {
        if (!res?.hasError) {
          requestData()
          util.showInfoNotification('Product Type deleted successfully')
        } else {
          util.showErrorNotification('Failed to delete Product Type')
        }
      })
      .catch((err) => console.log(err))
  }

  const handleEdit = (row) => {
    dispatch(setProductTypeToEdit(row))
    history.push(`/products/product-type-edit/${row.id}`)
  }

  const override = ` display: block; margin: 0 auto `

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-5`}>
      <Heading />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="This is a help message based on the current active area."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="">
        <CardBody className="p-0 pb-3">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col>
              <span className="sub-title">Product Types</span>
            </Col>
            <Col xs="12" sm="4">
              <Input
                type="search"
                placeholder="search"
                onChange={(e) => setSearchVal(e.target.value)}
                className={`${!searchVal && 'searchIcon'}`}
              />
            </Col>
          </Row>
          <hr />
          {isLoading ? (
            <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} css={override} />
          ) : (
            <ProductTypeTable data={productTypes} editRow={handleEdit} deleteRow={handleDelete} />
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductTypeManager
