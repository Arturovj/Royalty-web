import React from 'react';
import nft from './nft1.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='modal-img' src={nft} alt='/' />
        <div className='modalRight'>
          <p style={{cursor: 'pointer'}} className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Do you want </p>
            <h1>to get VERIFIED?</h1>
            <p>send us your last trimester statement to admin@admin.com</p>
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

export default Modal;