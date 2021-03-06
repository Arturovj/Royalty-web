import React, { useState } from 'react';
import './ModalApp.css';
import Modal from './Modal';

function ModalApp() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div >
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        <i class="fa fa-check fa-3x" aria-hidden="true"></i>
      </button>
      <Modal  
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default ModalApp;