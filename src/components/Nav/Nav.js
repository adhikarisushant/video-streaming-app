import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
            <img className="nav_logo" src={logo} alt="logo"/>

            <img className="nav_avatar" src={avatar} alt="avatar" />
            </div>
           
        </div>
    )
}

export default Nav
