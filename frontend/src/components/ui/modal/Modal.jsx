import React from 'react';
import ButtonAction from '../buttonAction/ButtonAction';
import IconAdd from "../../icons/IconAdd";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <>
{isOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <ButtonAction IconComponent={IconAdd} label="Close" clickFunction={closeModal} tooltip="Close" className="closeModal"/>
      <div className="modal-body">{children}</div>
    </div>
  </div>
)}
    </>
  );
};

export default Modal;
