import React, {useState} from 'react'
import './SignUp.css';
import Joi from 'joi-browser';
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core';
    
const useStyles = makeStyles((theme)=>({
    alert: {
		marginBottom: theme.spacing(1),
	}
}))

const SignUp = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        mobile:'',
        fullname:'',
        username: '',
        password: ''
    });
    console.log(formData);

    const [errors, setErrors] = useState([]);

    const schema = {
        mobile: Joi.string().min(10).max(25).required(),
        fullname: Joi.string().min(10).max(40).required(),
        username: Joi.string().min(8).max(25).required(),
        password: Joi.string().min(8).max(25).required()
    }

const handleChange = (event)=>{
    let newFormData = {...formData};
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
    console.log(newFormData);

    let validationResults = Joi.validate(newFormData, schema, {
        abortEarly: true,
    });
    console.log("browser validation results", validationResults);
    if (validationResults.error) 
        setErrors(validationResults.error.details);
        else setErrors([]);
}

let browserValidation = ()=>{
    let validationResults = Joi.validate(formData, schema, {
        abortEarly: false,
    });
    console.log("browser validation results", validationResults);
    if (validationResults.error) {
        setErrors(validationResults.error.details);
        return false;
    }
    return true;
}

const handleSubmit = (event)=>{
    event.preventDefault();
    if(browserValidation()) { 
        setErrors([]);
        alert('validated')
};
}

    return (
        <>
          {errors &&
				errors.map((error) => (
					<Alert className={classes.alert} severity="error">
							{error.message}
						</Alert>
					))}
            <form onChange={handleChange} onSubmit={handleSubmit}>
            <input name= 'mobile' placeholder='Mobile number' type="text" className='signinText'/>
            <input name='fullname' placeholder='Full Name' type="text" className='signinText'/>
            <input name= 'username' placeholder='Username' type="text" className='signinText'/>
             <input name= 'password' placeholder='Password' type="password" className='signinText'/>
            <input type= 'submit' value='SignUp' className='signinButton'/>
        </form>
        </>
    )  
}

export default SignUp
