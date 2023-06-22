import React,{useState} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { useLocation } from 'react-router-dom'

function ProfileCard({currentUser,onEdit}) {
  //console.log(currentUser);
  let location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
    
  return (
    <>
    {<div className="profile-card">
        <div className="edit-btn">
           <button onClick={onEdit} style={{float:'right'}}>Edit</button>
        </div>
        <h3 className="username">{currentUser.name}</h3>
        <div className='top-outer'>
          <div className='top-name-heading'>
            <p className="userHeadline">{currentUser.headline}</p>
          </div>
          <div className='top-clg-cmp'>
            <p className="userCollege">{currentUser.college}</p>
            <p className="userCompany">{currentUser.company}</p>
          </div>
        </div>        
        <p className="userLocation">{currentUser.location}</p>
        
    </div>}
    </>
  )
}

export default ProfileCard