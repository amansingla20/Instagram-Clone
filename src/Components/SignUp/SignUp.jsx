import React from 'react'
import './SignUp.css';
    
const SignUp = () => {
    return (
        <div>
            <input placeholder='Mobile number' type="text" className='signinText'/>
            <input placeholder='Full Name' type="text" className='signinText'/>
            <input placeholder='Username' type="text" className='signinText'/>
             <input placeholder='Password' type="password" className='signinText'/>
            <button className='signinButton'>SignUp</button>
        </div>
    )  
}

export default SignUp
