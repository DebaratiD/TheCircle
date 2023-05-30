import React, { useState } from 'react'
import { LoginAPI, registerAPI } from '../api/AuthAPI'
import LinkedIn from '../pictures/LinkedIn.png'
import "../Sass/LoginComponent.scss"
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () =>{
    try{
      let foundUser = await LoginAPI(credentials.email, credentials.password);
      toast.success('You have successfully logged in!');
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
  const register = async () =>{
    try{
      let foundUser = await registerAPI(credentials.email, credentials.password);
      alert("User successfully registered!");
      console.log(foundUser);
    }
    //console.log(foundUser);
    catch(err){
      alert(err.message);
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
            <GoogleButton label='Sign in with Google' className='signin-btn'></GoogleButton>
            <p style={{justifySelf:"center"}}>New to LinkedIn? <span onClick={register} className='join-now'>Join now</span></p>
        </div>
      </div>
    </div>
    
  )
}
