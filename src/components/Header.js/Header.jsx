import React, { useState } from 'react'
import './style.css'
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <header className={`${mobileMenu && 'active'}`}>
            <a href="/"><img className='logo' src="/images/logo-bookmark.svg" alt="" /></a>

            <div className={`${mobileMenu && "active"} nav__wrapper`} >
                <nav>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a className="login__link" href="#">Login</a></li>
                    </ul>
                    <ul className="social">
                        <a href="/facebook"><img src="/images/icon-facebook.svg" alt="" /></a>
                        <a href="/facebook"><img src="/images/icon-twitter.svg" alt="" /></a>
                    </ul>
                </nav>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="menu">
                {!mobileMenu ? <img src="/images/icon-hamburger.svg" alt="" /> : <img src="/images/icon-close.svg" alt="" />}
            </button>
        </header>
    )
}

export default Header