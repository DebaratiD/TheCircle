import React,{useState,useMemo} from 'react'
import { LogOutAPI } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Sass/TopNavbar.scss';
import {getCurrentUser} from "../api/FirestoreAPIs"

export default function UserInfoComponent() {
    const navigate = useNavigate();
    // const [currentUser, setCurrentUser] = useState({});
    // useMemo(()=>{
    //   getCurrentUser(setCurrentUser);
    // }
    // ,[]);

   const currentUser= JSON.parse(localStorage.getItem('user'));
    const signout = async() =>{
        try{
            let res = await LogOutAPI();
             localStorage.removeItem("user");
             navigate('/');
                
          
        }
        catch(error){
            toast.error(error.message);
        }
    }
  return (
    <span id='user-div' className='user-div'>
      <p className='log-out' onClick={()=>navigate("/profile",{state:{id:currentUser?.userID}})}>View profile</p>
      <p onClick={signout} className='log-out'>Logout</p>
    </span>
  )
}
