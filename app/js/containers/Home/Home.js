import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import NavLink from '../../components/NavLink/NavLink';

require('./Home.scss');

export default class Home extends Component {
  render() {
    return (
    <div className="mainPage">
       <div className="wrapper">
	<div className="header">
	<a href="" className="header_link">
		
			<p className="header_small-text">www.ordinec.ru</p>
			<h2 className="header__logo-text">ордынец</h2>
		</a>
		<p className="header_desc">Сервис автоматической <br /> монетизации Ваших <br />сообществ</p>
		</div>
		<div className="wrapper_img">
			<img src="../../../../assets/images/lk-orc-level-4.png" alt="" className="main_img" />
		</div>
		<div className="main_text">
			<a href="" className="register">Зарегистрироваться</a>
			<span className="t-green"><br />или </span>
			<a href="" className="signin">войти в свой аккаунт</a>
		</div>
		{/*
		<form onSubmit={this.onSubmit}>
			<input type="text" className="form_username" />
			<input type="password" className="form_password" />
			<a href="" className="reset-psw">Восстановить пароль</a>
			<br /><input type="checkbox" className="remember" id="remember" />
			<label className="rem-me" htmlFor="remember">Запомнить меня</label>
			<br /><button type="submit" className="entry">войти</button>
		</form>
		*/}
		<Login />
		{/*<NavLink to="/login">Войти</NavLink>*/}
		<div className="content">
			<h1 className="content_title">Преимущества <br /></h1>
			<p className="content_desc">работы с Ордынцем</p>
			<div className="content_block flex">
				<div className="flex_container">
					<img src="../../../../assets/images/icon-cash.png" alt="" className="flex_img" />
					<p className="flex_desc">максимальный доход</p>
					<p className="flex_text">За годы работы на Social Media рынке наши собственные сообщества перевалили планку 100 млн. подписчиков. Алгоритмы работы сервиса Ордынец построены на опыте нашей команды + опыте сильнейших арбитражников ру-нета, что позволило нашим партнерам получать максимальный доход со своих сообществ. Подключайтесь!</p>  
				</div>
				<div className="flex_container">
					<img src="../../../../assets/images/icon-dust-clock.png" alt="" className="flex_img" />
					<p className="flex_desc">экономия времени</p>
					<p className="flex_text">Наш сервис полностью автоматизирует размещение рекламы в ваших сообществах, настраиваете 1 раз, или доверяете настройку нам - и все готово!<br />Не нужно тратить время на поиск наиболее эффективных офферов, разработку креативов, забивание постов в постинг.<br/>Все это Ордынец делает за Вас.</p>
				</div>
				<div className="flex_container">
					<img src="../../../../assets/images/icon-hourse.png" alt="" className="flex_img" />
					<p className="flex_desc">эксклюзивные предложения</p>
					<p className="flex_text">Мы сотрудничаем со многими крупными брендами, видеопродакшнстудиями, рекламными агентствами, переодически к нам поступают эксклюзивные предложения по скрытой рекламе, все эти предложение доступны в личном кабинете по мере появления.</p>
				</div>
				<div className="flex_container">
					<img src="../../../../assets/images/icon-fire.png" alt="" className="flex_img" />
					<p className="flex_desc">партнерство с лучшими</p>
					<p className="flex_text">Партнерство с одной из сильнейших команд - Social Media!<br />Помощь в решении спорных вопросов с администрацией социальных сетей. Остальное по мере знакомства…</p>
				</div>
			</div>
		</div>
		<div className="reg">
			<p>с нами уже</p>
			<div className="flex flex-sub">
			<div className="flex-main_text">
				<div className="subtext">> 12160</div>
				<div className="reg_desc">поселений</div>
			</div>
			<span>+</span>
			<div className="flex-main_text">
				<div className="subtext">> 8280</div>
				<div className="reg_desc">ордынцев</div>
			</div>
			</div>
{/*Link to*/}<button className="register-page_go">зарегистрироваться</button>
			<p className="t-green">и узнать, <br />какой ты <span className="t-white">ордынец</span> :)</p>
		</div>
		<div className="flex flex-sub">

							<img src="../../../../assets/images/index-ork-1.png" alt="" />
							<span className="wrap-arrow">
								<img src="../../../../assets/images/index-arrow.png" alt="" />
							</span>
							<img src="../../../../assets/images/index-ork-2.png" alt="" />
							<span className="wrap-arrow">
								<img src="../../../../assets/images/index-arrow.png" alt="" />
							</span>
							<img src="../../../../assets/images/index-ork-3.png" alt="" />
							<span className="wrap-arrow">
								<img src="../../../../assets/images/index-arrow.png" alt="" />
							</span>
							<img src="../../../../assets/images/index-ork-4.png" alt="" />
							<span className="wrap-arrow">
								<img src="../../../../assets/images/index-arrow.png" alt="" />
							</span>
							<img src="../../../../assets/images/index-ork-5.png" alt="" />
							<span className="wrap-arrow">
								<img src="../../../../assets/images/index-arrow.png" alt="" />
							</span>
							<img src="../../../../assets/images/index-ork-undefined.png" alt="" /></div>
	</div>
				<div className="footer-wrap">
					<footer className="footer">
					<span>Мы в соцестях:</span>
					<table>
						<tbody><tr>
							<td><a target="_blank" href="https://vk.com/public108410900"><img src="../../../../assets/images/soc-vk.png" alt="" /></a></td>
							<td><a target="_blank" href="http://my.mail.ru/community/ordinec/"><img src="../../../../assets/images/soc-mm.png" alt="" /></a></td>
							<td><a target="_blank" href="https://www.ok.ru/group/53799525744866"><img src="../../../../assets/images/soc-ok.png" alt="" /></a></td>
						</tr>
					</tbody></table>
					<p className="footer_text">
					<a target="_blank" className="footer_link" href="https://vk.com/socialmediaholding">
					От владельцев сети сообществ WinWinMarketing</a>
					 ,СММ агентство "Русь",  
					<br /> ООО "РЕКЛАМНЫЕ ТЕХНОЛОГИИ 21 ВЕК", 2015-2017</p>
					<span>© 2016-2017. Ордынец</span>
				</footer>
				</div>

        

     </div>
    );
  }
}

