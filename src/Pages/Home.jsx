import { React, useEffect, useState } from 'react'
import HomeComponent from '../components/HomeComponent';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import db  from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (res)=>{
      
     
      if(!res?.accessToken){
        navigate('/');
        
      }
      else{
        const user = {
          fullname: res?.displayName,
          email: res?.email,
          photoURL: res?.photoURL
        }
        
        localStorage.setItem("user",JSON.stringify(user));
        //db.collection("users").doc(res?.email).set(user);
        setLoading(false);
        console.log(loading);
      }
    })
  }, []);
  return loading? <Loader /> : <HomeComponent />;

}
