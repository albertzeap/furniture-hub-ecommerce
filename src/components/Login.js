import React, { useEffect, useState } from "react";
import UserApi from "../apis/UserApi";

export const Login = () => {

    const [user,setUser] = useState(
        {
            id: 0,
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        });

    useEffect(() => {
        console.log(user);
    }, [user])

    const handleLogin = (e) => {
        e.preventDefault();
        UserApi.getUserByUsernamePassword(setUser,e.target.username.value, e.target.password.value);
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
                        {user.id === 0 ? <h1>Not loaded</h1> : <h1>{user[0].username}</h1>}
                    </div>
                </div>
            </div>
        </section>
    );
}