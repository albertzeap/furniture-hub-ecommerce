import React from "react";

export const Register = () => {
    return(
        <section>
             <div class="container text-center">
        <div class="row align-items-center">
        <h1>Register</h1>
            <div class="col">

            </div>  
            <div class="col">
                <form name="regform" method="post">
                    
                    <fieldset>
                        <legend>Personal Information</legend>

                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label" for="fname">First Name</label>
                                    <input class="form-control" type="text" id="fname" name="fname" pattern="[aA-zZ]+" placeholder="John"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label" for="lname">Last Name:</label>
                                    <input class="form-control" type="text" id="lname" name="lname" pattern="[aA-zZ]+" placeholder="Doe"/>
                                </div>
                            </div>
                        </div>

                         <div class="mb-3">
                             <label class="form-label" for="phoneNumber">Phone Number: </label>
                             <input class="form-control" type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"/>
                        </div>
                        
                    </fieldset>
                    <fieldset>
                        <legend>User Credentials</legend>
                        <div class="mb-3">
                            <label class="form-label" for="username">Username:</label>
                            <input class="form-control" type="text" id="username" name="username" required/>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label" for="password">Password: </label>
                            <input class="form-control" type="password" id="password" name="password" required/>
                        </div>
                    </fieldset>

                    <div class="mb-3">
                        <input class="btn btn-outline-primary" type="submit" value="Create Account"/>
                    </div>
                </form>
            </div>
            <div class="col">

            </div>
            </div>
    </div>
        </section>
    );

}