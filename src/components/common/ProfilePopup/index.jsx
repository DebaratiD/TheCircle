import React from 'react'
import LogOutAPI from '../../../api/AuthAPI'
import './index.scss'
function ProfilePopup() {
    return (
      <div className="popup-card">
        <ul className="popup-options">
            <li className="popup-option" onClick={LogOutAPI}>Logout</li>
        </ul>
      </div>
    );

}


export default ProfilePopup