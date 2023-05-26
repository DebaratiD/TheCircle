import React, { useState } from 'react'
import { LoginAPI, registerAPI } from '../api/AuthAPI'
import LinkedIn from '../pictures/LinkedIn.png'
import "../Sass/LoginComponent.scss"
import GoogleButton from 'react-google-button';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () =>{
    try{
      let foundUser = await LoginAPI(credentials.email, credentials.password);
      console.log(foundUser?.user);
    }
    //console.log(foundUser);
    catch(err){
      alert(err.message);
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
            <input onChange={(event)=>{
              setCredentials({ ...credentials, email: event.target.value});
            }}
            placeholder='Enter email' className='inputField'/>
            <input  onChange={(event)=>{
              setCredentials({...credentials, password: event.target.value});
            }}
            placeholder='Enter password' type='password' className='inputField' />
            <button  className='login-btn' onClick={login}>Sign in</button>
            <p>Forgot Password?</p>
            <p>---------------------------------or---------------------------------</p>
            {/* Add a separator */}
            <GoogleButton label='Sign in with Google' className='signin-btn'></GoogleButton>
            <p style={{justifySelf:"center"}}>New to LinkedIn? <span onClick={register} className='join-now'>Join now</span></p>
        </div>
      </div>
    </div>
    
  )
}
