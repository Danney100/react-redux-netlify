import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Modal, ModalBody, ModalHeader, Button} from 'components'
import ModelTable from '../ModelTable'
import CommonDemo from 'routes/components/CommonDemo'
import {getTransactions} from 'api'
import {showErrorNotification} from 'helpers/util'
import {makeStyles} from '@material-ui/core/styles'
import {
  cssTable,
} from 'styles/sc-jss-components'

const TransactionButton = ({user, customer}) => {
  const useStyles = makeStyles({
    root: {
      ...cssTable(),
      '& .table td': {
        verticalAlign: 'baseline !important',
      },
    },
  },{ name: 'scTransactionButton' })

  const classes = useStyles()
  const token = user.get('token')
  const customerId = customer.get('customerToDisplay')
  const [modal, setModal] = useState(false)
  const [dataTable, setDataTable] = useState(null)
  
  const toggle = () => {
    setModal(!modal)
    if (customerId) {
      getTransactions(customerId, token, 'customer')
      .then((res) => {
        if (!res?.hasError) {
          setDataTable(res)
        } else {
          console.log(res)
          showErrorNotification(res.response.data.message)
        }
      })
      .catch((err) => console.log(err))
    }
  }

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoTwo =
    'The transactions that belong to the selected Sky Wallet balance are displayed here.'

  return (
    <div className="sc-btn-action--layout">
      <Modal isOpen={modal} toggle={toggle} className={classes.root}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Transactions
        </ModalHeader>
        <ModalBody>
          <CommonDemo content={DemoTwo} />
          <ModelTable tableData={dataTable}/>
        </ModalBody>
      </Modal>
      <Button
        className="sc-btn-action px-1"
        color="link"
        onClick={toggle}
      >
        <span className="sc-btn-action__icon rounded-circle">
          <i className="fa fa-usd sc-btn-action__img"></i>
        </span>
        Transactions
      </Button>
    </div>
  )
}

TransactionButton.propTypes = {
  user: PropTypes.object,
  customer: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  customer: state.customer,
})

export default connect(mapStateToProps)(TransactionButton)