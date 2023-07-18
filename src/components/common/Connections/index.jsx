import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../../../api/FirestoreAPIs'
import "./index.scss"

function ConnectionsComponent() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers(setUsers);
  },[]);  
  return (
    <div>Connections Component</div>
  )
}

export default ConnectionsComponent