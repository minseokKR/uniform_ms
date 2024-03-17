import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

function LoginPage() {
  // 페이지 이동하는 useNavigate 사용
  const navigate = useNavigate();
  // state 사용해서 입력 정보 관리
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    rememberId: false,
  });

  // 입력 값에 대한 상태를 업데이트하는 함수
  function handleChange(e) {
    // 체크박스인 경우 rememberId만 업데이트
    if (e.target.name === 'rememberId') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      // 그 외의 경우 해당 필드의 값을 업데이트
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

// 로그인 폼을 제출할 때 호출되는 함수
function handleSubmit(e) {
  e.preventDefault(); // 이벤트의 기본 동작을 막는 메서드

  // 임의로 지정 (나중에 DB 사용해야 할 부분)
  const appointUser = {
    userId: 'testuser12',
    password: 'test1234',
  };

  if (formData.userId === appointUser.userId && formData.password === appointUser.password) {
    // 아이디와 비밀번호가 일치할 때
    const isSuccess = alert('로그인 성공! 오늘 하루도 화이팅!');

    if (isSuccess) {
      // 성공하면 아이디와 비밀번호 초기화
      setFormData({
        userId: '',
        password: '',
      });
    }
  } else if (formData.userId === appointUser.userId) {
    // 아이디만 일치할 때 알림창
    alert('비밀번호를 다시 확인해주세요.');
  } else {
    // 아이디도 일치하지 않을 때 알림창
    alert('입력하신 정보를 다시 확인해주세요.');
  }

  // 서버의 로그인 엔드포인트 URL
  const apiUrl = 'https://127.0.0.1:8000/login';

  // 서버에 로그인 요청 보내기
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: formData.userId,
      password: formData.password,
    }),
  })
    .then(response => {
      // 응답이 성공적이지 않으면 에러 알림 띄움
      if (!response.ok) {
        throw new Error('로그인에 실패했습니다. 다시 시도해주세요.');
      }
      return response.json();
    })
    .then(data => {
      console.log('서버 응답:', data);
      if (data.success) {
        // 로그인이 성공한 경우 화면에 성공 메시지 출력
        const isSuccess = window.confirm('로그인 성공! 오늘 하루도 화이팅!');
        if (isSuccess) {
          // 성공한 경우 입력 폼 초기화
          setFormData({
            userId: '',
            password: '',
          });
        }
      } else {
        // 로그인이 실패한 경우 경고창으로 실패 메시지 출력
        alert('로그인 실패. 다시 확인해주세요.');
      }
    })
    .catch(error => {
      // 네트워크 오류 또는 서버에서 반환한 에러 처리
      console.error('로그인 동작에 문제가 있습니다:', error.message);
    });
}

  return (
    <div className="loginPage">
      <div className="mainBar">
        <div className="mainLogo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <div className="loginFormGroup">
            <h2>UNIform</h2>
            <input
              type="text"
              name="userId"
              className="id"
              placeholder="아이디"
              value={formData.userId}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="loginButton">
          로그인
        </button>
        <div className="belowFormGroup">
          <div className="rememberId">
            <label>
              <input
                type="checkbox"
                name="rememberId"
                checked={formData.rememberId}
                onChange={handleChange}
              />
              아이디 저장
            </label>
          </div>
          <div className="signUpFindGroup">
            <label className="signUp" onClick={() => navigate('/signup')}>
              회원가입
            </label>
            <label className="idFind" onClick={() => navigate('/IdFinder')}>
              아이디 찾기
            </label>
            <label className="passwordFind" onClick={() => navigate('/passwordFinder')}>
              비밀번호 찾기
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;