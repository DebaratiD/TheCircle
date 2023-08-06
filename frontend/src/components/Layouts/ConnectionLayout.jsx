import React,{useState,useMemo} from 'react'
import ConnectionsComponent from '../common/Connections/index'
import TopNavbar from '../common/TopNavbar'
import {getCurrentUser} from '../../api/FirestoreAPIs'


function ConnectionLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  }
  ,[]);
  return (
    <>
        <TopNavbar currentUser={currentUser}/>
        <ConnectionsComponent currentUser={currentUser}/>
    </>
    
  )
}

export default ConnectionLayout