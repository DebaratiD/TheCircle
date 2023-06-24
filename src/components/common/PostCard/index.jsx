import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';

function PostCard({posts,id}) {
  let navigate=useNavigate();
  return (
    <div className='post-card' key={id} >
      <p className='username' onClick={()=>navigate('/profile',{
        state:{id:posts?.userID,email:posts.userEmail},
      })}>{posts.userName}</p>
        <p className='timestamp'>{posts.timeStamp}</p>
        <p className='status'>{posts.status}</p>
    </div>
  )
}

export default PostCard;