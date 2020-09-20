import React, {useEffect, useContext, useState} from 'react'
import {Row, Col, Input, Card, CardBody} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import FilterRow from './components/FilterRow'
import GiftCardTable from './components/GiftCardTable'
import CodeFormatModal from './components/CodeFormatModal'
import CommonDemo from 'routes/components/CommonDemo'
import iconSearch from 'images/commonIcons/search.svg'
import Heading from './components/Heading'

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
    '& .export-to-excel': {
      fontFamily: 'SFUIText-Medium',
      fontSize: '14px',
      fontWeight: 500,
      color: '#707070',
    },
    '& .label': {
      fontSize: '14px',
      color: '#403839',
      fontFamily: 'SFUIText-Semibold',
    },
    '& .filter-value': {
      fontSize: '14px',
      color: '#6c6766',
      fontFamily: 'SFUIText-Medium',
    },
  },
})

const GiftCards = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Gift Cards')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-4`}>
      <Heading toggle={toggle} />
      <Card>
        <CardBody className="p-0">
          <div className="card-body">
            <CodeFormatModal modal={modal} toggle={toggle} />
            <CommonDemo
              item="danger"
              content="Here you can see your outstanding gift cards as well as those 
                            that have been redeemed."
              contentOne="Feature Guide Link "
              contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
              wrapperClass="mx-0"
            />
            <CommonDemo
              item="warning"
              content="The gift card results have been limited to the most recent 500."
              wrapperClass="mx-0"
            />
            <FilterRow />
            <Row className="mb-3">
              <Col sm="5" md="5" lg="3">
                <Input
                  type="search"
                  placeholder="search"
                  onChange={(e) => setSearchVal(e.target.value)}
                  className={`${!searchVal && 'searchIcon'}`}
                />
              </Col>
              <Col sm="7" lg="9" className="pt-2 text-sm-right export-to-excel">
                <i className="fa fa-file-excel-o mr-2" />
                Export to Excel
              </Col>
            </Row>
          </div>
          <GiftCardTable />
        </CardBody>
      </Card>
    </div>
  )
}

export default GiftCards
