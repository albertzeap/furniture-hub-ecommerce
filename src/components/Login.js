import React from "react";

export const Login = () => {
    return(
        <section>
            <div class="container text-center">
                <div class="row align-items-center">
                    <h1>Login</h1>
                    <div class="col">
                        
                    </div>
                    <div class="col">
                        <form name="logForm">
                            
                            <div class="mb-3">
                                    <label class="form-label" for="username">Username</label>
                                    <input class="form-control" type="text" id="username" name="username" required/><br/>
                            </div>
                                
                            <div class="mb-3">
                                <label class="form-label" for="password">Password</label>
                                <input class="form-control" type="password" id="password" name="password" required/><br/>
                            </div>
                            
                            <input class="btn btn-outline-primary" type="submit" value="Login"/>
                        </form>
                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>
        </section>
    );
}