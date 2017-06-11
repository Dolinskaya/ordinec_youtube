import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


var clientData = {
	cliend_id: 1,
	user_ballance: 500,
	send_ballance: 'url..'
};




require('./Main.scss');

export default class Main extends Component {
  render() {
    return (
      <div className="home">
        <div className="wrapper">
        	<aside className="right-side">
		
				<div className="main-page">
					<div className="big-ork"></div>
					<div className="chise"></div>
					{/* remove me <div className="your-status">
							статус <span>Собираем дань</span>
						</div>*/}
				</div>
			</aside>
			<h1>в вашей казне <span id="user-ballance">{clientData.user_ballance} руб.</span></h1>
			<div className="btn-overlay">
			<button className="sml-btn sml-btn-blue">Заказать выплату</button>
					</div>
    		{/*start canvas*/}
    		<div className="wrapper_graph">
		        <div className="graph-overlay">
				<table className="pripod-table">
					<tbody><tr>
						<td>весь период</td>
						<td><span>Апрель</span><span>Май</span><span className="active" >Июнь</span></td>
						<td></td>
						<td>
							<button className="sml-btn sml-btn-green">выгрузить в .xls</button>
						</td>
					</tr>
				</tbody></table>
				<canvas id="canvas" height="380" width="1305"></canvas>
				<canvas id="nocache-canvas" height="380" width="1305"></canvas>
				</div>
			</div>
		{/* end canvas*/}
		</div>
        <footer className="footer">
        	<div className="footer-wrapper">
				<h2>
					<a href="https://vk.com/socialmediaholding">От владельцев сети сообществ WinWinMarketing</a>, СММ агентство "Русь", <br /> ООО "РЕКЛАМНЫЕ ТЕХНОЛОГИИ 21 ВЕК", 2015-2017
				</h2>
				<span>© 2017. Ордынец</span>
			</div>
		</footer>
      </div>
    );
  }
}
