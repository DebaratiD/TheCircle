import { React, useEffect, useState, useMemo } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import db  from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader';
import HomeLayoutComponent from '../components/HomeLayoutComponent';
import { getUserData } from '../api/FirestoreAPIs';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useMemo(()=>{
    getUserData(setCurrentUser);
  }
  ,[]);
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
        navigate('/home');
        setLoading(false);
      }
    })
  }, []);
  return loading? <Loader /> : <HomeLayoutComponent currentUser = {currentUser}/>;

}
