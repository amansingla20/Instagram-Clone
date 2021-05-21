import React, {useState} from 'react'
import '../Login/Login.css';
//import {useHistory} from 'react-router-dom';
import Joi from 'joi-browser';
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    alert: {
		marginBottom: theme.spacing(1),
	}
}))

const SignIn = () => {
    const classes = useStyles();

    //let history = useHistory();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    console.log(formData);

    const [errors, setErrors] = useState([]);

    const schema = {
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
        
        const handleSubmit = (e)=>{
            e.preventDefault();
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
             <input
             placeholder='Phone number, username or email' 
             name='username' type="text" className='signinText'/>
             <input placeholder='Password' type="password" name='password' className='signinText'/>
            <input type= 'submit' value='Login' className='signinButton'/>
        </form>
        </>
    )
}

export default SignIn
