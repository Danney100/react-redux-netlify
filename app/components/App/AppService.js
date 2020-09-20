import {Component} from 'react'
import {refreshToken} from 'api'
import axios from 'axios'
import {setLoginInfo} from 'duck/actions/user'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

class AppService extends Component {
  componentDidMount() {
    this.setInterceptors()
  }
  setInterceptors() {
    axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && error.config.url === 'api/refresh') {
          this.props.history.push('/login')
          return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          const refresh = this.props.user.get('refresh')
          const payload = {
            token: refresh,
          }

          return refreshToken(payload).then((res) => {
            this.props.setLoginInfo({access: res.access, refresh: refresh})
            originalRequest.headers.Authorization = `Bearer ${res.access}`
            axios.defaults.headers.common.Authorization = `Bearer ${res.access}`
            return axios(originalRequest)
          })
        }
        return Promise.reject(error)
      },
    )
  }

  render() {
    return ''
  }
}

AppService.propTypes = {
  user: PropTypes.object,
  setLoginInfo: PropTypes.func,
  history: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

const mapDispatchToProps = {setLoginInfo}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppService))
