import React from 'react'
import {Link} from "react-router-dom";
import Logo from "/argentBankLogo.png"


export default function Nav() {
	
  return (
	<nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
			<Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </nav>
  )
}
