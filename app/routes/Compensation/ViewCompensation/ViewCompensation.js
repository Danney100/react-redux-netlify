import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import Heading from './components/Heading'
import PayoutTable from './components/PayoutTable'
import InfoTable from './components/InfoTable'
import Filter from './components/Filter'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .form-control': {
      width: '280px',
    },
    '& .filter': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .filter-label': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#403839',
    },
  },
})

const ViewCompensation = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Compensation > View Compensation')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
      item="success"
        wrapperClass="mx-0"
        content="View your compensation runs by Plan, Process and Run Cycle. 
                You can also review you compensation plan document and print checks 
                for committed runs."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Filter />
      <PayoutTable />
      <InfoTable />
    </div>
  )
}

export default ViewCompensation
