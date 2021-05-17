import React from 'react'
import '../Login/Login.css';

const SignIn = () => {
    return (
        <div>
             <input placeholder='Phone number, username or email' type="text" className='signinText'/>
             <input placeholder='Password' type="password" className='signinText'/>
            <button className='signinButton'>Login</button>
        </div>
    )
}

export default SignIn
