import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../redux/userSlice";
import { useSelector, useDispatch } from 'react-redux'

import { supabase } from "../apis/supabaseApi";



export const Login = () => {

    const [user,setUser] = useState([{
        id: 0
    }]);

    const activeUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        if(user.id > 0){
            alert("Login sucessfull!");
            dispatch(login(user));
            navigate("/");
        }


    }, [user,dispatch, navigate])

    const handleLogin = (e) => {
        e.preventDefault();
       
        getUserByCredentials(e.target.username.value, e.target.password.value );
        e.target.username.value = "";
        e.target.password.value = "";
    }

    async function getUserByCredentials(username, password){

        let bcrypt = require('bcryptjs');

        const { data, error} = await supabase.from("users").select()
            .eq('username', username);
        
        if(data.length !== 0){

            bcrypt.compare(password, data[0].password, (err, res) => {
    
                if(res) setUser(data[0]);
                else alert("Invalid Credentials");

            });

        } else alert("Invalid Credentials");
        
        

        if(error){
            console.error("Error fetching user: ", error);
        }
    }

    return(
        <section>
            <div className="container text-center">
                <div className="row align-items-center">
                    <h1 className="pb-4">Login</h1>
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