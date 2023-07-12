import React,{useState,useMemo} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { getStatus,getSingleUser,getSingleStatus } from '../../../api/FirestoreAPIs';
import { HiOutlinePencil } from "react-icons/hi";
import PostCard from '../PostCard'
import { useLocation } from 'react-router-dom'; 


function ProfileCard({currentUser,onEdit}) {
  let location=useLocation();
  const [AllStatuses,setAllStatus]=useState([]);
  const [currentProfile,setCurrentProfile]=useState({});
  useMemo(()=>{
    //getStatus(setAllStatus);
    if(location?.state?.id){
      getSingleStatus(setAllStatus,location?.state?.id);
    }
    if(location?.state?.email){
      getSingleUser(setCurrentProfile,location?.state?.email);
    }
  },[]);
  
  return (
    <div className='profile-container'>
    <div className="profile-card">
        <div className="edit-btn">      
           <HiOutlinePencil className='edit-icon' onClick={onEdit}/>
        </div>
        <div className="profile-info">
          <div className="left-info">
            <h3 className="username">{Object.values(currentProfile).length==0?
            currentUser.name:currentProfile[0]?.name}</h3>
            <p className="heading">
            {Object.values(currentProfile).length==0?
            currentUser.headline:currentProfile[0]?.headline}
            </p>
            <p className="location">{Object.values(currentProfile).length==0?
            `${currentUser.city},${currentUser.country}`:`${currentProfile[0]?.city},${currentProfile[0]?.country}`}
            </p>
            <a className="website" target="_blank" href=
            {Object.values(currentProfile).length==0?
            `${currentUser.website}`:currentProfile[0]?.website}>
              {Object.values(currentProfile).length==0?
            `${currentUser.website}`:currentProfile[0]?.website}
            </a>
          </div>
          <div className="right-info">
            <p className="college">
            {Object.values(currentProfile).length==0?
            currentUser.college:currentProfile[0]?.college}</p>
            <p className="company">{Object.values(currentProfile).length==0?
            currentUser.company:currentProfile[0]?.company}</p>
          </div>
         
        </div>    
        <p className="about-me">
            {Object.values(currentProfile).length==0?
            currentUser.aboutMe:currentProfile[0]?.aboutMe}</p>
         <p className="skills">
          <span className="skill-label">Skills</span>:&nbsp;
            {Object.values(currentProfile).length==0?
            currentUser.skills:currentProfile[0]?.skills}</p>
    </div>
    <div>
      {AllStatuses.map((posts)=>{
        return (<div key={posts.id}>
          <PostCard posts={posts}/>
          </div>)

      })}
    </div>
    </div>
  )
}

export default ProfileCard