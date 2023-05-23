import React, { useEffect, useState } from "react";
import UserApi from "../apis/UserApi";
import { Link } from "react-router-dom";

import { login } from "../redux/userSlice";
import { useDispatch } from 'react-redux'

export const Login = () => {

    const [user,setUser] = useState([{
        id: 0
    }]);

    // const cartList = useSelector((state) => state.cartList);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        
        if(user == undefined){
           alert("Invalid Credentials")
        }
        else if(user.id > 0){
            alert("Login sucessfull!");
            dispatch(login(user));
        }


    }, [user])

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
                        <form name="logForm" onSubmit={handleLogin}>
                            
                            <div className="mb-3">
                                    <label className="form-label" htmlFor="username">Username</label>
                                    <input className="form-control" type="text" id="username" name="username" required/><br/>
                            </div>
                                
                            <div className="mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-control" type="password" id="password" name="password" required/><br/>
                            </div>
                    
                            <input className="btn btn-outline-primary" type="submit" value="Login"/>
                        </form>
                    </div>
                    <div className="col">
                      
                    </div>
                </div>
            </div>
        </section>
    );
}