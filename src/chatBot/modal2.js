import React from 'react';
import './modal.css';

const Modal2 = ({ closeModal }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>교과활동 추천 목록</h2>
          <button className="closeButton" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          <p>다음은 교과활동 추천 목록입니다!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal2;