import React,{useState} from 'react';
import "./index.scss";
import {editProfileData} from "../../../api/FirestoreAPIs"

function ProfileEdit({onEdit,currentUser}) {
const [profileInput,setProfileInput]=useState({});
const getInput=(event)=>{
let {name,value}=event.target;
let input={[name]:value};
setProfileInput({...profileInput,...input});
};
const updateProfileData= async()=>{
  await editProfileData(currentUser?.userID,profileInput);
  await onEdit();
};

  return (
    <div className='profile-card'>
        <div className="edit-btn">
        <button onClick={onEdit} style={{float:'right'}}>Go back</button>
        </div>
        <div className='profile-edit-inputs'>
        <input className='edit-input' onChange={getInput} name='name' placeholder='Name' />
        <input className='edit-input' onChange={getInput} name='headline' placeholder='Headline' />
        <input className='edit-input' onChange={getInput} name='location' placeholder='Location' />
        <input className='edit-input' onChange={getInput} name='company' placeholder='Company' />
        <input className='edit-input' onChange={getInput} name='college' placeholder='College' />
        </div>
        <div className='savebtn-container'>
          <button className='save-btn' onClick={updateProfileData}>Save</button>
        </div>
    </div>
  )
}

export default ProfileEdit