import React ,{useState} from 'react';
import "../../Sass/chatContainer.scss";
import userIcon from '../../pictures/user.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatMessage from './ChatMessage';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';

function ChatContainer({currentUser}) {
    const [message, setMessage]= useState("");
    const [openEmojiBox,setOpenEmojiBox]=useState(false);
    return (
        <div className="chat-container">
            <div className="chat-container-header">
                <div className="chat-user-info">
                    {/* <div className="chat-user-img">
                        <img src={currentUser.photoURL} alt="" />
                    </div> */}
                    <p><b>{currentUser.name}</b></p>
                </div>
                <div className="chat-header-container-btn">
                <MoreHorizIcon/>
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
              onEmojiClick={(emojiObject,event) => setMessage(message + emojiObject.emoji)}/>)}
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