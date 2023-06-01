import React from 'react';
import "../Sass/ChatComponent.scss"
import Sidebar from './Sidebar';
import circleIcon from '../pictures/circleIcon.png'
import ChatContainer from './ChatContainer';

export default function ChatComponent() {
  return <div className='chatPage'>
    <div className="chatPage-container">
    <Sidebar/>
    <ChatContainer/>
    {/* <div className="chatPage-bg">
      <img src={circleIcon} alt="" />
    </div> */}
    
    </div> 
    
  </div>
  
}
