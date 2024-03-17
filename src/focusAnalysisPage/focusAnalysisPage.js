import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './focusAnalysisPage.css';
import universityData from './university.json';
import styled from 'styled-components';
import Rank from './myRank';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FocusAnalysisResultPage from './focusAnalysisResultPage';

// import { usePostData } from '../myPage/recordUtils.js'; // 파일 경로에 따라 수정

function FocusAnalysisPage() {
  // let [postData, updatePostData] = usePostData();
  // console.log(postData);
  const navigate = useNavigate();
  
  //===========================
  //대학교 검색기능 
  //=========================== 

  // 학교 목록 배열
  let [universityList, setUniversityList] = useState(universityData.university);
  
  // 검색어 상태
  let [searchUniversity1, setSearchUniversity1] = useState('');
  let [searchUniversity2, setSearchUniversity2] = useState('');
  let [searchUniversity3, setSearchUniversity3] = useState('');
  let [searchUniversity4, setSearchUniversity4] = useState('');
  let [searchUniversity5, setSearchUniversity5] = useState('');
  let [searchUniversity6, setSearchUniversity6] = useState('');

  // 검색어 입력값 포함된 데이터 리스트
  let [filterUniversity1, setFilterUniversity1] = useState([]);
  let [filterUniversity2, setFilterUniversity2] = useState([]);
  let [filterUniversity3, setFilterUniversity3] = useState([]);
  let [filterUniversity4, setFilterUniversity4] = useState([]);
  let [filterUniversity5, setFilterUniversity5] = useState([]);
  let [filterUniversity6, setFilterUniversity6] = useState([]);

  
  // 검색어 입력시 호출 함수
  let handleUniversitySearchChange1 = (e) => {
    let input = e.target.value;
    setSearchUniversity1(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity1(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }

  let handleUniversitySearchChange2 = (e) => {
    let input = e.target.value;
    setSearchUniversity2(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity2(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }
  let handleUniversitySearchChange3 = (e) => {
    let input = e.target.value;
    setSearchUniversity3(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity3(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }
  let handleUniversitySearchChange4 = (e) => {
    let input = e.target.value;
    setSearchUniversity4(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity4(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }
  let handleUniversitySearchChange5 = (e) => {
    let input = e.target.value;
    setSearchUniversity5(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity5(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }
  let handleUniversitySearchChange6 = (e) => {
    let input = e.target.value;
    setSearchUniversity6(input);

    let regex = /^[a-zA-Z0-9가-힣]+$/;
    setFilterUniversity6(
      universityList.filter((uni) => {
        return (
          regex.test(input) &&
          uni.name.toLowerCase().includes(input.toLowerCase())
        )
      })
    );
  }

  // let newUniversity1 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity1)
  // });
  // let newUniversity2 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity2)
  // });
  // let newUniversity3 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity3)
  // });
  // let newUniversity4 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity4)
  // });
  // let newUniversity5 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity5)
  // });
  // let newUniversity6 = universityList.filter((a) => {
  //   return a.name.includes(searchUniversity6)
  // });

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity1, `<span style="background-color: orange">${searchUniversity1}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity2, `<span style="background-color: orange">${searchUniversity2}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity3, `<span style="background-color: orange">${searchUniversity3}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity4, `<span style="background-color: orange">${searchUniversity4}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity5, `<span style="background-color: orange">${searchUniversity5}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  useEffect(() => {
    let universityTitles = document.querySelectorAll('.university-list h4');

    universityTitles.forEach((htmlElement) => {
      let title = htmlElement.innerHTML;
      title = title.replace(searchUniversity6, `<span style="background-color: orange">${searchUniversity6}</span>`);
      htmlElement.innerHTML = title;
    });

  }, []);

  // 선택한 학교 state
  // let [selectSchool1, setSelectSchool1] = useState();
  // let [selectSchool2, setSelectSchool2] = useState();
  // let [selectSchool3, setSelectSchool3] = useState();
  // let [selectSchool4, setSelectSchool4] = useState();
  // let [selectSchool5, setSelectSchool5] = useState();
  // let [selectSchool6, setSelectSchool6] = useState();
  // 선택한 학과 state
  let [selectMajor1, setSelectMajor1] = useState();
  let [selectMajor2, setSelectMajor2] = useState();
  let [selectMajor3, setSelectMajor3] = useState();
  let [selectMajor4, setSelectMajor4] = useState();
  let [selectMajor5, setSelectMajor5] = useState();
  let [selectMajor6, setSelectMajor6] = useState();

  // 선택한 학과 입력시 불러올 함수
  let handleMajorChange1 = (e) => {
    setSelectMajor1(e.target.value);
  };
  let handleMajorChange2 = (e) => {
    setSelectMajor2(e.target.value);
  };
  let handleMajorChange3 = (e) => {
    setSelectMajor3(e.target.value);
  };
  let handleMajorChange4 = (e) => {
    setSelectMajor4(e.target.value);
  };
  let handleMajorChange5 = (e) => {
    setSelectMajor5(e.target.value);
  };
  let handleMajorChange6 = (e) => {
    setSelectMajor6(e.target.value);
  };


  // preferredSchool 및 preferredMajor 상태 설정
  let [preferredSchool1, setPreferredSchool1] = useState('');
  let [preferredSchool2, setPreferredSchool2] = useState('');
  let [preferredSchool3, setPreferredSchool3] = useState('');
  let [preferredSchool4, setPreferredSchool4] = useState('');
  let [preferredSchool5, setPreferredSchool5] = useState('');
  let [preferredSchool6, setPreferredSchool6] = useState('');
  let [preferredMajor1, setPreferredMajor1] = useState('');
  let [preferredMajor2, setPreferredMajor2] = useState('');
  let [preferredMajor3, setPreferredMajor3] = useState('');
  let [preferredMajor4, setPreferredMajor4] = useState('');
  let [preferredMajor5, setPreferredMajor5] = useState('');
  let [preferredMajor6, setPreferredMajor6] = useState('');


  // 임시로 일단 로컬스토리지 이용해서 grade 데이터 확인하기
  // 로컬 스토리지에서 데이터 가져오기
  const storedData = JSON.parse(localStorage.getItem('grade'));
  console.log('로컬 스토리지에서 가져온 데이터:',storedData);


  // GET 요청을 보내어 grade 데이터를 받아오는 함수
  let [receivedData, setReceiveData] = useState('');
  
  let receiveGetData = () => {
    axios.get('http://orion.mokpo.ac.kr:8482/api/analysis').then((data) => {
      setReceiveData(data)
    })
    .catch(() => {
      console.log('grade 받아오기 실패')
    })
  }

  
  // 대학입력후 POST 보내기위해 json형태로 새로운 state에 저장


  // 분석시작 누르면 분석 결과페이지로 이동하는 함수
  let moveResult = () => {
    navigate('/focusResultPage')
  }


  // 분석시작후 받은 데이터 리턴값 저장 state
  let [receivedResultData, setReceiveResultData] = useState({
    "school": "전남대학교",
    "major": "컴퓨터공학과",
    "admissionProbability": "72",
    "danger": "2"
});


  // 분석 함수를 실행하는 로직을 useEffect 내부에 이동합니다.
  // //분석 시작 버튼 클릭 시 호출되는 함수
  
  let startAnalysis1 = async () => {
    let analysisObject = {
      preferredSchool: searchUniversity1,
      preferredMajor: selectMajor1,
      grade: storedData["grade"] // "grade" 객체 내의 데이터만 할당
    };
    // analysisObject를 사용하여 분석 수행
    console.log('분석을 시작합니다:', analysisObject);

    // 서버로 POST 요청 보내기
    try {
      let response = await axios.post('http://orion.mokpo.ac.kr:8482/api/analysis/test', analysisObject, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('post 요청 성공', response.data);
      setReceiveResultData(response.data)
      console.log('리턴받은 데이터: ', receivedResultData);

    } catch (error) {
      console.log('post 요청 실패', error);
    }
  };


  // multipleAnalysis 함수가 호출될 때마다 실행되도록 설정

  
  // useEffect(() => {
  //   startAnalysis1();    
  // }, [searchUniversity1, selectMajor1, storedData]);


  // 분석시작 버튼누르면 실행
  let handleAnalysisButtonClick = () => {
    startAnalysis1();
    setViewAnalsis(false);
    setViewResult(true);
    setViewMyGrade(false);
  }







  let startAnalysis2 = () => {
    let analysisObject = {
      preferredSchool: preferredSchool2,
      preferredMajor: preferredMajor2,
      grade: storedData["grade"]
    };
  
  };
  let startAnalysis3 = () => {
    let analysisObject = {
      preferredSchool: preferredSchool3,
      preferredMajor: preferredMajor3,
      grade: storedData["grade"]
    };
    console.log('분석을 시작합니다:', analysisObject);
  };

  let startAnalysis4 = () => {
    let analysisObject = {
      preferredSchool: preferredSchool4,
      preferredMajor: preferredMajor4,
      grade: storedData["grade"]
    };
    console.log('분석을 시작합니다:', analysisObject);
  };

  let startAnalysis5 = () => {
    let analysisObject = {
      preferredSchool: preferredSchool5,
      preferredMajor: preferredMajor5,
      grade: storedData["grade"]
    };
    console.log('분석을 시작합니다:', analysisObject);
  };

  let startAnalysis6 = () => {
    let analysisObject = {
      preferredSchool: preferredSchool6,
      preferredMajor: preferredMajor6,
      grade: storedData["grade"]
    };
    console.log('분석을 시작합니다:', analysisObject);
  };

  // 분석 시작 각 함수들 한번에 실행
  let multipleAnalysis = () => {
    // setPreferredSchool1(searchUniversity1);
    // setPreferredMajor1(selectMajor1);
    // setPreferredSchool2(searchUniversity2);
    // setPreferredMajor2(selectMajor2);
    // setPreferredSchool3(searchUniversity3);
    // setPreferredMajor3(selectMajor3);
    // setPreferredSchool4(searchUniversity4);
    // setPreferredMajor4(selectMajor4);
    // setPreferredSchool5(searchUniversity5);
    // setPreferredMajor5(selectMajor5);
    // setPreferredSchool6(searchUniversity6);
    // setPreferredMajor6(selectMajor6);

    // startAnalysis1()
    // startAnalysis2()
    // startAnalysis3()
    // startAnalysis4()
    // startAnalysis5()
    // startAnalysis6()

  }

  // console.log(searchUniversity1);
  // console.log(selectMajor1);
  // console.log(selectMajor2);


  // 학교학과 등록 페이지 요소 보여주기
  let [viewAnalsis, setViewAnalsis] = useState(true);
  // 분석시작후 결과페이지 요소 보여주기
  let [viewResult, setViewResult] = useState(false);
  // 분석시작시 내 성적보기 버튼 사라지게
  let [viewMyGrade, setViewMyGrade] = useState(true);




  return (
    <div className='focus-table'>
      <div>
        
        {
          viewMyGrade === true ? <Rank className='my-rank'></Rank>
          : null
        }
      </div>

      {
        viewAnalsis === true ?
        <UniInput 
          searchUniversity1={searchUniversity1}
          searchUniversity2={searchUniversity2}
          searchUniversity3={searchUniversity3}
          searchUniversity4={searchUniversity4}
          searchUniversity5={searchUniversity5}
          searchUniversity6={searchUniversity6}
          setSearchUniversity1={setSearchUniversity1}
          setSearchUniversity2={setSearchUniversity2}
          setSearchUniversity3={setSearchUniversity3}
          setSearchUniversity4={setSearchUniversity4}
          setSearchUniversity5={setSearchUniversity5}
          setSearchUniversity6={setSearchUniversity6}
          handleUniversitySearchChange1={handleUniversitySearchChange1}
          handleUniversitySearchChange2={handleUniversitySearchChange2}
          handleUniversitySearchChange3={handleUniversitySearchChange3}
          handleUniversitySearchChange4={handleUniversitySearchChange4}
          handleUniversitySearchChange5={handleUniversitySearchChange5}
          handleUniversitySearchChange6={handleUniversitySearchChange6}
          filterUniversity1={filterUniversity1}
          filterUniversity2={filterUniversity2}
          filterUniversity3={filterUniversity3}
          filterUniversity4={filterUniversity4}
          filterUniversity5={filterUniversity5}
          filterUniversity6={filterUniversity6}
          setFilterUniversity1={setFilterUniversity1}
          setFilterUniversity2={setFilterUniversity2}
          setFilterUniversity3={setFilterUniversity3}
          setFilterUniversity4={setFilterUniversity4}
          setFilterUniversity5={setFilterUniversity5}
          setFilterUniversity6={setFilterUniversity6}
          // selectSchool1={selectSchool1}
          // selectSchool2={selectSchool2}
          // selectSchool3={selectSchool3}
          // selectSchool4={selectSchool4}
          // selectSchool5={selectSchool5}
          // selectSchool6={selectSchool6}
          selectMajor1={selectMajor1}
          selectMajor2={selectMajor2}
          selectMajor3={selectMajor3}
          selectMajor4={selectMajor4}
          selectMajor5={selectMajor5}
          selectMajor6={selectMajor6}
          // setSelectSchool1={setSelectSchool1}
          // setSelectSchool2={setSelectSchool2}
          // setSelectSchool3={setSelectSchool3}
          // setSelectSchool4={setSelectSchool4}
          // setSelectSchool5={setSelectSchool5}
          // setSelectSchool6={setSelectSchool6}
          setSelectMajor1={setSelectMajor1}
          setSelectMajor2={setSelectMajor2}
          setSelectMajor3={setSelectMajor3}
          setSelectMajor4={setSelectMajor4}
          setSelectMajor5={setSelectMajor5}
          setSelectMajor6={setSelectMajor6}
          handleMajorChange1={handleMajorChange1}
          handleMajorChange2={handleMajorChange2}
          handleMajorChange3={handleMajorChange3}
          handleMajorChange4={handleMajorChange4}
          handleMajorChange5={handleMajorChange5}
          handleMajorChange6={handleMajorChange6}
          multipleAnalysis={multipleAnalysis}
          preferredSchool1={preferredSchool1}
          preferredSchool2={preferredSchool2}
          preferredSchool3={preferredSchool3}
          preferredSchool4={preferredSchool4}
          preferredSchool5={preferredSchool5}
          preferredSchool6={preferredSchool6}
          setPreferredSchool1={setPreferredSchool1}
          setPreferredSchool2={setPreferredSchool2}
          setPreferredSchool3={setPreferredSchool3}
          setPreferredSchool4={setPreferredSchool4}
          setPreferredSchool5={setPreferredSchool5}
          setPreferredSchool6={setPreferredSchool6}
          preferredMajor1={preferredMajor1}
          preferredMajor2={preferredMajor2}
          preferredMajor3={preferredMajor3}
          preferredMajor4={preferredMajor4}
          preferredMajor5={preferredMajor5}
          preferredMajor6={preferredMajor6}
          setPreferredMajor1={setPreferredMajor1}
          setPreferredMajor2={setPreferredMajor2}
          setPreferredMajor3={setPreferredMajor3}
          setPreferredMajor4={setPreferredMajor4}
          setPreferredMajor5={setPreferredMajor5}
          setPreferredMajor6={setPreferredMajor6}

          handleAnalysisButtonClick={handleAnalysisButtonClick}
        ></UniInput> : null
      } 
      


      {
        viewResult === true ?
          <FocusAnalysisResultPage
            receivedResultData={receivedResultData}

            
          ></FocusAnalysisResultPage> : null 
      }
    </div>
  )
}


// 검색창 스타일
let StyledSearchBox = styled.div`
background-color: #f0f0f0;
border: 1px solid #ccc;
padding: 10px;
`;





// 가고싶은 대학 입력 input창
function UniInput(props) {
  return (
    <div className='college-grid-container'>
      <div className='grid-nav'>희망하는 대학교 6곳을 등록하세요!</div>
      <div className='uni-search-1'>
        <div className='container '>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni1'
            type='text'
            value={props.searchUniversity1}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange1}
          ></input>
          {props.filterUniversity1?.length > 0 && (
          // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity1?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity1.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity1(uni.name);
                    props.setFilterUniversity1([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity1})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity1.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}
          <label for="exampleDataList" className="form-label">학과</label>
          <input 
            className="form-control" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="가고싶은 학과를 입력하세요"
            value={props.selectMajor1}
            onChange={props.handleMajorChange1}/>
          <datalist id="datalistOptions">
            <option value="국문학과"/>
            <option value="컴퓨터공학과"/>
            <option value="수학과"/>
            <option value="화학과"/>
            <option value="미술학과"/>
          </datalist>

        </div>
      </div>


      <div className='uni-search-2'>
        <div className='container'>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni2'
            type='text'
            value={props.searchUniversity2}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange2}
          ></input>
          {props.filterUniversity2?.length > 0 && (
          // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity2?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity2.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity2(uni.name);
                    props.setFilterUniversity2([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity2})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity2.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}
          <label for="exampleDataList" class="form-label">학과</label>
          <input 
            className="form-control"
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Type to search..."
            value={props.selectMajor2}
            onChange={props.handleMajorChange2}/>
          <datalist id="datalistOptions">
            <option value="국문학과"/>
            <option value="컴퓨터공학과"/>
            <option value="수학과"/>
            <option value="화학과"/>
            <option value="미술학과"/>
          </datalist>
        </div>

      </div>

      <div className='uni-search-3'>
        <div className='container'>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni3'
            type='text'
            value={props.searchUniversity3}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange3}
          ></input>
          {props.filterUniversity3?.length > 0 && (
          // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity3?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity3.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity3(uni.name);
                    props.setFilterUniversity3([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity3})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity3.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}
          <label for="exampleDataList" class="form-label">학과</label>
          <input 
            class="form-control" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Type to search..."
            value={props.selectMajor3}
            onChange={props.handleMajorChange3}/>
          <datalist id="datalistOptions">
            <option value="국문학과"/>
            <option value="컴퓨터공학과"/>
            <option value="수학과"/>
            <option value="화학과"/>
            <option value="미술학과"/>
          </datalist>
        </div>

      </div>
      <div className='uni-search-4'>
        <div className='container'>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni4'
            type='text'
            value={props.searchUniversity4}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange4}
          ></input>
          {props.filterUniversity4?.length > 0 && (
            // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity4?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity4.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity4(uni.name);
                    props.setFilterUniversity4([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity4})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity4.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}
          <label for="exampleDataList" class="form-label">학과</label>
          <input 
            class="form-control" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Type to search..."
            value={props.selectMajor4}
            onChange={props.handleMajorChange4}/>
          <datalist id="datalistOptions">
            <option value="국문학과"/>
            <option value="컴퓨터공학과"/>
            <option value="수학과"/>
            <option value="화학과"/>
            <option value="미술학과"/>
          </datalist>
        </div>
      </div>
      <div className='uni-search-5'>
        <div className='container'>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni5'
            type='text'
            value={props.searchUniversity5}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange5}
          ></input>
          {props.filterUniversity5?.length > 0 && (
            // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity5?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity5.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity5(uni.name);
                    props.setFilterUniversity5([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity5})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity5.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}

          <label for="exampleDataList" class="form-label">학과</label>
          <input 
            class="form-control" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Type to search..."
            value={props.selectMajor5}
            onChange={props.handleMajorChange5}/>
          <datalist id="datalistOptions">
            <option value="국문학과"/>
            <option value="컴퓨터공학과"/>
            <option value="수학과"/>
            <option value="화학과"/>
            <option value="미술학과"/>
          </datalist>
        </div>
      </div>

      <div className='uni-search-6'>
        <div className='container'>
          <label for="exampleDataList" class="form-label">학교</label>
          <input
            id='uni6'
            type='text'
            value={props.searchUniversity6}
            placeholder='가고싶은 대학을 입력하세요'
            onChange={props.handleUniversitySearchChange6}
          ></input>
          {props.filterUniversity6?.length > 0 && (
            // 검색창 박스
            <StyledSearchBox>
              {props.filterUniversity6?.map((uni) => (
                // 검색창 데이터들
                <div key={uni.id} mt='10px'>
                  {uni.name.toLowerCase().includes(props.searchUniversity6.toLowerCase()) ? (
                  <span onClick={()=>{
                    props.setSearchUniversity6(uni.name);
                    props.setFilterUniversity6([]);}}>
                    {uni.name
                      .split(new RegExp(`(${props.searchUniversity6})`, 'ig'))
                      .map((part) =>
                        part.toLowerCase() === props.searchUniversity6.toLowerCase() ? (
                          <span key={part} style={{ color: 'orange' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                  ) : (
                    uni.name
                  )}
                </div>
              ))}
            </StyledSearchBox>
          )}
          <label for="exampleDataList" class="form-label">학과</label>
          <input 
            class="form-control" 
            list="datalistOptions" 
            id="exampleDataList" 
            placeholder="Type to search..."
            value={props.selectMajor6}
            onChange={props.handleMajorChange6}/>
          <datalist id="datalistOptions">
            <option value="San Francisco"/>
            <option value="New York"/>
            <option value="Seattle"/>
            <option value="Los Angeles"/>
            <option value="Chicago"/>
          </datalist>
        </div>
      </div>


      <button 
        type="submit" 
        className="focus-btn"
        onClick={props.handleAnalysisButtonClick}
        >분석 시작</button>

    </div>
  )
}

export default FocusAnalysisPage;