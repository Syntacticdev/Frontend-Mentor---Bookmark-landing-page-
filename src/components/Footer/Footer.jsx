import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <footer>
            <img className='logo' src="/images/logo-bookmark.svg" alt="" />
            <nav className='nav__list'>
                <li><a href="#feature">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </nav>

            <div className="cta">
                <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#twitter"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </footer>
    )
}

export default Footer