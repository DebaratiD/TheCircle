import React, { useState } from 'react';
import "./index.scss";
import { editProfile } from '../../../api/FirestoreAPIs';

function ProfileEdit({onEdit, currentUser}) {
  const [editInput, setEditInput] = useState({});
  const getInput = (event) => {
    let {name, value} = event.target;
    let input={};
    if(value || value.length){
      input[name]=value;
    }
    setEditInput({...editInput, ...input});
  };
  const updateProfileData = () => {
    editProfile(currentUser?.userID, editInput);
    onEdit();
  };
  return (

    <div className='profile-card'>
        <div className="edit-btn">
        <button onClick={onEdit} style={{float:'right'}}>Go back</button>
        </div>
        <div className='profile-edit-inputs'>
        <input onChange={getInput} className='edit-input' placeholder='Name' name='name'/>
        <input onChange={getInput} className='edit-input' placeholder='Headline' name='headline'/>
        <input onChange={getInput} className='edit-input' placeholder='Company' name='company'/>
        <input onChange={getInput} className='edit-input' placeholder='College' name='college'/>
        <button onClick={updateProfileData} className='custom-blue-btn'>Save details</button>
        </div>
    </div>
  )
}

export default ProfileEdit