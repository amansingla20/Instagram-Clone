import React from 'react'
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import insta_logo from '../../images/logo.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import { Avatar } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <div className='navbar'>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to ='/'>
                        <img src={insta_logo} alt="" className='instaLogo'/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="text" placeholder= 'Search' className='search'/>
                        <SearchIcon className='search-icon'/>
                    </Grid>
                    <Grid item xs={3} style={{display:'flex'}}>
                        <img className='img_class' src={home} alt="" width='25px'/>
                        <img className='img_class' src={message} alt="" width='25px'/>
                        <img className='img_class' src={find} alt="" width='25px'/>
                        <img className='img_class' src={react} alt="" width='25px'/>
                        <Avatar  className='img_class' style= {{maxWidth: '26px', maxHeight: '26px'}} src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NavBar
