import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUpPage.css';

function SignUpPage() {
  // 페이지 이동을 위한 useNavigate 사용
  let navigate = useNavigate();

  // 임의의 인증번호 (실제로는 서버에서 처리)
  const verificationCode = '123456';

  // 입력된 정보를 상태로 관리
  let [formData, setFormData] = useState({
    memberName: '',
    memberPhoneNumber: '',
    memberAuthenticationNumber: '',
  });

  // 사용자의 인증 여부를 관리하는 상태 변수
  const [isVerified, setIsVerified] = useState(false);

  // 휴대폰 번호로 인증번호를 요청하는 함수
  function requestVerificationNumber() {
    // 휴대폰 번호가 입력되었는지 확인
    if (!formData.memberPhoneNumber || !/^\d{10,11}$/.test(formData.memberPhoneNumber)) {
      alert('휴대폰 번호를 올바르게 입력해주세요.');
      return;
    }

    // 서버에서 인증번호를 전송하도록 수정 (실제로는 서버에서 처리)
    alert(`휴대폰 번호로 인증번호가 전송되었습니다. (임의의 인증번호: ${verificationCode})`);
  }

  // 사용자 입력 값이 변경될 때 호출되는 함수
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // 인증번호 확인 버튼 클릭 시 호출되는 함수
  function handleVerification() {
    if (formData.memberAuthenticationNumber === verificationCode) {
      setIsVerified(true);
      alert('인증에 성공하셨습니다!'); // 인증 성공 메시지 표시
    } else {
      setIsVerified(false);
      alert('인증번호를 다시 확인해주세요.'); // 인증 실패 시 메시지 표시
    }
  }

  // 폼 제출 시 호출되는 함수
  function handleSubmit() {
    // 폼 유효성 검사
    if (!isVerified) {
      alert('인증을 완료해주세요.');
      return;
    }

    // 서버 URL
    const apiUrl = 'http://orion.mokpo.ac.kr:8482/api/members/save';

    // 서버에 POST 요청 보내기
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // 서버 응답에 따른 처리
        console.log('서버 응답:', data);
        if (data.success) {
          navigate('/signup2'); // 성공 시 다음 페이지로 이동
        } else {
          alert('회원가입 실패. 다시 시도해주세요.');
        }
      })
      .catch(error => {
        // 네트워크 오류 또는 서버에서 반환한 에러 처리
        console.error('회원가입 동작에 문제가 있습니다:', error.message);
      });
  }

  // 다음 버튼 클릭 시 호출되는 함수
  function handleNextButtonClick() {
    // 필요한 데이터만 추출하여 다음 페이지로 전달
    const { memberName, memberPhoneNumber } = formData;

    // 인증 여부를 확인하지 않고 다음 페이지로 이동
    navigate('/signup2', { state: { memberName, memberPhoneNumber } });
  }

  return (
    <div className="signUpPage">
      <div className="mainBar">
        <div className="mainLogo" />
      </div>
      <form onSubmit={handleSubmit} action='http://orion.mokpo.ac.kr:8482/api/members/save'>
        <div className="formGroup">
          <div className="signUpFormGroup">
            <h2>UNIform</h2>
            <input
              type="text"
              name="memberName"
              placeholder="이름"
              value={formData.memberName}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="verificationNumberGroup">
            <input
              type="tel"
              name="memberPhoneNumber"
              placeholder="전화번호 (-를 제외한 숫자만 입력해주세요)"
              value={formData.memberPhoneNumber}
              onChange={handleChange}
              autoComplete="off"
              pattern="[0-9]{10,11}"
              required
            />
            <button
              type="button"
              className="verificationNumberButton"
              onClick={requestVerificationNumber}
            >
              인증번호 요청
            </button>
          </div>
          <div className="confirmNumberGroup">
            <input
              type="text"
              name="memberAuthenticationNumber"
              placeholder="인증번호 입력"
              value={formData.memberAuthenticationNumber}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <button
              type="button"
              className="confirmationButton"
              onClick={handleVerification}
            >
              인증확인
            </button>
          </div>
        </div>
        <button type="submit" onClick={handleNextButtonClick} className="nextButton">
          다음
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;