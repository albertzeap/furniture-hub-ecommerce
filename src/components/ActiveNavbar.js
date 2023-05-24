import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../redux/userSlice";

export const ActiveNavbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        alert("Logged out");
        navigate("/login");
    }


    return (
     
        <nav className="navbar sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Home</Link>
                
                <ul className="nav nav-fill nav-pills nav-justified">
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders">Orders</Link>
                    </li>
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