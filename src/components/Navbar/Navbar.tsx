import React from 'react';
import navbar from "./Navbar.module.css"

const Navbar = () => {
    return <nav className={navbar.nav}>
        <div className={`${navbar.item} ${navbar.active}`}>
            <a href='/Profile'>Profile</a>
        </div>
        <div className={navbar.item}>
            <a href='/Messages'>Messages</a>
        </div>
        <div className={navbar.item}>
            <a href='/News'>News</a>
        </div>
        <div className={navbar.item}>
            <a href='/Music'>Music</a>
        </div>
        <div className={navbar.item}>
            <a href='/Settings'>Settings</a>
        </div>
    </nav>
}
export default Navbar