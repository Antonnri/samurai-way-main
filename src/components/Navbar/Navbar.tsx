import React from 'react';
import nav from "./Navbar.module.css"
import {NavLink} from "react-router-dom";






const Navbar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            <NavLink to='/Profile' activeClassName={nav.item_active}>Profile</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='/Messages' activeClassName={nav.item_active}>Messages</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='/News' activeClassName={nav.item_active}>News</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='/Music' activeClassName={nav.item_active}>Music</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='/Settings' activeClassName={nav.item_active}>Settings</NavLink>
        </div>
    </nav>
}
export default Navbar