import './myPage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import user from './user.png';
import schoolData from './schools';
import styled from 'styled-components';
import Record from './record.js';
import Award from './award.js';

function MyPage () {

  const navigate = useNavigate();

  let [정보, 정보변경] = useState({
    name : '',
    password : '',
    phoneNumber : '',
  });

  // 첫 페이지 로드시 서버 데이터 가져오기
  useEffect( () => {
    axios.get('http://127.0.0.1:8000/auth/signup/').then((결과) => {
      console.log(결과.data);
      정보변경({
        ...정보,

      })
    })
    .catch(() => {
      console.log('에러 발생');
    })
  }, []);


  let changeNumber = (e) => {
    정보변경({
      ...정보,
      phoneNumber: e.target.value
    });
    console.log(정보)
  }

  let changePassword = (e) => {
    정보변경({
      ...정보,
      password : e.target.value
    });
    console.log(정보)
  }

  // 학교정보
  let [schoolInfo, setSchoolInfo] = useState('');
  // 전화번호 정보
  let [numberInfo, setNumberInfo] = useState('');

  // 수정버튼 클릭시 입력값 프로필에 추가
  function editProfile(a,b){
    setSchoolInfo(a)
    setNumberInfo(b)
  }



  //===========================
  //학교 검색기능 
  //=========================== 

  // 학교 목록 배열
  let [schools, setSchool] = useState(schoolData.university);

  // 검색어 상태
  let [searchSchool, setSearchSchool] = useState('');
  // 검색어 입력값 포함된 데이터 리스트
  let [filterSchool, setFilterSchool] = useState([]);

  // 검색어 입력시 호출 함수
  let handleSearchChange = (e) => {
    let input = e.target.value;
    setSearchSchool(input);

    const regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterSchool(
      schools.filter((school) => {
        return (
          regex.test(input) &&
          school.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );

  }

  // 검색어 입력 값을 취소
  let handleSearchCancel = () => {
    setSearchSchool('');
    setFilterSchool([]);
  }

  
  let newSchools = schools.filter((a) => {
    return a.name.includes(searchSchool)
  });

  useEffect(() => {
    let schoolTitles = document.querySelectorAll('.shool-list h4');
    
    schoolTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchSchool, `<span style="background-color: orange">${searchSchool}</span>`);
      htmlElement.innerHTML = title;
    });
  }, []);


  // 프로필 수정폼 state
  let [checkProfile, setCheckProfile] = useState(false); 
  // 프로필 수정버튼 상태
  let [editButton, setEditButton] = useState(true);
  // 프로필 정보창
  let [viewProfile, setViewProfile] = useState(true);

  // 프로필 수정버튼 클릭시 버튼 on/off
  // function toggleBtn() {
  //   const btn = document.getElementById('btn');

  //   if(editButton == true) {
  //     btn.style.display = 'block';
  //   }
  //   else if(editButton == false) {
  //     btn.style.display = 'none';
  //   }

  // }


  return (
    <div>
      
      <div className='sidebar'>
        <div className='sidebar-tab'>
          <i className='fas fa-home'></i>
          <span onClick={() => navigate('/')}>홈</span>
        </div>
        <div className='sidebar-tab'>
          <span>비밀번호변경</span>
        </div>
        <div className='sidebar-tab'>
          <Link to="leave">
          <p className="leave">회원탈퇴</p>
        </Link>
        </div>
      </div>
        
      <div className='application-main'>
        <main>
          <div className='container-xl px-3 px-md-4 px-lg-5 mt-2'>
            <div className='Layout'>
              <div className='Layout-sidebar'>
                <div className='h-card mt-5'>
                  <div className='profile-box'>
                    <div>
                      <img src={user} alt=''></img>
                    </div>
                    <div>
                      <h1>홍길동</h1>
                    </div>
                  </div>

                  <div>
                    {
                      editButton === true ? <button id='btn' type='button' className='edit-btn' onClick={ () => {
                        setCheckProfile(true);
                        setEditButton(false)
                        setViewProfile(false);
                      }
                        }>내정보 수정</button> : null
                    }
                    
                    {
                      checkProfile ? <Profile
                      정보={정보} 
                      changePassword={changePassword} 
                      changeNumber={changeNumber}
                      searchSchool={searchSchool}
                      handleSearch={handleSearchChange}
                      newSchools={newSchools}
                      setSearchSchool={setSearchSchool}
                      filterSchool={filterSchool}
                      setFilterSchool={setFilterSchool}
                      schoolInfo={schoolInfo}
                      numberInfo={numberInfo}
                      editProfile={editProfile}
                      // toggleBtn={toggleBtn}
                      setEditButton={setEditButton}
                      setCheckProfile={setCheckProfile}
                      setViewProfile={setViewProfile}/> : null
                      
                    }
                  </div>

                  {
                    viewProfile ?
                      <div>
                        <i class="fas fa-school"></i>
                        <p>{schoolInfo}</p>

                        <i className="fas fa-mobile-alt"></i>
                        <p>{numberInfo}</p>
                      </div> 
                  : null
                  }
                </div>
              </div>

              <div className='Layout-main'>

                <div className='my-score'>
                  <h4>📊나의 성적</h4>
                  <Record></Record>

                </div>

                <div className='my-award'>
                  <h4>🏆수상 기록</h4>
                  <Award></Award>
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>


      <footer className='footer'>
        <p>&copy; 2023 UniForm. All Rights Reserved.</p>
      </footer>
  </div>
  )
}

        

// 검색창 스타일
const StyledSearchBox = styled.div`
background-color: #f0f0f0;
border: 1px solid #ccc;
padding: 10px;
`;




// 수정버튼 클릭시 폼창 사라지게
// function formClose() {
//   const form = document.getElementById('form');
  
//   if(form.style.display !== 'none') {
//     form.style.display = 'none';
//   }


// }



// 내정보 수정 폼
function Profile(props) {
  return (
    <div className="grid">
      <form id='form' className='form-container' action='/mypage' method='post'>
        {/* <div className="password">
          <p className="title">비밀번호</p>
          <input 
            type='password' 
            name="password"
            value={props.정보.password}
            className="input" 
            placeholder='password' 
            onChange={props.changePassword}>
          </input>
        </div> */}


        <div className='school-search'>
          <div>
            <i class="fas fa-school"></i>
            <input 
              id='search'
              type='text' 
              value={props.searchSchool}
              placeholder='학교입력'
              onChange={props.handleSearch}
            ></input>
          </div>


          {props.filterSchool?.length > 0 && (
            //검색창 박스
            <StyledSearchBox>
              {props.filterSchool?.map((school) => (
                //검색창 데이터들
                <div key={school.id} mt='10px'>
                  {school.name.toLowerCase().includes(props.searchSchool.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchSchool(school.name);
                    props.setFilterSchool([]);}}>
                    {school.name
                      .split(new RegExp(`(${props.searchSchool})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchSchool.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    school.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}

        </div>


        <div className="number">
          <div>
            <i className="fas fa-mobile-alt"></i>
            <input
              type='text' 
              name="phoneNumber"
              value={props.정보.phoneNumber}
              className="input" 
              placeholder='number' 
              onChange={props.changeNumber}>
            </input>
          </div>
          
        </div>

   
        <button type='button' className="complete-button" onClick={() => {
          // // 수정 완료시 post 요청후 페이지 새로고침
          // axios.post('url', {password: '1234', phoneNumber: '010'}).then(() => {
          //   // 페이지 재렌더링
          // })
          // .catch(() => {
          //   console.log('에러 발생');
          // })
          props.editProfile(props.searchSchool,props.정보.phoneNumber)
          props.setViewProfile(true);
          props.setCheckProfile(false);
          props.setEditButton(true);

          }}>수정
        </button>

        <button type='button' className="close-button" onClick={() => {
          // formClose();
          props.setCheckProfile(false);
          props.setEditButton(true);
          props.setViewProfile(true);

        }
          }>
          닫기
        </button>
      </form>
    </div>
  )
}


export default MyPage;