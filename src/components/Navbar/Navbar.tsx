import React from 'react';
import navbar from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={navbar.nav}>
        <div className={navbar.nav}>
            <NavLink to='/Profile' activeClassName={navbar.active}>Profile</NavLink>
        </div>
        <div className={navbar.item}>
            <NavLink to='/Messages' activeClassName={navbar.active}>Messages</NavLink>
        </div>
        <div className={navbar.item}>
            <NavLink to='/News' activeClassName={navbar.active}>News</NavLink>
        </div>
        <div className={navbar.item}>
            <NavLink to='/Music' activeClassName={navbar.active}>Music</NavLink>
        </div>
        <div className={navbar.item}>
            <NavLink to='/Settings' activeClassName={navbar.active}>Settings</NavLink>
        </div>
    </nav>
}
export default Navbar