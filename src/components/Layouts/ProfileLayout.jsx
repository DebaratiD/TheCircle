
import React ,{useMemo, useState}from 'react'
import TopNavbar from '../common/TopNavbar'
import ProfileComponent from '../../components/ProfileComponent'
import { getCurrentUser } from '../../api/FirestoreAPIs';

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  }
  ,[]);
  return (
    <>
        <TopNavbar currentUser={currentUser}/>
        <ProfileComponent currentUser={currentUser}/>
    </>
    
  )
}
