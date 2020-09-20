import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import { Card, CardBody } from 'reactstrap'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CouponsFilter from './components/CouponsFilter'
import CouponsTable from './components/CouponsTable'

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
      '& .table-title': {
        fontFamily: 'DINCondensed-Bold',
        fontSize: '22px',
        fontWeight: 'bold',
        fontStretch: 'condensed',
        color: '#403839',
      },
      '& .commonBtn': {
        height: '40px',
        width: '147px'
      },
      '& .active': {
        color: '#de8b6d'
      },
      '& .inactive': {
        color: '#6c6766',
      },
      '& .label': {
        fontFamily: 'SFUIText-Semibold',
        fontSize: '14px',
        fontWeight: 600,
        color: '#403839',
      },
    },
})

const CouponsManager = () => {
    const classes = useStyles()
    const context = useContext(AppContext)
    const {setTitle} = context

    useEffect(() => {
        setTitle('Pricing & Discounts > Rewards Manager > Coupons Manager')
    }, [])
    
    return (
        <div className={`${classes.root} px-3 px-lg-0`}>
            <h2 className="title mt-3 mt-lg-0">Coupons Manager</h2>
            <CommonDemo
                item="success"
                content="Use this interface to view all previously created coupons by their coupon batch. 
                A row will be returned for each batch that was generated. If a batch was generated with a 
                random coupon code sequence, you can click on the 'Generated' link to view the coupon codes 
                the application created for that batch. Once a coupon from a batch has been redeemed on an 
                order, you can no longer edit the details of that batch other than the end date/time. 
                You can use the Expire Unused button to automatically expire all outstanding, unused coupons 
                from the batch."
                contentOne="Feature Guide Link "
                contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
                wrapperClass="mx-0"
            />      
            <CouponsFilter/>
            <Card className="my-3">
                <CardBody>
                <span className="sub-title" >Coupons</span>
                <hr/>
                </CardBody>
                <CouponsTable/>
            </Card>      
        </div>
    )
}

export default CouponsManager
