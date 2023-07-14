import React, { useMemo,  useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';
import {BsPencil,BsTrash} from "react-icons/bs"
import { deletePost, getAllUsers, getCurrentUser } from '../../../api/FirestoreAPIs';

function PostCard({posts,id,getEditData}) {
  let navigate=useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  //const currentUser=JSON.parse(localStorage.getItem('user'))

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
    getAllUsers(setAllUsers)
  },[])


  return (
    <div className='post-card' key={id} >
      <div className="post-image-wrapper">
      <div className='post-header'>
        <img alt='profileImg' className='profileIcon' src={allUsers.filter((item)=>item.id===posts.userID).map(x=>x.imageLink)[0]} />
          <div className='post-header-text'>
            <p className='username' onClick={()=>navigate('/profile',{
              state:{id:posts?.userID,email:posts.userEmail},
            })}>{posts.userName}</p>
              <p className='timestamp'>{posts.timeStamp}</p>
          </div>
      </div>
        { currentUser.userID==posts.userID?
        (<div className="action-container">
          <BsPencil size={20} className='action-icon' onClick={()=>getEditData(posts)}/>
          <BsTrash size={20} className='action-icon' onClick={()=>deletePost(posts.id)}/>
        </div>):(<></>)}
      </div>
       <p className='status'>{posts.status}</p>
        <LikeButton userID={currentUser.userID} postID={posts.postID}/>
    </div>
  )
}

export default PostCard;