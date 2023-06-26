import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';

function PostCard({posts,id}) {
  let navigate=useNavigate();
  const currentUser=JSON.parse(localStorage.getItem('user'))
  return (
    <div className='post-card' key={id} >
      <p className='username' onClick={()=>navigate('/profile',{
        state:{id:posts?.userID,email:posts.userEmail},
      })}>{posts.userName}</p>
        <p className='timestamp'>{posts.timeStamp}</p>
        <p className='status'>{posts.status}</p>
        <LikeButton userID={currentUser?.userID} postID={posts.postID}/>
    </div>
  )
}

export default PostCard;