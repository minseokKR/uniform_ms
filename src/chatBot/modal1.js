import React, { useState } from 'react';
import './modal.css';

// Modal1 컴포넌트 정의
const Modal1 = ({ closeModal }) => {
  // 현재 페이지를 관리할 상태 변수를 선언
  const [currentPage, setCurrentPage] = useState(0);

  // 이미지 데이터를 정의
  const images = [
    './images/swHacking.jpg',
    './images/cloudSw.jpg',
    './images/swProject.png',
    './images/ai.jpg',
    './images/swHacking.jpg',
    './images/cloudSw.jpg',
    './images/swProject.png',
    './images/ai.jpg',
    './images/swHacking.jpg',
    './images/cloudSw.jpg',
  ];

  // 이미지 호버 이벤트를 처리하는 함수
  const handleImageHover = (e) => {
    e.target.classList.toggle('hovered');
  };

  // 현재 페이지에 해당하는 이미지를 렌더링하는 함수
  const renderImages = () => {
    // 현재 페이지의 이미지 범위 계산
    const startIndex = currentPage * 2;
    const endIndex = startIndex + 2;

    // 현재 페이지에 해당하는 이미지를 매핑하여 렌더링
    return images.slice(startIndex, endIndex).map((image, index) => (
      <div key={index} className="imageWrapper">
        <img
          src={image}
          alt={`이미지 ${index + startIndex + 1}`}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHover}
        />
      </div>
    ));
  };

  // 이전 페이지로 이동하는 함수
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // 다음 페이지로 이동하는 함수
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>공모전 추천 목록</h2>
          <button className="closeButton" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          {renderImages()}
        </div>
        <div className="pagination">
          {/* 현재 페이지가 0이 아닌 경우에만 이전 버튼을 렌더링 */}
          {currentPage !== 0 && (
            <button onClick={handlePrevPage}>
              {'<'}
            </button>
          )}
          <span>{currentPage + 1} 페이지</span>
          {/* 현재 페이지가 images.length / 2 - 1이 아닌 경우에만 다음 버튼을 렌더링 */}
          {currentPage !== Math.floor(images.length / 2) - 1 && (
            <button onClick={handleNextPage}>
              {'>'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal1;