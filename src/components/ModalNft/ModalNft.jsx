import React from 'react';
import ethereum from './nft2.png'

const ModalNft = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='modal-img' src={ethereum} alt='/' />
        <div className='modalRight'>
          <p style={{cursor: 'pointer'}} className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Do you want </p>
            <h1>to get minted?</h1>
            <p>send us your proyects to admin@admin.com</p>
          </div>
          <div className='btnContainer'>
            <button style={{cursor: 'pointer'}} onClick={onClose} className='btnPrimary'>
              <span className='bold'>CLOSE</span>
            </button>
            {/* <button className='btnOutline'>
              <span className='bold'></span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNft;