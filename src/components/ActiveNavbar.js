import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../redux/userSlice";

export const ActiveNavbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        alert("Logged out");
    }


    return (
     
        <nav className="navbar sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Home</Link>
                
                <ul className="nav nav-fill nav-pills nav-justified">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
   
    );
}