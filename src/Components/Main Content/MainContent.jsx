import React from 'react'
import './MainContent.css';
import Grid from '@material-ui/core/Grid';

function MainContent() {
    return (
        <div>
            <Grid item xs = {2}></Grid>
            <Grid item xs = {6}></Grid>
            <Grid item xs = {2}></Grid>
            <Grid item xs = {2}></Grid>
        </div>
    )
}

export default MainContent
