import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://w7.pngwing.com/pngs/219/256/png-transparent-phoenix-logo-flame-football-s-daquan-leaf-flower-symbol.png'/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;