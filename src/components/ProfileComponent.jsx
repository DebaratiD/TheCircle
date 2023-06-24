import React,{useState} from 'react'
import ProfileCard from "../components/common/ProfileCard"
import ProfileEdit from './common/ProfileEdit';
import "../Sass/ProfileComponent.scss";
function ProfileComponent({currentUser}) {
    const [isEdit,setisEdit]=useState(false);

    const onEdit=()=>{
        setisEdit(!isEdit);
    }
  return (
    <div className='profile-box'>
    {isEdit ? (<ProfileEdit currentUser={currentUser} onEdit={onEdit}/>):(<ProfileCard currentUser={currentUser} onEdit={onEdit}/>)}
    </div>
  )
}

export default ProfileComponent