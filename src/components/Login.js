import React , {useState} from 'react'
import Logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import {useAuth} from "../context/GlobalState"



const Login = () => {

    const [email,setemail]=useState("")
     const [password,setpassword]=useState("")
    const navigate = useNavigate()

    const signIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            if(auth){
                navigate("/")
            }
        }).catch((err)=>{alert(err.message)})
    }

        const register =(e)=>{
            e.preventDefault()
            createUserWithEmailAndPassword(auth, email, password).then((auth) =>{
               if(auth){
                navigate("/")
               }
            }).catch((err)=>{alert(err.message)})
            }


        return (
            <div className="login">
                <Link to="/">
                    <img className="header-logo" src={Logo} alt="logo-img" />
                </Link>
                <div className="login-container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>Email</h5>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <button className="login-signInBtn" type="submit" onClick={signIn}
                        >
                            Sign in
                        </button>
                        <p>
                        to create account
                        </p>
                        <button className="login-registerBtn" onClick={register}>
                            Create your Account
                        </button>
                    </form>
                </div>

            </div>
        );
    };

export default Login
