import React, {useMemo, useState} from 'react';
import { postStatus, getStatus } from '../../../api/FirestoreAPIs';
import "./index.scss";
import ModalComponent from "../Modal";
import PostCard from '../PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

function PostStatus() {
  let userEmail=JSON.parse(localStorage.getItem("user"));
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus]=useState("");
  const [AllStatuses,setAllStatus]=useState([]);
 
  const sendStatus= async()=>{
    let object={
      status:status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail.email
      
    }
    
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
    
  };
  useMemo(()=>{
    getStatus(setAllStatus);
  },[]);
  console.log(AllStatuses);
  return (
    <div className='post-status-main'>
    <div className="post-status"  >  
     <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a Post</button> 
     
    </div>
    
    <ModalComponent setStatus={setStatus} modalOpen={modalOpen} sendStatus={sendStatus} setModalOpen={setModalOpen} status={status} />
    <div>
      {AllStatuses.map((posts)=>{
        return <PostCard posts={posts}/>

      })}
    </div>
    </div>
  )
}

export default PostStatus