import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';
import {BsPencil,BsTrash} from "react-icons/bs"
import { deletePost } from '../../../api/FirestoreAPIs';

function PostCard({posts,id,getEditData}) {
  let navigate=useNavigate();
  const currentUser=JSON.parse(localStorage.getItem('user'))
  return (
    <div className='post-card' key={id} >
      <div className="post-image-wrapper">
        { currentUser.userID==posts.userID?
        (<div className="action-container">
          <BsPencil size={20} className='action-icon' onClick={()=>getEditData(posts)}/>
          <BsTrash size={20} className='action-icon' onClick={()=>deletePost(posts.id)}/>
        </div>):(<></>)}
      </div>
      <p className='username' onClick={()=>navigate('/profile',{
        state:{id:posts?.userID,email:posts.userEmail},
      })}>{posts.userName}</p>
        <p className='timestamp'>{posts.timeStamp}</p>
        <p className='status'>{posts.status}</p>
        <LikeButton userID={currentUser.userID} postID={posts.postID}/>
    </div>
  )
}

export default PostCard;