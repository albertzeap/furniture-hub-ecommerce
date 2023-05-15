import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <nav class="navbar sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand fw-bold" to="/">Home</Link>
                    <ul class="nav nav-fill nav-pills nav-justified">
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}