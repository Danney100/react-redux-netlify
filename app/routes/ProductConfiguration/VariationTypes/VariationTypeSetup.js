import React, {useContext, useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody, Input} from 'components'
import {useDispatch, useSelector} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'

import CommonDemo from 'routes/components/CommonDemo'
import iconSearch from 'images/commonIcons/search.svg'
import AppContext from 'components/App/AppContext'
import VariationTypeTable from './components/VariationTypeTable'
import AddVariationType from './components/AddVariationType'
import Heading from './components/Heading'
import {getVariationTypes} from 'api'
import {setLoadingStatus} from 'duck/actions/process'

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

const VariationTypeSetup = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const [searchVal, setSearchVal] = useState('')
  const dispatch = useDispatch()

  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const [variationData, setVariationData] = useState({})
  const [variationTypes, setVariationTypes] = useState([])

  const context = useContext(AppContext)

  const {setTitle} = context

  useEffect(() => {
    setTitle('Product Configuration > Variation Types')
  }, [])

  const requestData = () => {
    return getVariationTypes({token})
      .then((res) => {
        if (!res?.hasError) {
          setVariationTypes(res.data)
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

  const handleEdit = (row) => {
    setVariationData(row)
    toggle()
  }

  const override = ` display: block; margin: 0 auto `

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <AddVariationType
        modal={modal}
        toggle={toggle}
        variation={variationData}
        setVariation={setVariationData}
        requestData={requestData}
      />
      <Heading toggle={toggle} setVariationData={setVariationData} />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="This is a help message based on the current active area."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="my-3 pb-3">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col>
              <span className="sub-title">Variation Types</span>
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
            <VariationTypeTable
              data={variationTypes}
              toggle={toggle}
              setVariationData={setVariationData}
              editRow={handleEdit}
            />
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default VariationTypeSetup
