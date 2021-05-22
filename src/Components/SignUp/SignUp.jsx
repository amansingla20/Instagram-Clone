import React, {useState} from 'react'
import './SignUp.css';
import Joi from 'joi-browser';
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2'
    
const useStyles = makeStyles((theme)=>({
    alert: {
		marginBottom: theme.spacing(1),
        alignItems: 'center',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
	}
}))

const SignUp = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        mobile:'',
        name:'',
        username: '',
        password: ''
    });
    console.log(formData);

    const [errors, setErrors] = useState([]);

    const schema = {
        mobile: Joi.string().min(10).max(25).required(),
        name: Joi.string().min(10).max(40).required(),
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
        // alert('validated')
};

let found = false;
let user_received = localStorage.getItem('Users');
if(user_received ===null){
    user_received = [];
}
else {
    user_received = JSON.parse(user_received);
 }
for(let user of user_received){
    console.log(user);
    if(user.email === formData.username){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Account is already registered... Please Signin',
          })
        setFormData({
            name:'',
            mobile:'',
            username: '',
            password: ''
        });
        found=true;
        break;    
    }
}
if(found === true) return;
    user_received.push({'email' : formData.username, 'password': formData.password});
    localStorage.setItem('Users', JSON.stringify(user_received));
    localStorage.setItem('User', formData.username);
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Account created successfully',
        showConfirmButton: false,
        timer: 1500
      })
    setFormData({
        name:'',
        mobile:'',
        username: '',
        password: ''
    });
    // history.push('/dashboard');
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
            <input value = {formData.mobile} name= 'mobile' placeholder='Mobile number' type="text" 
            className={`signinText ${errors.find((err) => {
                return err.path[0] === "mobile"
            }) ? 'error-field' : ''
        }`} 
            />
            <input value = {formData.name} name='name' placeholder='Full Name' 
            className={`signinText ${errors.find((err) => {
                return err.path[0] === "name"
            }) ? 'error-field' : ''
        }`} 
            type="text" />
            <input value = {formData.username} name= 'username' 
            className={`signinText ${errors.find((err) => {
                return err.path[0] === "username"
            }) ? 'error-field' : ''
        }`} 
            placeholder='Username' type="text" />
             <input value = {formData.password} name= 'password' placeholder='Password' type="password"
             className={`signinText ${errors.find((err) => {
                return err.path[0] === "password"
            }) ? 'error-field' : ''
        }`} 
             />
            <input type= 'submit' value='SignUp' className='signinButton'/>
        </form>
        </>
    )  
}

export default SignUp
