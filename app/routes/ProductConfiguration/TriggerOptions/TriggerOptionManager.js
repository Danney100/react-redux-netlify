import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Card, Input, CardBody} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import TriggerOptionTable from './components/TriggerOptionTable'
import Heading from './components/Heading' 
import iconSearch from 'images/commonIcons/search.svg'

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
    '& .active': {
      color: '#de8b6d'
    },
    '& .inactive': {
      color: '#6c6766',
    }
  },
})

const TriggerOptionManager = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')
  const [isExpired, setIsExpired] = useState(false)

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Trigger Options Manager')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-4`}>
      <Heading/>
      <Card>
        <CardBody>
          <CommonDemo
            item="success"
            content="The search feature allows users to search based on various fields that are associated
              with chosen center. This search feature allows users to run generic searches or if
              desired they can build complex queries with dependent and smart operators."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
            wrapperClass="mx-0"
          />
          <Row className="mb-3">
              <Col sm="5" md="5" lg="3">
                  <Input
                      type="search"
                      placeholder="search"
                      onChange={(e) => setSearchVal(e.target.value)}
                      className={`${!searchVal && 'searchIcon'}`}
                  />
              </Col>
              <Col sm="7" lg="9" className="mt-3 mt-sm-2 text-sm-right">
                  <Input type="checkbox" onChange={()=>setIsExpired(!isExpired)} className="ml-0"/> 
                  <span className={`${isExpired?'active':'inactive'} pl-4`}>Show Expired</span>
              </Col>
          </Row>
        </CardBody>
        <TriggerOptionTable/>
      </Card>
    </div>
  )
}

export default TriggerOptionManager
