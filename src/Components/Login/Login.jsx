import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logo.png';
import fb_logo from '../../images/fb.png';
import appStore from '../../images/app.png';
import playStore from '../../images/play.png';
import './Login.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Login = () => {
    let [isLogin, setLogIn] = useState(true);

    let changeLogin = () =>{
        console.log(isLogin);
        if(isLogin){
        setLogIn(false);
        }
        else {setLogIn(true)};
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div className='login-main'>
                        <div>
                            <img src={inst_image} alt=""  width='450px'/>
                        </div>
                        <div>
                            <div className='login-right'>
                                <img className='instaLogo' src={insta_logo} alt="" />
                                <div className='signIn'>
                                        {isLogin? <SignIn/> : <SignUp/>}

                                    <div className='login-ordiv'>
                                        <div className='login-divider'></div>
                                        <div className='login-or'>OR</div>
                                        <div className='login-divider'></div>
                                    </div>
                                    <img src={fb_logo} alt="" className='fb-logo'/>
                                    <div className='login-fb'>Login with facebook</div>
                                    <div className='login-fp'>Forgot password?</div>
                                </div>
                            </div>
                            <div className='signupOptions'>
                                {isLogin? <div className='login-signIn'>
                                Don't have an account? <span onClick ={changeLogin} className='signup-text'>Sign up</span></div> 
                                :  
                                <div className='login-signUp'>Have an account? <span onClick={changeLogin} className='signin-text'>SignIn</span></div>}
                            </div>
                            <div>
                                <div className='app-section'>Get the app</div>
                                <div className='app-images'>
                                    <img className= 'loginPage-app' src={appStore} alt="" width='136px' />
                                    <img className = 'loginPage-play' src={playStore} alt="" width='136px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
