import React, {Component} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import {withStyles} from '@material-ui/core'
import PropTypes from 'prop-types'
import TransactionsContent from './Transactions/index'
import CommonDemo from 'routes/components/CommonDemo'
import {DemoData} from 'routes/constants/DemoData'

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
        color: '#423b3c',
        fontFamily: 'SFUIText-Semibold',
      },
    },
    '& .menu-item-wrapper.active': {
      borderBottomWidth: 2,
      borderBottomColor: '#423b3c',
      color: '#403839',
      '& .menu-item': {
        color: '#423b3c',
        fontFamily: 'Avenir-Heavy',
        fontSize: 14,
      },
    },
  },

})

const {FieldsDemo} = DemoData
const list = [
  {name: 'Transactions'},
  {name: 'Notes'},
  {name: 'Shipments'},
  {name: 'Returns'},
  {name: 'Invoices'},
  {name: 'Custom Fields'},
]

const MenuItem = ({text, selected}) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
}
MenuItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.any,
}

class OrderNav extends Component {
  state = {
    selected: 'Transactions',
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
        <div className="mt-2 border-bottom">
          <ScrollMenu
            data={menu}
            onSelect={this.onSelect}
            selected={selected}
            scrollToSelected={true}
            alignCenter={false}
            dragging={true}
            wrapperClass={classes.root}
            itemStyle={{outline: 'none'}}
            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            wheel={wheel}
          />
        </div>

        {(() => {
          switch (this.state.selected) {
            case 'Transactions':
              return <TransactionsContent />
            case 'Notes':
              return
            case 'Shipments Methods':
              return
            case 'Returns':
              return
            case 'Invoices':
              return
            case 'Custom Fields':
              return <CommonDemo content={FieldsDemo} />
          }
        })()}
      </div>
    )
  }
}
OrderNav.propTypes = {
  classes: PropTypes.object,
}
export default withStyles(useStyles)(OrderNav)
