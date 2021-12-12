import React, { Component, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, registerWithEmailAndPassword } from "../firebase";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [user , loading , error] = useAuthState(auth)
    const history = useHistory();

    const register = (e) => { 
        e.preventDefault();
        registerWithEmailAndPassword(firstName , lastName, email , password)
    }

    useEffect(() => { 
        if(loading) return;

        if(user) history.replace("/heroes");

    }, [user, loading]);

    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" placeholder="First name" required/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="form-control" placeholder="Last name" required/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <button className="btn btn-primary btn-block" onClick={register}>Sign Up</button>
            
        </form>
    );
    
}

export default Signup