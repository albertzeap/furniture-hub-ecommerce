import React from "react";
import { Link } from "react-router-dom";

export const ActiveNavbar = () => {
    return (
     
        <nav className="navbar sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Home</Link>
                
                <ul className="nav nav-fill nav-pills nav-justified">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
   
    );
}