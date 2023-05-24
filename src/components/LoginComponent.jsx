import React, { useState } from 'react'
import { LoginAPI, registerAPI } from '../api/AuthAPI'
import "../Sass/LoginComponent.scss"

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
    <div style={{display:'grid'}}>
      <h1>Login Component</h1>
        <input onChange={(event)=>{
          setCredentials({ ...credentials, email: event.target.value});
        }}
        placeholder='Enter email' className='inputField'/>
        <input  onChange={(event)=>{
          setCredentials({...credentials, password: event.target.value});
        }}
        placeholder='Enter password' type='password' className='inputField' />
        <button  className='login-btn' onClick={login}>Log in to LinkedIn</button>
        <button  className='login-btn' onClick={register}>Register with LinkedIn</button>
    </div>
  )
}
