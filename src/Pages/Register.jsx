import { React, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/loader'
import RegisterComponent from '../components/RegisterComponent'

export default function Register() {
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
  return loading? <Loader /> : <RegisterComponent />;
  
}
