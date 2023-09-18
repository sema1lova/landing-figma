import React from 'react';
import TopHeader from './TopHeader';
import header from './Header.module.scss'
import headerLogo from '../../assets/Header/Rectangle 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
        <>
            <TopHeader />
            <div className={header.header}>
                <div className="container">
                    <div className="row">
                        <div className={header.nav}>
                            <ul className={header.ul}>
                                <li className={header.li}>
                                    <img src={headerLogo} alt="" />
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">О компании</a>
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">Укладка тротуарной плитки</a>
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">Портфолио</a>
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">Полезно знать</a>
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">Доставка и оплата</a>
                                </li>
                                <li className={header.li}>
                                    <a className={header.a} href="">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={header.mobile__header}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className={header.mobile__header__img}>
                            <img src={headerLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={header.mobile__header__right}>
                            <FontAwesomeIcon icon="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;