import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from '../../components/Menu/Menu.js';

var clientData = {
	cliend_id: 1,
	user_ballance: 500,
	send_ballance: 'url..'
};

require('./Main.scss');


// @connect(state => ({
//     user: this.props.info.info
// }))
export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.info
		}
	}
     render() {
         return (
			 <div className="home">
				 <div className="wrapper">
					 <div className="importMenu">
						 <Menu/>
					 </div>
					 <div className="right-side">

						 <div className="main-page">
							 <div className="big-ork"></div>
							 <div className="chise"></div>
						 </div>
						 <h1>в вашей казне <span id="user-ballance">{!this.props.loading ? this.props.user.balance : ''} руб.</span></h1>
						 <div className="btn-overlay">
							 <button className="sml-btn sml-btn-blue">Заказать выплату</button>
						 </div>
					 </div>
                     {/*start canvas*/}
					 <div className="wrapper_graph">
						 <div className="graph-overlay">
							 <table className="pripod-table">
								 <tbody>
								 <tr>
									 <td>весь период</td>
									 <td><span>Апрель</span><span>Май</span><span className="active">Июнь</span></td>
									 <td></td>
									 <td>
										 <button className="sml-btn sml-btn-green">выгрузить в .xls</button>
									 </td>
								 </tr>
								 </tbody>
							 </table>
							 <canvas id="canvas" height="380" width="1305"></canvas>
							 <canvas id="nocache-canvas" height="380" width="1305"></canvas>
						 </div>
					 </div>
                     {/* end canvas*/}
				 </div>
				 <footer className="footer">
					 <div className="footer-wrapper">
						 <h2>
							 <a href="https://vk.com/socialmediaholding">От владельцев сети сообществ
								 WinWinMarketing</a>, СММ агентство "Русь", <br/> ООО "РЕКЛАМНЫЕ ТЕХНОЛОГИИ 21 ВЕК",
							 2015-2017
						 </h2>
						 <span>© 2017. Ордынец</span>
					 </div>
				 </footer>
                 {this.props.children}
			 </div>
         );
     }
 }


function mapStateToProps (state) {
    return {
        user: state.info.info,
    }
}
