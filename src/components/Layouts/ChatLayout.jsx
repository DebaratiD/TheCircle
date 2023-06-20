
import React ,{useMemo, useState}from 'react'
import TopNavbar from '../common/TopNavbar'
import ChatComponent from "../chatComponents/ChatComponent"
import {getCurrentUser} from '../../api/FirestoreAPIs'


export default function ChatLayout() {
  const [currentUser, setCurrentUser]=useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  },[])

  return (
    <>
        <TopNavbar/>
        <ChatComponent currentUser={currentUser}/>
    </>
    
  )
}
