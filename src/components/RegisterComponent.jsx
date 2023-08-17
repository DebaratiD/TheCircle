import React, { useState ,useMemo} from 'react'
import { registerAPI, GoogleSigninAPI } from '../api/AuthAPI';
import { useNavigate } from 'react-router-dom';
import LinkedIn from "../pictures/LinkedIn.png"
import "../Sass/RegisterComponent.scss";
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button';
import { postUserData ,getCurrentUser} from '../api/FirestoreAPIs';


export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
    
  },[])
  const register = async () =>{
    try{
      let foundUser = await registerAPI(credentials.email, credentials.password);
      toast.success("Welcome to LinkedIn! Your account has been created.")
      postUserData({name:credentials.name, email:credentials.email});
      navigate("/home");
    }
    //console.log(foundUser);
    catch(err){
      toast.error(err.message);
    }
  }
  const googleRegister = async() => {
    
    try{
      
      let res = await GoogleSigninAPI();
      if(currentUser==null){
      postUserData({name:res.user.displayName, email:res.user.email});
      }
      toast.success('You have successfully registered with Google!');
    }
    catch(err){
        toast.error(err.message);
    }
    
  }
  return (
    <div className='container1'>
        <img src={LinkedIn} className='linkedinlogo' title='LinkedIn'/>
      
      <div style={{display:'grid'}}>
          <p className='heading1'>Make the most of your professional life</p>
          
          <label>Your Name</label>
            <input onChange={(event)=>{
              setCredentials({ ...credentials, name: event.target.value});
            }} placeholder='Enter your name' className='inputField'/>
            <label>Email or phone number</label>
            <input onChange={(event)=>{
              setCredentials({ ...credentials, email: event.target.value});
            }}
            placeholder='Enter email' className='inputField'/>
          
            <label>Password (6 or more characters)</label>
            <input  onChange={(event)=>{
              setCredentials({...credentials, password: event.target.value});
            }}
            placeholder='Enter password' type='password' className='inputField' />
            <button  className='login-btn' onClick={register}>Agree & Join</button>
            
            <hr data-content='or' className='hr-text'/>
            <GoogleButton label='Register with Google' className='signin-btn' onClick={googleRegister}></GoogleButton>
            <p style={{justifySelf:"center"}}>Already on LinkedIn? <span onClick={()=>navigate("/")} className='join-now'>Sign in</span></p>
        </div>
     
    </div>
    
  )
}
