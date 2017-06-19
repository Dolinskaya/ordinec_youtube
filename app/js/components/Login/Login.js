import React, { Component } from 'react';
import Router from 'react-router';
import Config from '../../containers/Auth/Config.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginActions } from '../Actions/loginActions.js';



class Login extends React.Component {


  constructor(props){
    super(props);
      this.state = {
        username: '',
        password: '',
        grant_type: Config.grant_type,
        client_id: Config.clientId,
        client_secret: Config.clientSecret,
        //verifyCode: Config.verifyCode,
        errors: {},
        isLoading: false,
       };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    this.setState( { 
      errors: {}, isLoading: true});
    this.props.loginActions(this.state)//.then(
 //         (res) => console.log(res.data.access_token),
 
 //         (err) => this.setState({ errors: err.data.error_description, isLoading: false })
 // );
 }
 handleChange(event) {
    this.setState({[event.target.name]: event.target.value });
  }

  render() {

    //const { errors, username, password, isLoading } = this.state;
   // const { this.props.isAuthenticated ? '/login' : null }; 

    return (
      <div>
      <form onSubmit={::this.handleSubmit}>
        <input onChange={this.handleChange} name="username" ref="username" placeholder="Username" type="text" />
        <input onChange={this.handleChange} name="password" ref="password" placeholder="Password" type="password" />
        <a href="" className="reset-psw">Восстановить пароль</a>
      <br /><input type="checkbox" className="remember" id="remember" />
      <label className="rem-me" htmlFor="remember">Запомнить меня</label>
        <br /><button type="submit" className="entry">войти</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}

// Login.propTypes = {
//   loginActions: React.PropTypes.func.isRequired
// }

// Login.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default connect(null, {loginActions}) (Login);
