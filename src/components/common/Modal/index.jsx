import React from 'react';
import {Modal, Button} from 'antd';
import "./index.scss"

const ModalComponent = ({modalOpen,setModalOpen,sendStatus,setStatus,status,isEdit,updateStatus}) => {
  
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false)}}
        onCancel={() => {
          setStatus("");
          setModalOpen(false)}}
        footer={[
          <Button key="submit" onClick={isEdit?updateStatus:sendStatus} type= "primary" disabled={status.length > 0 ? false:true}> {isEdit?'Update':'Post'}
          </Button>
        ]}
      >
        <input className='modal-input' placeholder='What do you want to talk about' onChange ={(event)=>setStatus(event.target.value)} value={status}/>
       

      </Modal>
     
    </>
  );
};

export default ModalComponent;