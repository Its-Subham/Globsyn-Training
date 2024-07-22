import React from 'react'
import "./Login.css"

const Registration = () => {
  return (
    <>
    <div id='login-box'>
        <h1>Registration</h1>
        <form>
            <input type="text" placeholder='Enter your full name'/>
            <input type="gmail" placeholder='Enter your gmail'/>
            <input type="text" placeholder='Enter password'/>
            <input type="text" placeholder='Repeat your password'/>
            <div>
            <input type="checkbox" id='conditions' name='conditions' />
            <label for="conditions">I agree all statements in <span>Terms & Condition.</span></label>
            </div>
            <button type='submit'>Submit</button>

        </form>
    </div></>
  )
}

export default Registration