import React, {Component} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import {withStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
import CommonDemo from 'routes/components/CommonDemo'
import {DemoData} from 'routes/constants/DemoData'
import PartiesTable from '../PartiesTable'
import NotesContent from './MenuContent/NotesContent'
import AddressContent from './MenuContent/AddressContent'
import PaymentContent from './MenuContent/PaymentContent'
import OrderContent from './MenuContent/OrderContent'
import MembershipContent from './MenuContent/MembershipContent'
import ConsultantContent from './MenuContent/ConsultantContent'
import CustomerContent from './MenuContent/CustomerContent'
import LeadContent from './MenuContent/LeadContent'
import DownlineContent from './MenuContent/DownlineContent'
import EarningContent from './MenuContent/EarningContent'
import WalletContent from './MenuContent/WalletContent'
import AccountContent from './MenuContent/AccountContent'
import AjustmentsContent from './MenuContent/AdjustmentsContent'

const useStyles = () => ({
  root: {
    '& .menu-item-wrapper ': {
      border: '1px transparent solid',
      '& .menu-item ': {
        padding: ' 0 10px',
        margin: '7px 5px',
        userSelect: 'none',
        cursor: 'pointer',
        border: '1px transparent solid',
        color: 'rgba(64, 56, 57, 0.5)',
        fontFamily: 'SFUIText-Semibold',
      },
    },
    '& .menu-item-wrapper.active': {
      borderBottomWidth: 5,
      borderBottomColor: 'black',
      color: '#403839',
      '& .menu-item': {
        color: '#403839',
        fontFamily: 'SFUIText-Semibold',
      },
    },
    '& .scroll-menu-arrow': {
      padding: '20px',
      cursor: 'pointer',
    },
    '& .scroll-menu-arrow--disabled': {
      visibility: 'hidden',
    },
  },
})

const {FieldsDemo} = DemoData
const list = [
  {name: 'Notes'},
  {name: 'Addresses'},
  {name: 'Payment Methods'},
  {name: 'Orders'},
  {name: 'Memberships'},
  {name: 'Consultants'},
  {name: 'Customers'},
  {name: 'Leads'},
  {name: 'Custom Fields'},
  {name: 'Downline'},
  {name: 'Earnings'},
  {name: 'Sky Wallet'},
  {name: 'Accounts'},
  {name: 'Adjustments'},
  {name: 'Parties'},
]

const MenuItem = ({text, selected}) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
}
MenuItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.any,
}

const Arrow = ({text, className}) => {
  return <div className={className}>{text}</div>
}
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'})
const ArrowRight = Arrow({text: '>', className: 'arrow-next'})

class ScrollingMenu extends Component {
  state = {
    selected: 'Notes',
    hideSingleArrow: true,
    hideArrows: true,
    wheel: true,
  }

  constructor(props) {
    super(props)
    this.menu = null
  }

  onSelect = (key) => {
    console.log(`onSelect: ${key}`)
    this.setState({selected: key})
  }

  render() {
    const {selected, hideSingleArrow, hideArrows, wheel} = this.state
    const {classes} = this.props
    const menu = list.map((el) => {
      return <MenuItem text={el.name} key={el.name} selected={selected} />
    })

    return (
      <div>
        <div className="m-3">
          <ScrollMenu
            data={menu}
            onSelect={this.onSelect}
            selected={selected}
            scrollToSelected={true}
            alignCenter={false}
            dragging={true}
            wrapperClass={classes.root}
            itemStyle={{outline: 'none'}}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            wheel={wheel}
          />
        </div>

        {(() => {
          switch (this.state.selected) {
            case 'Notes':
              return <NotesContent />
            case 'Addresses':
              return <AddressContent />
            case 'Payment Methods':
              return <PaymentContent />
            case 'Orders':
              return <OrderContent />
            case 'Memberships':
              return <MembershipContent />
            case 'Consultants':
              return <ConsultantContent />
            case 'Customers':
              return <CustomerContent />
            case 'Leads':
              return <LeadContent />
            case 'Custom Fields':
              return <CommonDemo content={FieldsDemo} />
            case 'Downline':
              return <DownlineContent />
            case 'Earnings':
              return <EarningContent />
            case 'Sky Wallet':
              return <WalletContent />
            case 'Accounts':
              return <AccountContent />
            case 'Adjustments':
              return <AjustmentsContent />
            case 'Parties':
              return (
                <div className="mx-3">
                  <PartiesTable />
                </div>
              )
          }
        })()}
      </div>
    )
  }
}
ScrollingMenu.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(useStyles)(ScrollingMenu)
