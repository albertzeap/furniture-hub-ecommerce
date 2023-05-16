import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">Home</Link>
                    
                    <ul className="nav nav-fill nav-pills nav-justified">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}