import React, { useEffect, useMemo,  useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';
import {BsPencil,BsTrash} from "react-icons/bs"
import { deletePost, getAllUsers, getCurrentUser,getConnections } from '../../../api/FirestoreAPIs';
import { useLocation } from 'react-router-dom';



function PostCard({posts,id,getEditData}) {
  let location = useLocation();
  let navigate=useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const [isConnected,setConnected]=useState(false)
  //const currentUser=JSON.parse(localStorage.getItem('user'))

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
    
    getAllUsers(setAllUsers)
  },[])
  useEffect(()=>{
    getConnections(currentUser.userID,posts.userID,setConnected);
    //console.log(isConnected);
  },[currentUser.userID,posts.userID])

  return (
    (location?.state?.trigger)?(
      <div className='post-card' key={id} >
      <div className="post-image-wrapper">
      <div className='post-header'>
        <img alt='profileImg' className='profileIcon' src={allUsers.filter((item)=>item.id===posts.userID).map(x=>x.imageLink)[0]} />
          <div className='post-header-text'>
            <p className='username' >{posts.userName}</p>
            
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
       {posts.postImage? <img className='post-image' src={posts.postImage} alt="post-image"/>:<></>}

        <LikeButton userID={location?.state?.id} postID={posts.postID}/>
    </div>
    ):(
    isConnected || currentUser.userID===posts.userID?(
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
       {posts.postImage? <img className='post-image' src={posts.postImage} alt="post-image"/>:<></>}

        <LikeButton userID={currentUser.userID} postID={posts.postID}/>
    </div>
    ):(<></>))
  )
}

export default PostCard;