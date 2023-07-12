import React from 'react';
import "../../Sass/ChatComponent.scss"
import Sidebar from './Sidebar';
import circleIcon from '../../pictures/circleIcon.png'
import ChatContainer from './ChatContainer';

export default function ChatComponent({currentUser}) {
  
  return <div className='chatPage'>
    <div className="chatPage-container">
    <Sidebar currentUser={currentUser}/>
    <ChatContainer currentUser={currentUser}/>
    {/* <div className="chatPage-bg">
      <img src={circleIcon} alt="" />
    </div> */}
    
    </div> 
    
  </div>
  
}
