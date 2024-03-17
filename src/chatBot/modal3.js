import React from 'react';
import './modal.css';

const Modal3 = ({ closeModal }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>로딩 중..</h2>
          <button className="closeButton" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          <p>자기소개서를 생성 중입니다! 잠시만 기다려주세요!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal3;