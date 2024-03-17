import React from 'react';
import './menu.css';
import {Link } from 'react-router-dom';

function FocusAnalysis() {
  return (
    <div className="focus-menu col-3">
      <div className="menu-img">
        <img src="" alt=""/>
      </div>
      <div className="context">
        <Link to="focusPage">
          <h4>집중분석</h4>
        </Link>
        <p>원하는 대학을 집중적으로 분석!</p>
      </div>
    </div>
    
  )
}

export default FocusAnalysis;