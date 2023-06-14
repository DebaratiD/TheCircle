import React, {useState} from 'react';
import { postStatus } from '../../../api/FirestoreAPIs';
import "./index.scss";
import ModalComponent from "../Modal";

function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus]=useState("");
  const sendStatus= async()=>{
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  };
  return (
    <div className='post-status-main'>
    <div className="post-status"  >  
     <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a Post</button> 
     
    </div>
    
    <ModalComponent setStatus={setStatus} modalOpen={modalOpen} sendStatus={sendStatus} setModalOpen={setModalOpen} status={status} />
    </div>
  )
}

export default PostStatus