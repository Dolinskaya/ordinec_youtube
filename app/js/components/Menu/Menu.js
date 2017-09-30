import React, {cloneElement, Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadInfo} from '../Actions/userActions.js';
import Token from '../../containers/Auth/Token.js';
require('./Menu.scss');

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: Token.token ? true : false
        };
    }
    componentDidMount() {
        const { dispatch } = this.props
            dispatch(loadInfo())
    }

    render() {
        const info = this.props.info;
        const loading = this.props.loading;
        console.log(info);
            if (!loading){
                console.log('Загрузка закончилась');
            }else{
                console.log('Ожидайте, загрузка');
            }
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
                        <span id="balance">{!loading ? info.balance : ''}</span> Р.
                    </span>
                </div>
                <div className="emulation-tbody__tr">
                    <span className="emulation-tbody__td">Холд</span>
                    <span className="emulation-tbody__td td-right">
                        <span id="hold">{!loading ? info.hold : ''}</span> Р.
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



function mapStateToProps (state) {
    return {
        info: state.info.info,
        errors: state.info.errors,
        loading: state.info.loading
    }
}

// Menu.propTypes = {
//     info.balace: React.PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(Menu);