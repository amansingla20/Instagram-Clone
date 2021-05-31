import { Avatar } from '@material-ui/core';
import React from 'react';
import './Suggestion.css';

const Suggestion = () => {
    return (
        <div>
            <div className='suggestion-box'>
                <div className='suggestion-title'>
                    <p style={{fontSize: '18px'}}>Suggestions for You
                    </p>
                </div>
                <div className='suggestion-body'>
                    <div className='information'>
                        <Avatar src = 'https://resources.pulse.icc-cricket.com/players/284/1.png' className='person-image'/>
                        <div className='person-name'>Ms_Dhoni_7
                        </div>
                    </div>
                    <div className='information'>
                        <Avatar src = 'https://assets.telegraphindia.com/telegraph/10spoyuvi.jpg' className='person-image'/>
                        <div className='person-name'>Yuvi_Paji
                        </div>
                    </div>
                    <div className='information'>
                        <Avatar src ='https://static.toiimg.com/thumb/msid-76231570,width-1200,height-900,resizemode-4/.jpg' className='person-image'/>
                        <div className='person-name'>Sachin_Master_Blaster
                        </div>
                    </div>
                    <div className='information'>
                        <Avatar src = 'https://m.cricbuzz.com/a/img/v1/192x192/i1/c153922/harbhajan-singh.jpg' className='person-image'/>
                        <div className='person-name'>Harbhajan_Paji
                        </div>
                    </div>
                    <div className='information'>
                        <Avatar src = "https://m.cricbuzz.com/a/img/v1/192x192/i1/c156286/rahul-dravid.jpg"
                        className='person-image'/>
                        <div className='person-name'>Rahul_Dravid_The_Wall
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
