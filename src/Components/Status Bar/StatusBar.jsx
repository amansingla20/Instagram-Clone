import React, {useState, useEffect} from 'react'
import './StatusBar.css';
import { Avatar } from '@material-ui/core';
import statusimg from '../../images/pp1.png';

function StatusBar() {

    const [statusList, setStatusList] = useState([]);
    
    useEffect(()=>{
        getData();
    },[])

    let getData= () =>{
        let data = [
            {
                username: "aman_20",
                imageURL:  statusimg 
            },
            {
                username: "MsDhoni_7",
                imageURL: "https://resources.pulse.icc-cricket.com/players/284/1.png"
            },
            {
                username: "Yuvi_Singh",
                imageURL: "https://assets.telegraphindia.com/telegraph/10spoyuvi.jpg"
            },
            {
                username: "Sachin_Rocks",
                imageURL: "https://static.toiimg.com/thumb/msid-76231570,width-1200,height-900,resizemode-4/.jpg"
            },
            {
                username: "Bhaji_Paji",
                imageURL: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c153922/harbhajan-singh.jpg"
            }, 
            {
                username: "Wall_Dravid",
                imageURL: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c156286/rahul-dravid.jpg"
            }, 
            {
                username: "VVS_Laxman",
                imageURL: "https://www.mykhel.com/img/2018/11/laxman-1541059196.jpg"
            },
            {
                username: "Saurav_Ganguly",
                imageURL: "https://images.herzindagi.info/image/2019/Jul/lesser-known-facts-main.jpg"
            },
            {
                username: "Sir_Jadeja",
                imageURL: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170670/ravindra-jadeja.jpg"
            },
            {
                username: "Imran_Tahir",
                imageURL: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170764/imran-tahir.jpg"
            },
        ]
        setStatusList(data);
    }
    
    return (
        <div className='statusBar'>
            
            {
                statusList.map((item, key)=>(
                    <div className='statusBar-content' key ={key}>
                    <Avatar className='Avatar' src={item.imageURL}/>
                    <div className='username'>{item.username}</div>
                     </div>
                ))
            }

        </div>
    )
}

export default StatusBar
