import React from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { Button, Modal, Progress } from 'antd';
import "./index.scss"
import { useState } from 'react';

const ModalComponent = ({modalOpen,setModalOpen,sendStatus,
  setStatus,status,isEdit,updateStatus, postImage, setPostImage, 
  uploadPostImage, currentPost, setCurrentPost}) => {
  
    const [progress, setProgress] = useState(0);
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false)
          setPostImage("")
          setCurrentPost({})}}
        onCancel={() => {
          setStatus("");
          setModalOpen(false)
          setPostImage("")
          setCurrentPost({})}}
        footer={[
          <Button key="submit" onClick={isEdit?updateStatus:sendStatus} type= "primary" disabled={status.length > 0 ? false:true}> {isEdit?'Update':'Post'}
          </Button>
        ]}
      >

        <div className='posts-body'>
        <textarea rows={3} cols={3} className='modal-input' placeholder='What do you want to talk about' onChange ={(event)=>setStatus(event.target.value)} value={status}/>
        
        {progress === 0 || progress === 100? (<></>):(
        <div className='progress-bar'>
          <Progress precent={progress} size="small" />
        </div>
        )}
        {postImage?.length>0 || currentPost?.postImage?.length ?
        <img className="preview-image" src={postImage || currentPost?.postImage} alt='postImage'/>:<></>}
        </div>
        <label for="pic-upload">
          <AiOutlinePicture size="35" className='picture-icon'/>
        </label>
        <input id='pic-upload' type={'file'} hidden onChange={(event)=>uploadPostImage(event.target.files[0], setPostImage, setProgress)}/>
        
      </Modal>
     
    </>
  );
};

export default ModalComponent;