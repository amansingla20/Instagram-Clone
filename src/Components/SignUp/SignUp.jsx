import React, {useState} from 'react'
import './SignUp.css';
    
const SignUp = () => {

    const [formData, setFormData] = useState({
        mobile:'',
        fullname:'',
        username: '',
        password: ''
    });
    console.log(formData);

const handleChange = (event)=>{
    let newFormData = {...formData};
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
    console.log(newFormData);
}

    return (
        <form onChange={handleChange}>
            <input name= 'mobile' placeholder='Mobile number' type="text" className='signinText'/>
            <input name='fullname' placeholder='Full Name' type="text" className='signinText'/>
            <input name= 'username' placeholder='Username' type="text" className='signinText'/>
             <input name= 'password' placeholder='Password' type="password" className='signinText'/>
            <input type= 'submit' value='SignUp' className='signinButton'/>
        </form>
    )  
}

export default SignUp
