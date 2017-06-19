import React, {Component} from "react";
//import {Footer} from '../../components';
import {Login} from '../../components/Login/Login.js';
import {loginActions} from '../../components/Actions/loginActions';
import {Link} from 'react-router';
const styles = require("./App.scss");

class App extends React.Component {
	render() {

		return (
			<div className="mainContainer">
				<section className="content">
					{this.props.children}
				</section>
			</div>
		);
	}
}

export default App;