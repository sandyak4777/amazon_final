import React, { useState } from 'react';
import './LoginPage.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function LoginPage(){
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn=(event)=>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(result=>result?history.push("/"):null)
        .catch((e)=> alert(e.message));
    }
    const register= (event)=>{
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then({
            setEmail: "",
            setPassword:""
        })
        .catch((e)=>alert(e.message))
    }

    return(
        <div className="login-page">
            <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/></Link>
            <div className="login-details">
                <form onSubmit={logIn}>
                    <h4>Login Here</h4>
                    <div>
                        <label><h5 className="box">Email:</h5></label>
                        <input className="input" type="text" placeholder="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <div>
                        <label><h5 className="box">Password:</h5></label>
                        <input className="input"  type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <button className="login-button">LogIn</button>
                </form>
                <div className="signin-link">
                    <h6>Don't have account? Create One!!</h6>
                    <button className="signup" onClick={register}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;