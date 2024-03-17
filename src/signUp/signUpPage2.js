import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUpPage.css';
import { useLocation } from 'react-router-dom';

function SignUpPage2() {
  // 페이지 이동을 위한 useNavigate 사용
  let navigate = useNavigate();
  // 현재 location에서 state 가져오기
  let location = useLocation();
  // location 객체에서 state 속성을 추출하여 변수에 할당
  let { state } = location;

  // state에 있는 데이터 사용
  let [formData, setFormData] = useState({
    "memberId": "",
    "memberPassword": "",
    "memberPasswordCheck": "",
    "memberName": state ? state.memberName || "" : "",
    "memberPhoneNumber": state ? state.memberPhoneNumber || "" : "",
    "memberAuthenticationNumber": state ? state.memberAuthenticationNumber || "" : "",
  });
 
  // JSON 데이터를 문자열로 변환하여 출력 (콘솔 로그에)
  console.log(JSON.stringify(formData));

  // 사용자의 인증 여부를 관리하는 상태 변수
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  // 사용자 입력 값이 변경될 때 호출되는 함수
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // 만약 변경된 값이 memberPasswordCheck 필드라면, 비밀번호 일치 여부를 검사하고 상태 업데이트
    if (e.target.name === 'memberPasswordCheck') {
      // 현재 비밀번호와 비밀번호 확인 값이 일치하는지 여부를 상태로 관리
      setIsPasswordMatch(formData.memberPassword === e.target.value);
    }
  }

  // 입력값 유효성 검사 함수
  function validateInput() {
    const userIdPattern = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    let isValid = true;

    // 아이디 유효성 검사
    if (!userIdPattern.test(formData.memberId)) {
      alert('아이디는 영문, 숫자, 특수문자 중 2가지 이상의 조합으로 8글자 이상이어야 합니다.');
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (!passwordPattern.test(formData.memberPassword)) {
      alert('비밀번호는 영문, 숫자, 특수문자 중 2가지 이상의 조합으로 8글자 이상이어야 합니다.');
      isValid = false;
    }

    return isValid;
  }

  // 중복 확인 함수
  function handleCheckDuplicate() {
    // 중복 확인을 수행하지 않고 바로 중복이 없다고 가정
    setIsUserIdAvailable(true);

    // 서버로 중복 확인 요청
    // fetch('http://orion.mokpo.ac.kr:8482/api/members/save', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // 현재 입력된 아이디를 서버로 전송
    //   body: JSON.stringify({
    //     userId: formData.memberId,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // 서버에서 받은 데이터를 기반으로 중복 여부 처리
    //     if (data.isDuplicate) {
    //       // 중복된 아이디일 경우
    //       setIsUserIdAvailable(false);
    //       alert('입력하신 아이디는 이미 존재합니다.');
    //     } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(formData.memberId)) {
    //       // 아이디 형식 불일치 시
    //       setIsUserIdAvailable(false);
    //       alert('아이디는 영문, 숫자, 특수문자 중 2가지 이상의 조합으로 8글자 이상이어야 합니다.');
    //     } else {
    //       // 중복 없고 형식도 일치하는 경우
    //       setIsUserIdAvailable(true);
    //       alert('사용 가능한 아이디입니다!');
    //     }
    //   })
    //   .catch(error => {
    //     // 중복 확인 중 오류 발생 시 처리
    //     console.error('중복 확인 중 오류 발생:', error.message);
    //   });
  }

  // 회원가입 제출 함수
  function handleSubmit(e) {
    e.preventDefault();

    // 비밀번호 일치 여부 및 입력 값 유효성 검사
    if (isPasswordMatch && validateInput()) {

      // 서버로 회원가입 정보 전송
      fetch('http://orion.mokpo.ac.kr:8482/api/members/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "memberId": formData.memberId,
          "memberPassword": formData.memberPassword,
          "memberPasswordCheck": formData.memberPasswordCheck,
          "memberName": formData.memberName,
          "memberPhoneNumber": formData.memberPhoneNumber,
          "memberAuthenticationNumber": formData.memberAuthenticationNumber
        }),
      })
        .then(response => response.text())
        .then(data => {
          try {
            const jsonData = JSON.parse(data);
            if (jsonData.success) {
              // 회원가입 성공 시 알림
              alert('회원가입 성공! 입시정보왕이 되어 보세요!');

              // 입력 폼 초기화
              setFormData({
                "memberId": '',
                "memberPassword": '',
                "memberPasswordCheck": '',
              });

              // 메인 페이지롤 이동
              navigate('/');
            } else {
              // 회원가입 실패 시 알림
              alert('회원가입 실패. 다시 시도해주세요.');
            }
          } catch (error) {
            // 서버 응답이 올바른 JSON 형식이 아닐 경우 오류 처리
            console.error('서버 응답이 올바른 JSON 형식이 아닙니다:', error.message);
            console.log('서버 응답 데이터:', data);
          }
        })
    }
  }

  return (
    <div className="signUpPage">
      <div className="mainBar">
        <div className="mainLogo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <div className="idPasswordGroup">
            <h2>UNIform</h2>
            <div className="confirmIdGroup">
              <input
                type="text"
                name="memberId"
                placeholder="아이디"
                value={formData.memberId}
                onChange={handleChange}
                autoComplete="off"
              />
              <button type="button" onClick={handleCheckDuplicate}>
                중복확인
              </button>
            </div>
            <input
              type="password"
              name="memberPassword"
              placeholder="비밀번호"
              value={formData.memberPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              name="memberPasswordCheck"
              placeholder="비밀번호 확인"
              value={formData.memberPasswordCheck}
              onChange={handleChange}
            />
            {!isPasswordMatch && (
              <div style={{ color: 'black', fontSize: 11 }}>
                비밀번호가 일치하지 않습니다. 다시 확인해주세요.
              </div>
            )}
            <button type="submit" className="signUpButton">
              회원가입하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage2;