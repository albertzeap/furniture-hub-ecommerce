import React, { useEffect } from "react";
import { supabase } from "../apis/supabaseApi";

import "../styles/theme.css"

export const Register = () => {



    useEffect(() => {

        


    },[])


    const handleRegister = (e) => {
        e.preventDefault();
        let firstName = e.target.fname.value;
        let lastName = e.target.lname.value;
        let pnumber = e.target.phoneNumber.value;
        let username = e.target.username.value;
        let password = e.target.password.value;


        createUser(firstName, lastName, pnumber, username, password);

        e.target.fname.value = "";
        e.target.lname.value = "";
        e.target.phoneNumber.value = "";
        e.target.username.value = "";
        e.target.password.value = ""; 
    }

    async function createUser(firstName, lastName, pnumber, username, password){

        
        const { error } = await supabase.from("users").insert({
            firstName: firstName, 
            lastName: lastName, 
            phoneNumber: pnumber,
            username: username,
            password: password
        });
        

        if(error){
            console.error("Error creating user: ", error);
        }
        

    }


    return(
        <section>
             <div className="container text-center">
        <div className="row align-items-center">
        <h1>Register</h1>
        <div class="alert alert-danger" role="alert">
            Register disabled due to security still being implemented
        </div>
        <div className="col">

            </div>  
            <div className="col">
                <form name="regform" method="post" onSubmit={handleRegister}>
                    
                    <fieldset>
                        <legend>Personal Information</legend>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="fname">First Name</label>
                                    <input className="form-control" type="text" id="fname" name="fname" pattern="[aA-zZ]+" placeholder="John" disabled/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lname">Last Name:</label>
                                    <input className="form-control" type="text" id="lname" name="lname" pattern="[aA-zZ]+" placeholder="Doe" disabled/>
                                </div>
                            </div>
                        </div>

                         <div className="mb-3">
                             <label className="form-label" htmlFor="phoneNumber">Phone Number: </label>
                             <input className="form-control" type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" disabled/>
                        </div>
                        
                    </fieldset>
                    <fieldset>
                        <legend>User Credentials</legend>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="username">Username:</label>
                            <input className="form-control" type="text" id="username" name="username" required disabled/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password: </label>
                            <input className="form-control" type="password" id="password" name="password" required disabled/>
                        </div>
                    </fieldset>

                    <div className="mb-3">
                        <input id="registerButton" className="btn btn-outline-primary" type="submit" value="Create Account" disabled/>
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