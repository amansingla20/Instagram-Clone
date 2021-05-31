import React from 'react'
import './MainContent.css';
import Grid from '@material-ui/core/Grid';
import StatusBar from '../Status Bar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../Info Section/InfoSection';
import Suggestion from '../Suggestion/Suggestion';

function MainContent() {
    return (
        <div>
            <Grid container>
            <Grid item xs = {2}></Grid>
            <Grid item xs = {6}>
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
            </Grid>
            <Grid item xs = {2}>
                <InfoSection/>
                <Suggestion/>
            </Grid>
            <Grid item xs = {2}></Grid>
            </Grid>
        </div>
    )
}

export default MainContent
