import React,{useEffect,useState} from 'react'
import "./index.scss"
import {getConnections} from "../../../../api/FirestoreAPIs"
import {AiOutlineUserAdd} from "react-icons/ai"
import userIcon from '../../../../pictures/user.jpg'

function ConnectedUser({user,getCurrentUser,currentUser}) {
  const [isConnected,setConnected]=useState(false)
  const UserIcon=user.imageLink!=null?(user.imageLink):userIcon;
  useEffect(()=>{
    getConnections(currentUser.userID,user.id,setConnected);
    //console.log(isConnected);
  },[currentUser.userID,user.id])
  return (
    !isConnected?(
    <div className='grid-child' >
      <img src={UserIcon}/>
      <p className='name'>{user.name}</p>
      <p className='headline'>{user.headline}</p>
      <button onClick={()=> getCurrentUser(user.id)}><AiOutlineUserAdd/>Connect</button>
    
    </div>):(<></>)
  )
}

export default ConnectedUser