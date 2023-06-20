import React from 'react';
import "./index.scss";
function ProfileEdit({onEdit}) {
  return (

    <div className='profile-card'>
        <div className="edit-btn">
        <button onClick={onEdit}>Go back</button>
        </div>
        <div className='profile-edit-inputs'>
        <input className='edit-input' placeholder='Name' />
        <input className='edit-input' placeholder='Headline' />
        <input className='edit-input' placeholder='Company' />
        <input className='edit-input' placeholder='College' />
        </div>
    </div>
  )
}

export default ProfileEdit