import React ,{useMemo,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../../api/FirestoreAPIs'

import {LogOutAPI} from '../../../api/AuthAPI'
import './index.scss'
import Button from "../Button"

function ProfilePopup() {
  let navigate=useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    useMemo(()=>{
      getCurrentUser(setCurrentUser);
    }
    ,[]);

  const profilePage=()=>{
    navigate("/profile",{state:{id:currentUser?.userID,email:currentUser?.email}})
    window.location.reload();
  }
  const loggedInUser= JSON.parse(localStorage.getItem('user'));
    return (
      <div className="popup-card">
        <p className='name'>{currentUser.name}</p>
        <p className='headline'>{currentUser.headline}</p>
        <Button title="View Profile" onClick={profilePage }/>
        <Button title="Log out" onClick={LogOutAPI }/>
     
      </div>
    );

}


export default ProfilePopup