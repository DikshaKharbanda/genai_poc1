import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const Login = () => {
    const [action, setAction] = useState("Login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const endpoint = action === "Login" ? "/login" : "/signup"
        const payload = {
            email,
            password,
            ...(action === "Sign Up" && { name })  // Include name only if it's a signup action
        }

        try {
            const response = await fetch(`http://localhost:8000${endpoint}`, { // Ensure the correct backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const data = await response.json()
            if (response.ok) {
                alert(data.message)
                window.location.href = data.redirect_url
            } else {
                alert(data.detail)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('An error occurred. Please try again.')
        }
    }

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form className="inputs" onSubmit={handleSubmit}>
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="submit-container">
                    <button type="button" className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign up</button>
                    <button type="submit" className={action === "Sign Up" ? "submit gray" : "submit"}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login