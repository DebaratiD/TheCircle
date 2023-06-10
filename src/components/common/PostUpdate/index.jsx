import React, {useState} from 'react';
import "./index.scss";
import ModalComponent from "../Modal";

function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='post-status-main'>
        <div className="post-status">
      <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a Post</button>
     
    </div>
    <ModalComponent modalopen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default PostStatus