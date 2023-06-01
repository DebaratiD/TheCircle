import React ,{useState} from 'react';
import "../Sass/chatContainer.scss";
import userIcon from '../pictures/user.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatMessage from './ChatMessage';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';

function ChatContainer() {
    const [message, setMessage]= useState(null);
    const [openEmojiBox,setOpenEmojiBox]=useState(false);
    return (
        <div className="chat-container">
            <div className="chat-container-header">
                <div className="chat-user-info">
                    <div className="chat-user-img">
                        <img src={userIcon} alt="" />
                    </div>
                    <p><b>John Cena</b></p>
                </div>
                <div className="chat-header-container-btn">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="chat-display-container">
                <ChatMessage message="hi! how are you?" time="03-05-2023"/>
                <ChatMessage message="hi! how are you?" time="03-05-2023"/>
                <ChatMessage message="hi! how are you?" time="03-05-2023"/>
                <ChatMessage message="hi! how are you?" time="03-05-2023"/>

            </div>
            
            
            <div className="chat-input">
                
            <div className="emoji-picker-react">
            {openEmojiBox && (<Picker 
              onEmojiClick={(event,emojiObject) => setMessage(message + emojiObject.emoji)}/>)}
            </div>
            
                <div className="chat-input-btn">
                <InsertEmoticonIcon onClick={()=>setOpenEmojiBox(!openEmojiBox)}/>
                <AttachFileIcon/>
                </div>
                <form>
                    <input 
                    type="text" 
                    placeholder="Type a Message" 
                    value={message} 
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    />
                </form>
                <div className="chat-input-send-btn">
                  <SendIcon/>   
                </div>
            </div>
        </div>
    )
}

export default ChatContainer