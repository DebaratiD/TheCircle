import React from 'react'
import "../Sass/UserProfile.scss"
function UserProfile({name,photoURL}) {
  return (
    <div className="user-profile">
        <div className="user-img">
            <img src={photoURL} alt="" />
        </div>
        <div className="user-info">
            <div className="user-name">
                {name}
            </div>
        </div>
    </div>
  )
}

export default UserProfile