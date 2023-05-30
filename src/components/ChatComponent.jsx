import React from 'react';
import "../Sass/ChatComponent.scss"
import Sidebar from './Sidebar';

export default function ChatComponent() {
  return <div className='chatPage'>
    <div className="chatPage-container">
    <Sidebar/>
    </div> 
  </div>
  
}
