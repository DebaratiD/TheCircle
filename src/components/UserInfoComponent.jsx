import React from 'react'
import { LogOutAPI } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Sass/TopNavbar.scss';

export default function UserInfoComponent() {
    const navigate = useNavigate();
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
    <span id='user-div' className='user-div'><p onClick={signout} className='log-out'>Logout</p></span>
  )
}
