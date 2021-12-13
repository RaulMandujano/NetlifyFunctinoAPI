import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from "react-router";
import { auth, logInWithEmailAndPassword } from "../firebase";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [user , loading ] = useAuthState(auth)
    const history = useHistory();

    useEffect(() => { 
        if(loading) { 
            // loading effect
            return;
        }

        if(user) history.replace("/heroes")
    }, [user, loading , history])

    const logIn = (e) => { 
        e.preventDefault();
        logInWithEmailAndPassword(email , password)
    }

    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button  onClick={logIn} className="btn btn-primary btn-block">Submit</button>
            
        </form>
    );

}

export default Login