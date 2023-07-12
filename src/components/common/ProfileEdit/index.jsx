import React,{useState} from 'react';
import "./index.scss";
import {editProfileData} from "../../../api/FirestoreAPIs"
import { AiOutlineClose } from "react-icons/ai";
function ProfileEdit({onEdit,currentUser}) {
const [profileInput,setProfileInput]=useState(currentUser);
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
          <AiOutlineClose className='close-icon' onClick={onEdit} size={25}/>
        
        </div>
        <div className='profile-edit-inputs'>
        <label>Name</label>
        <input className='edit-input' onChange={getInput} name='name' placeholder='Name' value={profileInput.name}/>
        <label>Headline</label>
        <input className='edit-input' onChange={getInput} name='headline' placeholder='Headline' value={profileInput.headline} />
        <label>Country</label>
        <input className='edit-input' onChange={getInput} name='country' placeholder='Country' value={profileInput.country}/>
        <label>City</label>
        <input className='edit-input' onChange={getInput} name='city' placeholder='City' value={profileInput.city}/>
        <label>Company</label>
        <input className='edit-input' onChange={getInput} name='company' placeholder='Company' value={profileInput.company} />
        <label>Industry</label>
        <input className='edit-input' onChange={getInput} name='industry' placeholder='Industry' value={profileInput.industry}/>
        <label>College</label>
        <input className='edit-input' onChange={getInput} name='college' placeholder='College' value={profileInput.college}/>
        <label>About</label>
        <textarea className='edit-textarea'  rows={5} onChange={getInput} name='aboutMe' placeholder='About Me' value={profileInput.aboutMe}/>
        <label>Skills</label>
        <input className='edit-input' onChange={getInput} name='skills' placeholder='Skills' value={profileInput.skills}/>
        <label>Website</label>
        <input className='edit-input' onChange={getInput} name='website' placeholder='Website' value={profileInput.website}/>
        </div>
        <div className='savebtn-container'>
          <button className='save-btn' onClick={updateProfileData}>Save</button>
        </div>
    </div>
  )
}

export default ProfileEdit