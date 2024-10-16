import React from 'react'

export default function Register() {
  return ( 
    <div className='modal-window__content'>
        <p>Enter your email and password to register.</p>
        <input className='user-login' type='text' placeholder='Username'></input>
        <input className='user-email' type='text' placeholder='Enter your email address'></input>
        <input className='user-password' type='password' placeholder='Password'></input>
        <input className='user-repeatpassword' type='password' placeholder='Confirm Password'></input>
        <button className='register-button'>Register</button>
    </div>
  )
}
