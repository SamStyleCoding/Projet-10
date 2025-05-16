import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Logo from "/argentBankLogo.webp"
import {useDispatch, useSelector} from "react-redux";
import { logoutToken } from '../redux/authSlice.jsx';
import { logoutUser } from '../redux/userSlice.jsx';
import getUserData from "../api/getUserData.jsx";
import {useEffect} from "react";


export default function Nav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { token } = useSelector((state) => state.auth);
    let { data } = useSelector((state) => state.user);

    useEffect(() => {
        if (token) {
          dispatch(getUserData({token})); 
        }
      }, [token]);
      

    const handleLogout = () => {
        dispatch(logoutToken());
        dispatch(logoutUser());
        navigate('/');
    };

    const login = (
        <div>
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </div>
    )

    const logout = (
        <div className="main-nav-group">
            <Link to="/profil" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                { data ? data.userName : 'erreur' }
            </Link>
            <a onClick={handleLogout} className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                Sign out
            </a>
        </div>
    )
	
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
            { token ? logout : login}
        </nav>
  )
}
