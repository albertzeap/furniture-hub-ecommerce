import React, { useEffect, useState } from "react";
import UserApi from "../apis/UserApi";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../redux/userSlice";
import { useSelector, useDispatch } from 'react-redux'

export const Login = () => {

    const [user,setUser] = useState([{
        id: 0
    }]);

    // const cartList = useSelector((state) => state.cartList);
    const activeUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        if(user === undefined){
           alert("Invalid Credentials")
        }
        else if(user.id > 0){
            alert("Login sucessfull!");
            dispatch(login(user));
            navigate("/");
        }


    }, [user,dispatch, navigate])

    const handleLogin = (e) => {
        e.preventDefault();
        UserApi.getUserByUsernamePassword(setUser,e.target.username.value, e.target.password.value);
        e.target.username.value = "";
        e.target.password.value = "";
    }

    return(
        <section>
            <div className="container text-center">
                <div className="row align-items-center">
                    <h1>Login</h1>
                    <div className="col">
                        
                    </div>
                    <div className="col">

                        {activeUser.userId !== 0 ? 
                            <div>
                                <div className="row mt-5"></div>
                                <Link to="/" className="btn btn-outline-primary">Browse Products</Link>
                            </div> :  
                        
                            <form name="logForm" onSubmit={handleLogin}>
                            
                                <div className="mb-3">
                                        <label className="form-label" htmlFor="username">Username</label>
                                        <input className="form-control" type="text" id="username" name="username" required/><br/>
                                </div>
                                    
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input className="form-control" type="password" id="password" name="password" required/><br/>
                                </div>
                        
                                <input id="loginButton" className="btn btn-outline-primary" type="submit" value="Login"/>
                            </form>
                        }
                       
                    </div>
                    <div className="col">
                      
                    </div>
                </div>
            </div>
        </section>
    );
}