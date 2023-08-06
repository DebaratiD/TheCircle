import { React, useEffect, useState, useMemo } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'

import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader'
import ConnectionLayout from '../components/Layouts/ConnectionLayout';


export default function Connections() {
  const [loading, setLoading] = useState(true);
  
 
  let navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (res)=>{
      if(!res?.accessToken){
        navigate('/');
        
      }
      else{
        const user = {
          email: res?.email,
          photoURL: res?.photoURL,
          userID: res?.uid
        }
        
        localStorage.setItem("user",JSON.stringify(user));
        navigate('/connections');
        setLoading(false);
      }
    })
  }, []);
  return loading? <Loader /> : <ConnectionLayout/>;

}
