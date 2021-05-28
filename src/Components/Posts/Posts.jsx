import React, {useState, useEffect} from 'react'
import './Posts.css';
import Avatar from '@material-ui/core/Avatar';
//  import postImage from '../../images/post.jpg';
import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';

const Posts = ({username, postImage, likes}) => {
    const [commentList, setCommentList] = useState([]);

    useEffect(()=>{
        getComments();
    },[])

    let getComments= ()=>{
        let data = [
            {
                username: "aman_20",
                commentId: 1234,
                description: 'Nice one..' 
            },
            {
                username: "ms_dhoni7",
                commentId: 123,
                description: 'Good one..' 
            },
            {
                username: "yuvi_paji",
                commentId: 12,
                description: 'Nice one..' 
            },
        ]
        setCommentList(data);
    }

    return (
        <div className='Post-main'>
            <div className='post-header'>
                <Avatar className='post-avatar' src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>

                <div className='post-username'>
                    {username}
                </div>
            </div>

            <div>
                <img src={postImage} 
                alt="" width='615px' height='400px'/>
            </div>

            <div>
                <div style={{marginLeft: '10px'}}>
                    <img src={love} alt="" className='post-reactImage'/>
                    <img src={comment} alt="" className='post-reactImage'/>
                    <img src={share} alt="" className='post-reactImage'/>
                </div>

                <div style={{fontWeight:'bold', marginTop: '-125px', marginLeft: '35px'}}>
                    {likes} likes
                </div>
            </div>

            <div>
                {
                    commentList.map((comment, key)=>(
                            <div key={comment.id}className='post-comment'>
                                {comment.username}: {comment.description}
                            </div>
                    ))
                }
                <input type="text" placeholder='Add a comment...' name="" id="" className='post-commentBox'/>
            </div>

        </div>
    )
}

export default Posts
