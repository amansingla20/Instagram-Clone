import React, {useState} from 'react'
import '../Login/Login.css';
import {useHistory} from 'react-router-dom';
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

const SignIn = () => {
    const classes = useStyles();

    let history = useHistory();
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
        console.log('errors', errors);
        const handleSubmit = (e)=>{
            e.preventDefault();
            

            if(browserValidation()) { 
                setErrors([]);

                let found = false;
                let user_received = localStorage.getItem('Users');
                if(user_received === null){
                    user_received = [];
                }
                else{
                    user_received = JSON.parse(user_received);
                }
                for(let user of user_received){
                    console.log(user);
                    if(user.email === formData.username && user.password === formData.password){
                         history.push('/homepage');
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Signed In Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          setFormData({
                            username: '',
                            password: ''
                        });
                        found=true;
                        break;    
                    }
                }
                if(found === false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Account not registered',
                      })
                   setFormData({
                       username: '',
                       password: ''
                   });
                   console.log(formData);
                }
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
           name='username' value={formData.username} type="text" 
          
           className={`signinText ${errors.find((err) => {
            return err.path[0] === "username"
        }) ? 'error-field' : ''
    }`} 
        />
             <input  value={formData.password}  placeholder='Password' type="password" name='password' 
             className={`signinText ${errors.find((err) => {
                return err.path[0] === "password"
            }) ? 'error-field' : ''
        }`} 
             />
            <input type= 'submit' value='Login' className='signinButton'/>
        </form>
        </>
    )
}

export default SignIn
