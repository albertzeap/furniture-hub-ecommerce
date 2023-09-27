import React, { useState } from "react";
import { supabase } from "../apis/supabaseApi";
import { Link } from "react-router-dom";
import { Input } from "./form/Input";

export const Register = () => {


    const USERNAME_REGEX = /^[a-zA-Z0-9_\-]{3,16}$/;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const FNAME_REGEX = /[A-Za-z]+/
    const PNUMBER_REGEX = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;


    const [showPassword, setShowPassword] = useState(false);

    
    const handleRegister = (e) => {
        
        
        e.preventDefault();
        let firstName = e.target.fname.value;
        let lastName = e.target.lname.value;
        let pnumber = e.target.phoneNumber.value;
        let username = e.target.username.value;
        let password = e.target.password.value;
        
        let bcrypt = require('bcryptjs');
        let salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(password, salt);
        console.log("Password: ", password , hashedPassword);
    

        createUser(firstName, lastName, pnumber, username, hashedPassword);

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
            alert("User could not be created.")
        } else{
            alert("User successfully created!");
        }
        

    }


    return(
        <section>
             <div className="container text-center">
        <div className="row align-items-center">
        <h1>Register</h1>
        <div className="alert alert-danger" role="alert">
            Please do not use any personal credentials. This is only a test site!
        </div>
        <p className="pb-3">Already have an account? <Link to="/login">Log in here</Link></p>
        
            <div className="d-flex justify-content-center">
                <form className="reg-form p-5" name="regform" method="post" onSubmit={handleRegister}>
                    
                    <div className="row">

                        <div className="col">
                            <h2 className="pb-3 fs-3">General Information</h2>
                            <Input
                                label="First Name"
                                id="fname"
                                type="text"
                                placeholder="First Name"
                                isFormText={true}
                                formText="Must be alphabetic characters"
                                pattern="[A-Za-z]+"
                                regex={FNAME_REGEX}
                            />
                        
                            <Input
                                label="Last Name"
                                id="lname"
                                type="text"
                                placeholder="Last Name"
                                isFormText={false}
                                formText=""
                            />
                            <Input
                                label="Phone Number"
                                id="phoneNumber"
                                type="tel"
                                placeholder="First Name"
                                isFormText={true}
                                formText="Valid format: xxx-xxx-xxxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                regex={PNUMBER_REGEX}
                            />
                         
                        </div>

                        <div className="col">

                        <h1 className="pb-3 fs-3">Account Credentials</h1>

                            <Input      
                                label="Username"
                                id="username"
                                type="text"
                                placeholder="Username"
                                formText="Must be 3-16 alphanumeric characters"
                                isFormText={true}
                                pattern="^[a-zA-Z0-9_\-]{3,16}$"
                                regex={USERNAME_REGEX}
                            />
                            <Input 
                                label="Password"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                formText="Must have one uppercase, one lowercase, one digit, and be at least 8 characters long"
                                isFormText={true}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                regex={PASSWORD_REGEX}
                            />
                        </div>

                    </div>

                    <div className="mb-3">
                        <input id="registerButton" className="btn btn-outline-primary w-100" type="submit" value="Create Account" />
                    </div>
                </form>
            </div>

        </div>
    </div>
        </section>
    );

}