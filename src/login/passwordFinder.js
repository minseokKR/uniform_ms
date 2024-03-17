import React, { useState } from 'react';
import './loginPage.css';

function PasswordFinder() {
  // 사용자 입력 값과 상태 업데이트 함수
  const [formData, setFormData] = useState({
    userId: '',
    phoneNumber: '',
  });

  // 코드에 설정한 값
  const predefinedUserId = 'test123';
  const predefinedPhoneNumber = '01055558888';
  const predefinedPassword = 'test1234';

  // 사용자 입력 값 변경 시 상태 업데이트
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // 패스워드 찾기 함수
  function findPassword() {
    // 사용자가 입력한 값
    const { userId, phoneNumber } = formData;

    // 입력된 값과 코드에 설정한 값을 비교하여 패스워드를 찾음
    if (userId === predefinedUserId && phoneNumber === predefinedPhoneNumber) {
      return predefinedPassword;
    } else {
      return null;
    }
  }

  // 패스워드 찾기 버튼 클릭 시 실행되는 함수
  function handleSubmit(e) {
    e.preventDefault(); // 폼 제출 방지

    // 패스워드 찾기 함수 호출
    const foundPassword = findPassword();

    if (foundPassword) {
      alert(`찾은 패스워드는 ${foundPassword}입니다!`);

      // 패스워드를 찾은 후에 입력 폼 초기화
      setFormData({
        userId: '',
        phoneNumber: '',
      });
    } else {
      alert('패스워드를 찾을 수 없습니다.');
    }
  }

  return (
    <div className="loginPage">
        <div className="mainBar">
            <div className="mainLogo" />
        </div>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <div className="passwordFindFormGroup">
            <h2>UNIform</h2>
            <input
              type="text"
              name="userId"
              className="userId"
              placeholder="아이디"
              value={formData.userId}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="전화번호 (-를 제외한 숫자만 입력해주세요)"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="passwordFindButton">
          비밀번호 찾기
        </button>
      </form>
    </div>
  );
}

export default PasswordFinder;