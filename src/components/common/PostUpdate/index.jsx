import React, {useMemo, useState} from 'react';
import { postStatus, getStatus,updatePost } from '../../../api/FirestoreAPIs';
import "./index.scss";
import ModalComponent from "../Modal";
import PostCard from '../PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import { getUniqueId } from '../../../helpers/getUniqueId';

function PostStatus({currentUser}) {
  let userEmail=JSON.parse(localStorage.getItem("user"));
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus]=useState("");
  const [AllStatuses,setAllStatus]=useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
 
  const sendStatus= async()=>{
    let object={
      status:status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail.email,
      userName: currentUser.name,
      postID: getUniqueId(),
      userID:JSON.parse(localStorage.getItem("user"))?.userID
    }
    
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
    
  };
  const updateStatus=()=>{
    console.log(status);
    updatePost(currentPost.id,status);
    setModalOpen(false);

  }
  const getEditData=(posts)=>{
    setModalOpen(true);
   setStatus(posts?.status);
   setCurrentPost(posts);
   setIsEdit(true);
  }
  useMemo(()=>{
    getStatus(setAllStatus);
  },[]);
  //console.log(AllStatuses);
  return (
    <div className='post-status-main'>
    <div className="post-status"  >  
     <button className="open-post-modal" onClick={() => {
      setModalOpen(true);
      setIsEdit(false);
      }}>Start a Post</button> 
     
    </div>
    
    <ModalComponent setStatus={setStatus} modalOpen={modalOpen} sendStatus={sendStatus} setModalOpen={setModalOpen} status={status} isEdit={isEdit} updateStatus={updateStatus}/>
    <div>
      {AllStatuses.map((posts)=>{
        return <PostCard posts={posts} id={posts.userID} getEditData={getEditData}/>

      })}
    </div>
    </div>
  )
}

export default PostStatus