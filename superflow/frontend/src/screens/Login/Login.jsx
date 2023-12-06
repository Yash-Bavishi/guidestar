import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import "./Login.css"
function Login() {
  return (
    <div>
        <small className='status'><a href="#">guidestar.in</a></small>
        <div className='loginContainer'>
            <div className='loginBox'>
                <h1 className='title'>Login or Sign up</h1>
                <div className='fields'>
                    <input type="email" name="email" placeholder='Email'/>
                    <input type="password" name="password" placeholder='Password'/>
                </div>
                <button className='blueButton disabled'>Continue</button>
            </div>
        </div>
        <h1 className='feedback'>Better Feedback</h1>
    </div>
  )
}

export default Login