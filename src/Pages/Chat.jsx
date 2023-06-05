import { React, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/loader'
import ChatComponent from '../components/ChatComponent'

export default function Chat() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
  
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
  return loading? <Loader /> : <ChatComponent currentUser={user}/>;
  
}