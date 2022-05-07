import React, { useState } from 'react';
import './ModalApp.css';
import ModalNft from './ModalNft';
import ethereum from './nft2.png'

function ModalAppNft() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div >
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        <img className='modal-img-button' src={ethereum} alt='/' />
      </button>
      <ModalNft  
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default ModalAppNft;