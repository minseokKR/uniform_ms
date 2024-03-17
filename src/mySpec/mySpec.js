import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OneYear from './oneYear';
import TwoYear from './twoYear';
import ThreeYear from './threeYear';
import schoolData from './schools';
import axios from 'axios'


function MySpec() {

  let [oneModal, setOneModal] = useState(false);
  let [twoModal, setTwoModal] = useState(false);
  let [threeModal, setThreeModal] = useState(false);



  //===========================
  //학교 검색기능 
  //=========================== 

  // 학교 목록 배열
  let [schools, setSchool] = useState(schoolData.university);

  // 검색어 상태
  let [searchSchool, setSearchSchool] = useState('');

  // 검색어 입력시 호출 함수
  let handleSearch = (e) => {
    setSearchSchool(e.target.value);
    console.log(searchSchool);
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


  return(
    <form className='form-container' action method='post' id='specForm'>
      <legend>내 입시 정보</legend>
      

        <div className='school-search'>
          <label>학교 입력</label>
          <div className='col-md-8'>
            <input 
              id='search'
              type='text' 
              value={searchSchool}
              placeholder='학교입력'
              onChange={handleSearch}
            ></input>
          </div>

          <div className='school-list'>
            {newSchools.map((school) => (
              <div key={school.id}>
                <h4 onClick={()=>setSearchSchool(school.name)}>{school.name}</h4>
              </div>
            ))}
          </div>
        </div>






        <div className='form-group'>
          <label className='col-md-4 control-label'>학년별 성적</label>
          <div>
            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="1학년 성적 미입력"></input>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                onClick={ () => {setOneModal(!oneModal)} }>입력하기</button>
            </div>            
        
            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="2학년 성적 미입력"></input>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                onClick={ () => {setTwoModal(!twoModal)} }>입력하기</button>
            </div>             

            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="3학년 성적 미입력"></input>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                onClick={ () => {setThreeModal(!threeModal)} }>입력하기</button>
            </div> 
          </div>


        {
          oneModal === true ? <OneYear/> : null
        }
        {
          twoModal === true ? <TwoYear/> : null
        }
        {
          threeModal === true ? <ThreeYear/> : null
        }
        

      </div>
    </form>

    
    
  )

}

export default MySpec;

// 입시정보: 학교, 성적( 학년/ 학기/ 교과/ 과목/ 단위수/ 원점수/ 과목평균/ 표준편차/ 수강자수/ 석차등급)