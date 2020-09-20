import React, {useState, useEffect} from 'react'
import {Row, Col, Card, CardBody, CardTitle, Button, ButtonGroup, Collapse} from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import {Map} from 'immutable'

import SearchButton from '../SearchButton'
import EditProduct from '../EditProduct'
import Navs from '../Navs'
import {getProductDetails} from 'api'
import {setProductDetails} from 'duck/actions/products'

export const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen(!isOpen)

  const productToDisplay = useSelector(({products}) => products.get('productToDisplay', null))
  const productDetails = useSelector(({products}) => products.get('productDetails', Map()).toJS())
  const token = useSelector(({user}) => user.get('token'))

  const dispatch = useDispatch()

  useEffect(() => {
    if (productToDisplay) {
      const payload = {
        id: productToDisplay,
        token: token,
      }
      getProductDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setProductDetails(res))
          } else {
            dispatch(setProductDetails({}))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [productToDisplay])

  if (!productToDisplay || Object.keys(productDetails).length === 0) {
    return ''
  }

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary">
              <CardTitle tag="h5" className="mb-0 text-white d-flex justify-content-between">
                <div>
                  <i className="fa fa-archive" aria-hidden="true"></i>
                  <span className="big ml-1"> Product Search: 2324</span>
                </div>
                <div className="d-flex" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen} className="m-3">
              <Row>
                <Col className="text-lg-right text-center">
                  <ButtonGroup>
                    <Button color="info">
                      <i className="fa fas fa-fast-backward mr-1"></i>
                      <span>First</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-step-backward mr-1"></i>
                      <span>Prev</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-step-forward mr-1"></i>
                      <span>Next</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-fast-forward mr-1"></i>
                      <span>Last</span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <SearchButton productId={productToDisplay} />
              <EditProduct details={productDetails} />
              <Navs />
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
