import React, { useState } from 'react'
import "./index.scss"
import { Button, Modal, Progress } from 'antd';

export default function FileUploadModal({ modalOpen, 
    setModalOpen, getImage, uploadImage, currentImage, progress, setUploadInput, uploadInput}) {
        const hideInput=()=>{
            setUploadInput(false);
            uploadImage();
        }
  return (
    <div>
      <Modal
        title="Add/Change Profile Image"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button disabled={currentImage.name?false:true} key="submit" type="primary" onClick={hideInput}>
                Upload Profile Picture
            </Button>
        ]}
      >
        <div className='image-upload-main'>
            <p>{currentImage.name}</p>
            {uploadInput? 
            <><label className="upload-btn" for="image-upload">Add an Image</label>
             <input hidden id="image-upload" type='file' onChange={getImage}/></>:<Progress precent={progress} size="small" />}
        </div>
        
      </Modal>
    </div>
  )
}