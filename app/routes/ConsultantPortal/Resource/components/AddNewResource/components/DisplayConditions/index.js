import React, {Component} from 'react'
import {Col, Input, Row} from 'reactstrap'
import {withStyles} from '@material-ui/core/styles'
import CheckBox from './CheckBox'
import PropTypes from 'prop-types'

const useStyles = () => ({
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    marginTop: 10,
  },
  boxStyle: {
    marginTop: 10,
  },
})

class DisplayConditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [{id: 1, value: 'United States', isChecked: false}],
      consultantType: [
        {id: 1, value: 'Consultant', isChecked: false},
        {id: 2, value: 'Circle Consultant', isChecked: false},
      ],
      languages: [{id: 1, value: 'English', isChecked: false}],
      consultanetStatuses: [
        {id: 1, value: 'Active', isChecked: false},
        {id: 2, value: 'Inactive', isChecked: false},
        {id: 3, value: 'Hold', isChecked: false},
        {id: 4, value: 'Suspended', isChecked: false},
        {id: 5, value: 'Fininancial Hold', isChecked: false},
        {id: 6, value: 'Canceled', isChecked: false},
        {id: 7, value: 'Incompleted', isChecked: false},
      ],
      rankTypes: [
        {id: 1, value: 'Consultant', isChecked: false},
        {id: 2, value: 'Associate Consultant', isChecked: false},
        {id: 3, value: 'Senior Consultant', isChecked: false},
        {id: 4, value: 'Excutive Consultant', isChecked: false},
        {id: 5, value: 'Associate Manager', isChecked: false},
        {id: 6, value: 'Senior Manager', isChecked: false},
        {id: 7, value: 'Excutive Manager', isChecked: false},
        {id: 8, value: 'Associate Director', isChecked: false},
        {id: 9, value: 'Director', isChecked: false},
        {id: 10, value: 'Senior Director', isChecked: false},
        {id: 11, value: 'Excutive Director', isChecked: false},
        {id: 12, value: 'Managing Director', isChecked: false},
      ],
    }
  }

  handleAllChecked1 = (event) => {
    let countries = this.state.countries
    countries.forEach((country) => (country.isChecked = event.target.checked))
    this.setState({countries: countries})
  }
  handleAllChecked2 = (event) => {
    let consultantType = this.state.consultantType
    consultantType.forEach((consultant) => (consultant.isChecked = event.target.checked))
    this.setState({consultantType: consultantType})
  }
  handleAllChecked3 = (event) => {
    let languages = this.state.languages
    languages.forEach((language) => (language.isChecked = event.target.checked))
    this.setState({languages: languages})
  }
  handleAllChecked4 = (event) => {
    let consultanetStatuses = this.state.consultanetStatuses
    consultanetStatuses.forEach(
      (consultanetStatus) => (consultanetStatus.isChecked = event.target.checked),
    )
    this.setState({consultanetStatuses: consultanetStatuses})
  }
  handleAllChecked5 = (event) => {
    let rankTypes = this.state.rankTypes
    rankTypes.forEach((rankTyple) => (rankTyple.isChecked = event.target.checked))
    this.setState({rankTypes: rankTypes})
  }

  handleCheckChieldElement1 = (event) => {
    let countries = this.state.countries
    countries.forEach((country) => {
      if (country.value === event.target.value) country.isChecked = event.target.checked
    })
    this.setState({countries: countries})
  }
  handleCheckChieldElement2 = (event) => {
    let consultantType = this.state.consultantType
    consultantType.forEach((consultant) => {
      if (consultant.value === event.target.value) consultant.isChecked = event.target.checked
    })
    this.setState({consultantType: consultantType})
  }
  handleCheckChieldElement3 = (event) => {
    let languages = this.state.languages
    languages.forEach((language) => {
      if (language.value === event.target.value) language.isChecked = event.target.checked
    })
    this.setState({languages: languages})
  }
  handleCheckChieldElement4 = (event) => {
    let consultanetStatuses = this.state.consultanetStatuses
    consultanetStatuses.forEach((consultanetStatus) => {
      if (consultanetStatus.value === event.target.value)
        consultanetStatus.isChecked = event.target.checked
    })
    this.setState({consultanetStatuses: consultanetStatuses})
  }
  handleCheckChieldElement5 = (event) => {
    let rankTypes = this.state.rankTypes
    rankTypes.forEach((rankType) => {
      if (rankType.value === event.target.value) rankType.isChecked = event.target.checked
    })
    this.setState({rankTyples: rankTypes})
  }

  render() {
    const {classes} = this.props
    return (
      <>
        <div tag="h5">
          <p className="sub-title ml-3 mt-2">Display Conditions</p>
          <hr />
        </div>
        <div>
          <Row className="mx-5 mt-2 mb-4">
            <Col md={{size: 3, offset: 2}}>
              <Row className="mt-5">
                <Input
                  type="checkbox"
                  className={classes.boxStyle}
                  onChange={this.handleAllChecked1}
                  value="checkedall"
                />
                <span className={classes.check}> Countries</span>
                <br />
              </Row>
              <Row>
                <ul className={classes.subcheck}>
                  {this.state.countries.map((country) => {
                    return (
                      <CheckBox
                        key={country.id}
                        onChange={this.handleCheckChieldElement1}
                        {...country}
                      />
                    )
                  })}
                </ul>
              </Row>
              <Row className="mt-4">
                <Input
                  type="checkbox"
                  className={classes.boxStyle}
                  onChange={this.handleAllChecked2}
                  value="checkedall"
                />
                <span className={classes.check}> Consultant Types</span>
              </Row>
              <Row>
                <ul className={classes.subcheck}>
                  {this.state.consultantType.map((consultant) => {
                    return (
                      <CheckBox
                        key={consultant.id}
                        onChange={this.handleCheckChieldElement2}
                        {...consultant}
                      />
                    )
                  })}
                </ul>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-5">
                <Input
                  type="checkbox"
                  className={classes.boxStyle}
                  onChange={this.handleAllChecked3}
                  value="checkedall"
                />
                <span className={classes.check}> Languages</span>
              </Row>
              <Row>
                <ul className={classes.subcheck}>
                  {this.state.languages.map((language) => {
                    return (
                      <CheckBox
                        key={language.id}
                        onChange={this.handleCheckChieldElement3}
                        {...language}
                      />
                    )
                  })}
                </ul>
              </Row>
              <Row className="mt-4">
                <Input
                  type="checkbox"
                  className={classes.boxStyle}
                  onChange={this.handleAllChecked4}
                  value="checkedall"
                />
                <span className={classes.check}> Consultant Statuses</span>
              </Row>
              <Row>
                <ul className={classes.subcheck}>
                  {this.state.consultanetStatuses.map((consultanetStatus) => {
                    return (
                      <CheckBox
                        key={consultanetStatus.id}
                        onChange={this.handleCheckChieldElement4}
                        {...consultanetStatus}
                      />
                    )
                  })}
                </ul>
              </Row>
            </Col>
            <Col md={{size: 3}}>
              <Row className="mt-5">
                <Input
                  type="checkbox"
                  className={classes.boxStyle}
                  onChange={this.handleAllChecked5}
                  value="checkedall"
                />
                <span className={classes.check}> Consultant Rank Types</span>
              </Row>
              <Row>
                <ul className={classes.subcheck}>
                  {this.state.rankTypes.map((rankType) => {
                    return (
                      <CheckBox
                        key={rankType.id}
                        onChange={this.handleCheckChieldElement5}
                        {...rankType}
                      />
                    )
                  })}
                </ul>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

DisplayConditions.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(DisplayConditions)
