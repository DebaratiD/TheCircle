import React, { useEffect, useState } from 'react'
import {getAllUsers,addConnection,getConnections} from '../../../api/FirestoreAPIs'
import "./index.scss"
import ConnectedUser from "./ConnectedUser/index"

function ConnectionsComponent({currentUser}) {
  const [users,setUsers] = useState([]);

  const getCurrentUser =(id)=>{
    addConnection(currentUser.userID,id);
   
  }
  useEffect(()=>{
    getAllUsers(setUsers);
  },[]);  
  

  
  return (
    <div className='connections-main'>
      { users.map((user)=>{ 
        return user.id==currentUser.userID?( <></>):
        ( <ConnectedUser currentUser={currentUser} user={user} getCurrentUser={getCurrentUser} />)
      })}
    </div>
  )
}

export default ConnectionsComponent