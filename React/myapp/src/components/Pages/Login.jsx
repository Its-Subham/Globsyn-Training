import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
    <div id='login-box'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Enter your name'/>
            <input type="password" placeholder='Enter password'/>
            <button type='submit'>Submit</button>

        </form>
    </div>
    </>
  )
}

export default Login