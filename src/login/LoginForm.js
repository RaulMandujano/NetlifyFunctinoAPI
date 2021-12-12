import React, { Component, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from "react-router";
import { auth } from "../firebase";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [user , loading , error] = useAuthState(auth)
    const history = useHistory();

    useEffect(() => { 
        if(loading) { 
            // loading effect
            return;
        }

        if(user) history.replace("/heros")
    })

    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            
        </form>
    );

}

export default Login