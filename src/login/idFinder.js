import React, { useState } from 'react';
import './loginPage.css';

function IdFinder() {
    // 사용자 입력 값과 상태 업데이트 함수
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
    });

    // 코드에 설정한 값
    const predefinedName = '홍길동';
    const predefinedPhoneNumber = '01055558888';
    const predefinedId = 'test1234';

    // 사용자 입력 값 변경 시 상태 업데이트
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    // 아이디 찾기 함수
    function findId() {
        // 사용자가 입력한 값
        const { name, phoneNumber } = formData;

        // 입력된 값과 코드에 설정한 값을 비교하여 아이디를 찾음
        if (name === predefinedName && phoneNumber === predefinedPhoneNumber) {
            return predefinedId;
        } else {
            return null;
        }
    }

    // 아이디 찾기 버튼 클릭 시 실행되는 함수
    function handleSubmit(e) {
        e.preventDefault(); // 폼 제출 방지

        // 아이디 찾기 함수 호출
        const foundId = findId();

        if (foundId) {
            alert(`찾은 아이디는 ${foundId}입니다!`);

            // 아이디를 찾은 후에 입력 폼 초기화
            setFormData({
                name: '',
                phoneNumber: '',
            });
        } else {
            alert('아이디를 찾을 수 없습니다.');
        }
    }

    return (
      <div className="loginPage">
        <div className="mainBar">
            <div className="mainLogo" />
        </div>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <div className="idFindFormGroup">
            <h2>UNIform</h2>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="이름"
              value={formData.name}
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
        <button type="submit" className="idFindButton">
          아이디 찾기
        </button>
      </form>
    </div>
    );
}

export default IdFinder;