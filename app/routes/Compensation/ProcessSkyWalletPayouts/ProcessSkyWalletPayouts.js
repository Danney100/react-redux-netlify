import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'

import Heading from './components/Heading'
import SkyWalletTable from './components/SkyWalletTable'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
  },
})

const ProcessSkyWalletPayouts = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Compensation > Sky Wallet Payouts')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content='Use this interface to process payouts from Sky Wallet. 
                The available payout methods are displayed below. To process payouts 
                for a specific method, select "Process" next to the desired method. 
                You can also create a new payout method or edit an existing method 
                by naivgating directly to "Manage Payout Methods".'
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <SkyWalletTable />
    </div>
  )
}

export default ProcessSkyWalletPayouts
