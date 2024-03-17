import React from 'react';
import './menu.css';
import {Link } from 'react-router-dom';

function MapAnalysis() {
  return (
    <div className="map-menu col-3">
      <div className="menu-img">
        <img src="" alt=""/>
      </div>
      <div className="context">
        <Link to="map-page">
          <h4>지도분석</h4>
        </Link>
        <p>내 성적에 적합한 대학을 지역벼롤 분석!</p>
      </div>
    </div>
  )
}

export default MapAnalysis;