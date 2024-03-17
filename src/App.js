import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllAnalysis from './menu/allAnalysis.js';
import MapAnalysis from './menu/mapAnalysis.js';
import ChatBot from './menu/chatBot.js';
import FocusAnalysis from './menu/focusAnalysis.js';
import MyPage from './myPage/myPage.js';

function App() {
  return (
    <div className="App">
      
      <div className="bar" />
      <div className="logo" />
      <div className="mypage-btn">
        <Link to="login">
          로그인/마이페이지
        </Link>
      </div>
      <Routes>
        <Route path="/" element={
            <div>
              <div className="menu-container">
                <FocusAnalysis></FocusAnalysis>
                <AllAnalysis></AllAnalysis>
                <MapAnalysis></MapAnalysis>
                <ChatBot></ChatBot>
              </div>
            </div>   
          }/>
      </Routes>
      
    </div>
  );
}

export default App;
