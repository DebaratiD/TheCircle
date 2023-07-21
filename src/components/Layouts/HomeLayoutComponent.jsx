
import React ,{useMemo, useState}from 'react'
import HomeComponent from '../HomeComponent'
import TopNavbar from '../common/TopNavbar'
import {getCurrentUser} from '../../api/FirestoreAPIs'

export default function HomeLayoutComponent() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  }
  ,[]);
  return (
    <>
        <TopNavbar currentUser={currentUser}/>
        <HomeComponent currentUser={currentUser}/>
    </>
    
  )
}
