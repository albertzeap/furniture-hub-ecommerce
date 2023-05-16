import React from "react";

export const Register = () => {
    return(
        <section>
             <div className="container text-center">
        <div className="row align-items-center">
        <h1>Register</h1>
            <div className="col">

            </div>  
            <div className="col">
                <form name="regform" method="post">
                    
                    <fieldset>
                        <legend>Personal Information</legend>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="fname">First Name</label>
                                    <input className="form-control" type="text" id="fname" name="fname" pattern="[aA-zZ]+" placeholder="John"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lname">Last Name:</label>
                                    <input className="form-control" type="text" id="lname" name="lname" pattern="[aA-zZ]+" placeholder="Doe"/>
                                </div>
                            </div>
                        </div>

                         <div className="mb-3">
                             <label className="form-label" htmlFor="phoneNumber">Phone Number: </label>
                             <input className="form-control" type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"/>
                        </div>
                        
                    </fieldset>
                    <fieldset>
                        <legend>User Credentials</legend>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="username">Username:</label>
                            <input className="form-control" type="text" id="username" name="username" required/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password: </label>
                            <input className="form-control" type="password" id="password" name="password" required/>
                        </div>
                    </fieldset>

                    <div className="mb-3">
                        <input className="btn btn-outline-primary" type="submit" value="Create Account"/>
                    </div>
                </form>
            </div>
            <div className="col">

            </div>
            </div>
    </div>
        </section>
    );

}