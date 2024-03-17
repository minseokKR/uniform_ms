import React from 'react';
import './menu.css';
import {Link } from 'react-router-dom';


function AllAnalysis() {
  return (
    <div className="all-menu col-3">
      <div className="menu-img">
        <img src="" alt=""/>
      </div> 
      <div className="context">
        <Link to="all-page">
          <h4>전체분석</h4>
        </Link>
        
        <p>내 성적에 적합한 대학을 모두 분석!</p>
      </div>
    </div>
      
  )
}

export default AllAnalysis;