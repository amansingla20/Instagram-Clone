import React from 'react'
import './InfoSection.css';
import Avatar from '@material-ui/core/Avatar';

const InfoSection = () => {
    return (
        <div>
            <div className='image-container'>
            <Avatar src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            className='info-image'/>
            <div className='info-section'>
                <div className='info-username'>aman_20</div>
                <div className='info-description'>Frontend, JavaScript, React Enthusiast, also interested in Technical Content Writing</div>
            </div>
            </div>
        </div>
    )
}

export default InfoSection
