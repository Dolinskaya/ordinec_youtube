import React, {cloneElement, Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadInfo} from '../Actions/userActions.js';
//import NavLink from '../../components/NavLink/NavLink';
//import Orc from './images/lk-big-orc-level-1.png'
require('./Menu.scss');


    @connect(state => ({
        info: state.info
    }))
class Menu extends React.Component {


    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadInfo()) // Вызываем загрузку
    }

    render() {
            return (
                <div className="menu">
                <div className="header menu-header">
                    <a href="" className="header_link">
        
                    <p className="header_small-text">www.ordinec.ru</p>
                    <h2 className="header__logo-text">ордынец</h2>
                    </a>
                </div>

        <div className="menu-container">
            <div className="menu-wrap">
                <nav className="nav">
                    <ul>
                        <li><Link onlyActiveOnIndex={true} to="offers" >Офферы</Link></li>
                        <li><Link to="#">Статистика</Link></li>
                        <li><Link to="#">Настройки </Link></li>
                        <li className="level-0">
                            <ul>

                                <li><Link to="#">Личный кабинет</Link></li>
                                <li><Link to="#">Вывод средств</Link></li>
                                <li><Link to="#">Предложения</Link></li>
                            </ul>
                    </li>
                    <li><a href="#" id="exit">Выход</a></li>
                </ul>
            </nav>
        </div>
        <div className="menu_bottom">
            <div className="emulation-thead">
                <span className="emulation-thead__content">Ваша казна</span>
            </div>
            <div className="emulation-tbody">
                <div className="emulation-tbody__tr">
                    <span className="emulation-tbody__td">Доступно</span>
                    <span className="emulation-tbody__td td-right">
                        <span id="balance">25.068,00</span> Р.
                    </span>
                </div>
                <div className="emulation-tbody__tr">
                    <span className="emulation-tbody__td">Холд</span>
                    <span className="emulation-tbody__td td-right">
                        <span id="hold">0,00</span> Р.
                    </span>
                </div>
            </div>
            <div className="lk-achivment">
                <img src="../../../assets/images/sub-orc-lvl1.png" alt="" className="lk-achivment__img"/>
            </div>
        </div>

    </div>
    {this.props.children}
    </div>
                )
      }
}
export default (Menu);