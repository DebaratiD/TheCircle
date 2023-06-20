import React,{useState} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'

function ProfileCard({currentUser,onEdit}) {
    
  return (
    <>
    {<div className="profile-card">
        <div className="edit-btn">
           <button onClick={onEdit}>Edit</button>
        </div>
        <h3 className="username">{currentUser.name}</h3>
        <p className="userEmail">{currentUser.email}</p>
    </div>}
    </>
  )
}

export default ProfileCard