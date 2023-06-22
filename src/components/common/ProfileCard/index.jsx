import React,{useState,useMemo} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { getStatus } from '../../../api/FirestoreAPIs';
import PostCard from '../PostCard'

function ProfileCard({currentUser,onEdit}) {
  const [AllStatuses,setAllStatus]=useState([]);
  useMemo(()=>{
    getStatus(setAllStatus);
  },[]);
  return (
    <div className='profile-container'>
    <div className="profile-card">
        <div className="edit-btn">
           <button onClick={onEdit} style={{float:'right'}}>Edit</button>
        </div>
        <div className="profile-info">
          <div className="left-info">
            <h3 className="username">{currentUser.name}</h3>
            <p className="heading">{currentUser.headline}</p>
            <p>{currentUser.location}</p>
          </div>
          <div className="right-info">
            <p className="college">{currentUser.college}</p>
            <p className="company">{currentUser.company}</p>
          </div>
        </div>     
    </div>
    <div>
      {AllStatuses.filter((item)=>{
        return item.userEmail==JSON.parse(localStorage.getItem("user"))?.email;
      }).map((posts)=>{
        return (<div key={posts.id}>
          <PostCard posts={posts}/>
          </div>)

      })}
    </div>
    </div>
  )
}

export default ProfileCard