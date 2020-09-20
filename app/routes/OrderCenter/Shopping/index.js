import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import iconMenu from 'images/commonIcons/menu.svg'
import iconList from 'images/commonIcons/list.svg'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col, CardTitle, Input, Button, ButtonGroup, Card, Label, Badge} from 'reactstrap'
import PropTypes from 'prop-types'
import MoonLoader from 'react-spinners/MoonLoader'

import Product from './Product/index'
import Sidebar from './Sidebar'
import AppContext from 'components/App/AppContext'
import PaginationsList from 'routes/components/PaginationsList/index'
import {getAllProducts} from 'api'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  searchStyle: {
    width: 218,
  },
  title1: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  filterTitle: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  inpuStyle: {
    fontSize: '14px',
    color: '#adaaaa',
    fontFamily: 'SFUIText-Medium',
    height: 40,
    width: 218,
  },
  label: {
    fontSize: '14px',
    color: '#internal-text-inac',
    fontFamily: 'SFUIText-Semibold',
  },
  fontStyle: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  bkgrdImgSize: {
    width: 40,
    height: 175,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    height: 40,
    width: 175,
    marginLeft: 3.5,
  },
  menuStyle: {
    height: 30,
    width: 30,
    marginBottom: 10,
    cursor: 'pointer',
  },
  listStyle: {
    height: 30,
    width: 30,
    marginBottom: 10,
    marginLeft: 10,
    cursor: 'pointer',
  },
  badgeButton: {
    height: '40px',
    '& .btn': {
      backgroundColor: '#27BFA3',
      borderColor: '#27BFA3',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#27BFA3 !important',
        borderColor: '#27BFA3',
        boxShadow: 'none',
      },
      '&:focus': {
        backgroundColor: '#27BFA3 !important',
        borderColor: '#27BFA3',
        boxShadow: 'none',
      },
      fontSize: 13,
      fontFamily: 'SFUIText-Heavy',
    },
    '& .badge': {
      backgroundColor: 'white',
      color: '#27BFA3',
      borderRadius: '7.5px',
    },
    '& .fa-lg': {
      verticalAlign: '8% !important',
    },
  },
})

export const Shopping = (props) => {
  const classes = useStyles()
  const [setDropdownOpen] = useState(false)

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const itemCount = useSelector(({cart}) => cart.get('itemCount'))

  useEffect(() => {
    const token = props.user.get('token')
    setLoading(true)
    getAllProducts(token)
      .then((res) => {
        if (!res?.hasError) {
          setProducts(res)
          setLoading(false)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Order Center > Add Order')
  }, [])

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const [display, setShowDisplay] = useState(1)

  const toggleDisplay = (display) => {
    setShowDisplay(display)
  }

  const items = [
    {
      name: 'all products',
      label: 'All Products',
      items: [
        {name: 'wine club', label: 'Wine Club'},
        {
          name: 'wine',
          label: 'Wine',
          items: [
            {name: 'gift sets', label: 'Gift Sets'},
            {name: 'sparkling', label: 'Sparkling'},
            {
              name: 'white',
              label: 'White',
              items: [
                {name: 'fruity white', label: 'Fruity White'},
                {name: 'earth white', label: 'Earthy white'},
                {name: 'creamy', label: 'Creamy'},
                {name: 'crisp', label: 'Crisp'},
              ],
            },
            {name: 'rosé', label: 'Rosé'},
            {
              name: 'red',
              label: 'Red',
              items: [
                {name: 'fruity red', label: 'Fruity Red'},
                {name: 'earthy red', label: 'Earthy red'},
                {name: 'bold', label: 'Bold'},
                {name: 'light', label: 'Light'},
              ],
            },
          ],
        },
      ],
    },
    {name: 'circle', label: 'Circle Exclusive'},
    {name: 'scout circle tasting', label: 'Scout Circle Tasting'},
    {
      name: 'merch',
      label: 'Merch',
      items: [
        {name: 'wearables', label: 'Wearables'},
        {name: 'drinkware', label: 'Drinkware'},
        {name: 'entertaining', label: 'Entertaining'},
        {name: 'marketing tools', label: 'Marketing Tools'},
      ],
    },
  ]

  const history = useHistory()

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart'
    history.push(path)
  }

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  return (
    <>
      <Row className="d-flex">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Add Order</p>
        </Col>
        <Col className="p-3 d-flex justify-content-end">
          <span>
            <div className={classes.backgroundColor}>
              <ButtonGroup className={`${classes.badgeButton}`} onClick={routeChange}>
                <Button className="pr-2">
                  <i className="fa fa-shopping-cart mr-1"></i>My Cart{' '}
                  <span className="ml-1">{itemCount}</span>
                </Button>
                <Button style={{marginLeft: '1px'}}>
                  <i className="fa fa-sort-desc fa-lg"></i>
                </Button>
              </ButtonGroup>
            </div>
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <div className=" ml-4 mr-4 mt-4 mb-2 border-bottom">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <span className={classes.title1}>All Products</span>
                </div>
                <div>
                  <ButtonGroup md={2}>
                    <span>
                      <div>
                        <img
                          src={iconMenu}
                          className={classes.menuStyle}
                          onClick={() => {
                            toggleDisplay(1)
                          }}
                        />
                      </div>
                    </span>
                    <span>
                      <div>
                        <img
                          src={iconList}
                          className={classes.listStyle}
                          onClick={() => {
                            toggleDisplay(2)
                          }}
                        />
                      </div>
                    </span>
                  </ButtonGroup>
                </div>
              </CardTitle>
            </div>
            <Row className="m-0 p-3">
              <Col md={2} className="p-0 m-0 border-right mr-5">
                <Sidebar items={items} />
              </Col>
              <Col md={9} className="p-80%">
                <div>
                  <Row lg={12} md={12} sm={12} xs={12} form className="ml-5 pb-4">
                    <Col sm={1} className="mt-2 d-flex align-items-center">
                      <Label className={`${classes.filterTitle}`}>Sort by</Label>
                    </Col>
                    <Col sm={1} md={1} xl={{size: 3}} className="mt-1">
                      <Input type="select" className={classes.inpuStyle}>
                        <option defaultValue="">Popular</option>
                        <option>Lowest to Highest</option>
                        <option>Highest to Lowest</option>
                        <option>A-Z</option>
                      </Input>
                    </Col>
                    <Col md={4} className="mx-4"></Col>
                    <Col xs={12} sm={2} md={1} className="mt-1">
                      <CustomSearch className={classes.searchStyle} />
                    </Col>
                  </Row>
                  <Row className="product-grid-view align-items-center">
                    {loading ? (
                      <MoonLoader size={55} color={'#de8b6d'} loading={true} />
                    ) : (
                      <Product products={products} display={display} />
                    )}
                  </Row>
                  <PaginationsList />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

Shopping.propTypes = {
  cart: PropTypes.object,
  process: PropTypes.object,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  process: state.process,
  user: state.user,
})

export default connect(mapStateToProps)(Shopping)
