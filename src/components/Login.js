import React from 'react'

export default function Login() {
  return (

    <div className='modal-window__content'>
        <p>Enter your username and password to login.</p>
        <input className='user-email' type='text' placeholder='almamun_uxui@outlook.com'></input>
        <input className='user-password' type='password'></input>
        <p className='fPassText'>Forgot password?</p>
        <button className='login-button'>Login</button>
    </div>

  )
}
