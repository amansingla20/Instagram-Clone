import React, {useEffect, useState} from 'react'
import Posts from '../Posts/Posts'

const MainPage = () => {
    const [postArray, setPostArray] = useState([]);

    useEffect(()=>{
        getPosts();
    })

    let getPosts = ()=>{
        let data= [
            {
                id: 1234,
                username: 'aman_20',
                postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpIV4pVJHopsXShGIpS6eWvHwSM-rYvTdSw&usqp=CAU',
                likes: 7000
            },

            {
                id: 123,
                username: 'ms_dhoni7',
                postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Muf_JSsYH8Z8gU2PYvszAMIMoy5pTvm3CQ&usqp=CAU',
                likes: 7005
            },

            {
                id: 12,
                username: 'aman_20',
                postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VeavLr088k52js63fYUxl5z13axuQy5g3g&usqp=CAU',
                likes: 7055
            },

            {
                id: 121,
                username: 'aman_20',
                postImage: 'https://thumbs.dreamstime.com/b/multi-colors-pink-purple-red-yellow-flowers-background-multi-colors-pink-purple-red-yellow-flowers-background-161173089.jpg',
                likes: 7890
            }
        ]
        setPostArray(data);
    }


    return (
        <div>
            {
                postArray.map((post, key)=>(
                    <Posts key={key} id={post.id} username={post.username} postImage={post.postImage} likes={post.likes}/> 
                ))
            }
        </div>
    )
}

export default MainPage
