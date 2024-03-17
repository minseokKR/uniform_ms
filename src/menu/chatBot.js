import React from 'react';
import './menu.css';
import {Link } from 'react-router-dom';

function ChatBot() {
  return (
    <div className="chat-menu col-3">
      <div className="menu-img">
        <img src="" alt=""/>
      </div>
      <div className="context">
        <Link to="chatBot">
          <h4>챗봇</h4>
        </Link>
        <p>자기소개서 분석, 수정 및 활동, 공모전 추천</p>
      </div>
    </div>
  )
}

export default ChatBot;