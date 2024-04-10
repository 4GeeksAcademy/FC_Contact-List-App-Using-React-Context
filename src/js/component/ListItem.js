import React from 'react';

const Modal = ({ show, onClose, onConfirm, children }) => {
  return (
    show && (
      <div className="modal">
        <div className="modal-content">{children}</div>
        <button onClick={onClose}>Close</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    )
  );
};

export default Modal;