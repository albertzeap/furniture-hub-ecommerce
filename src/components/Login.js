import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../redux/userSlice";
import { useSelector, useDispatch } from 'react-redux'

import { supabase } from "../apis/supabaseApi";
import { Input } from "./form/Input";



export const Login = () => {

    const [user,setUser] = useState([{
        id: 0
    }]);

    const activeUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        
        if(user.id > 0){
            alert("Login sucessfull!");
            dispatch(login(user));
            // navigate("/");
        }


    }, [user,dispatch])

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
                
                    <h1 className="pb-4">Login</h1>
                    <p className="pb-3">Don't have an account? <Link to="/register">Sign up here</Link></p>

                    
                    
                    <div className="m-auto w-50">


                        {activeUser.userId !== 0 ? 
                            <div>
                                <div className="row mt-5"></div>
                                <Link to="/" className="btn btn-outline-primary">Browse Products</Link>
                            </div> :  
                        
                        <form name="logForm" onSubmit={handleLogin}>
                                
                                <Input 
                                    label="Username"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    formText=""
                                    isFormText={false}
                                    />
                                <Input 
                                    label="Password"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    formText=""
                                    isFormText={false}
                                    
                                    />
                        
                                <input id="loginButton" className="btn btn-outline-primary w-100" type="submit" value="Login"/>
                            </form>
                        }
                    </div>
                 
                </div>
        </section>
    );
}