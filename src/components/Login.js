import React from "react";

export const Login = () => {
    return(
        <section>
            <div className="container text-center">
                <div className="row align-items-center">
                    <h1>Login</h1>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        <form name="logForm">
                            
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