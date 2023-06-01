import React, { useState } from 'react'
import { LoginAPI, GoogleSigninAPI } from '../api/AuthAPI'
import LinkedIn from '../pictures/LinkedIn.png'
import "../Sass/LoginComponent.scss"
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () =>{
    try{
      let foundUser = await LoginAPI(credentials.email, credentials.password);
      toast.success('You have successfully logged in!');
      navigate("/home");
    }
    //console.log(foundUser);
    catch(err){
      if(String(err.message).includes('user-not-found')){
        toast.error('User not found')
      }
      else if(String(err.message).includes('wrong-password')){
        toast.error('Password is incorrect');
      }
      else{
        toast.error(err.message);
      }
    }
  }
  const googleSignIn = async() => {
    
    try{
      let res = await GoogleSigninAPI();
      toast.success('You have successfully logged in!');
      navigate("/home");
    }
    catch(err){
        toast.error(err.message);
    }
  }
  return (
    <div>
        <img src={LinkedIn} className='linkedinlogo' title='LinkedIn'/>
      <div>
      <div style={{display:'grid'}}>
        <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
          <div>
            <input onChange={(event)=>{
              setCredentials({ ...credentials, email: event.target.value});
            }}
            placeholder='Enter email' className='inputField'/>
          </div>
            
            <input  onChange={(event)=>{
              setCredentials({...credentials, password: event.target.value});
            }}
            placeholder='Enter password' type='password' className='inputField' />
            <button  className='login-btn' onClick={login}>Sign in</button>
            <p>Forgot Password?</p>
            <hr data-content='or' className='hr-text'/>
            {/* Add a separator */}
            <GoogleButton label='Sign in with Google' className='signin-btn' onClick={googleSignIn}></GoogleButton>
            <p style={{justifySelf:"center"}}>New to LinkedIn? <span onClick={()=>navigate("/register")} className='join-now'>Join now</span></p>
        </div>
      </div>
    </div>
    
  )

}

