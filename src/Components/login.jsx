import React, { useState } from 'react'
import './Login.css'

import user_icon from  '../assets/person.png'
import email_icon from  '../assets/email.png'
import password_icon from  '../assets/password.png'

const Login=() =>{
    const [action,setAction]=useState("Login")
    return(
        <div className='container'>
           <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
           </div>
           <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-password">Lost Password? <span> Click Here!</span></div>
           <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <a href='/landing'><div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div></a>
           </div>
            </div></div>
    )
}

export default Login