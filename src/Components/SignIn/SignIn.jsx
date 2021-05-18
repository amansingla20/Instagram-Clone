import React, {useState} from 'react'
import '../Login/Login.css';
//import {useHistory} from 'react-router-dom';

const SignIn = () => {

    //let history = useHistory();
    const [formData, setFormData] = useState({
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
             <input placeholder='Phone number, username or email' 
             name='username' type="text" className='signinText'/>
             <input placeholder='Password' type="password" name='password' className='signinText'/>
            <input type= 'submit' value='Login' className='signinButton'/>
        </form>
    )
}

export default SignIn
