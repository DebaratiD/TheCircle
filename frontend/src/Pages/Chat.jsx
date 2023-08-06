import { React, useEffect, useState,useMemo } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import ChatLayout from "../components/Layouts/ChatLayout"

export default function Chat() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (res)=>{
      
      if(!res?.accessToken){
        navigate('/');
      }
      else{
        setLoading(false);
      }
    })
  }, []);
  return loading? <Loader /> : <ChatLayout/>;
  
}