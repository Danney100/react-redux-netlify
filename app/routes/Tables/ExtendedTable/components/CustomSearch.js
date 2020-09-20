import React from 'react'
import PropTypes from 'prop-types'
import {Input, InputGroup, Button, InputGroupAddon} from 'components'

export class CustomSearch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onSearch: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onSearch(this.state.value)
    }
  }

  render() {
    return (
      <InputGroup className={`sc-custom-search ${this.props.className}`} size="md">
        <Input
          className={ `sc-input ${this.state.value ? 'sc-input--has-clear' : ''}` }
          onChange={(e) => {
            this.setState({value: e.target.value})
          }}
          value={this.state.value}
          bsSize="lg"
          placeholder="Search"
        />
        <InputGroupAddon addonType="append">
          {this.state.value && (
              <Button
                className="sc-custom-search__clear-btn"
                color="link"
                onClick={() => {
                  this.setState({value: ''})
                }}>
                <i className="fa fa-fw fa-times"></i>
              </Button>
          )}
          <i className="fa fa-search fa-fw"></i>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}
