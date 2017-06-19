import React from 'react'
import { connect } from 'react-redux'
import { ROUTING } from '../../constants/Routing.js'

export default function requireAuthentication(Component) {

  class AunthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.user)
    }
    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user)

    }
    checkAuth(user) {
      if (user.isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'push',
            nextUrl: '/main'
          }
        })
      }
    }
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AunthenticatedComponent)
}