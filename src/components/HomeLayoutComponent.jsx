
import React ,{useMemo, useState}from 'react'
import HomeComponent from './HomeComponent'
import TopNavbar from './common/TopNavbar'
import {getCurrentUser} from '../api/FirestoreAPIs'

export default function HomeLayoutComponent() {
  const [currentUser, setCurrentUser]=useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  },[])
  //console.log("ankit raj 012"+currentUser);

  return (
    <>
        <TopNavbar/>
        <HomeComponent currentUser={currentUser}/>
    </>
    
  )
}
