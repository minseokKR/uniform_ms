import { React, useState, useEffect } from 'react';
import cnu from './cnu.png';
import './focusAnalysisResultPage.css';



// "school": "전남대학교",
// "major": "컴퓨터공학과",
// "admissionProbability": "11",
// "danger": "6"
// - school : 학교
// - major : 학과
// - admissionProbability : 합격 확률
// - danger : 위험도




function FocusAnalysisResultPage(props) {

  // 리턴받은 결과 데이터
  let [returnData, setReturnData] = useState(props.receivedResultData);
  console.log('결과창에서 받은 리턴데이터',returnData)

  let school = returnData.school;
  let major = returnData.major;
  let admissionProbability = returnData.admissionProbability;
  let [danger, setDanger] = useState(returnData.danger);
  
  // 위험도에 따른 등급
  useEffect(() => {
    switch (parseInt(returnData.danger)) {
      case 1:
      case 2:
        setDanger('안정');
        break;
      case 3:
        setDanger('적정');
        break;
      case 4:
      case 5:
        setDanger('경고');
        break;
      case 6:
        setDanger('위험');
        break;

      default:
        setDanger('에러');
        break;
    }
  }, [returnData.danger]);
  
    return (

        <div className='college-grid-container'>
          <div className='grid-nav'>집중분석 결과</div>
          <div className='uni-search-1'>
            <div className='container '>
              <img className='uni-logo' src={cnu} alt=''></img>
              <label style={{ fontSize: '18px' }} for="exampleDataList" class="form-label">{school}</label>
              <label style={{ fontSize: '18px' }} for="exampleDataList" class="form-label">{major}</label>
              
              <div className="progress-bar">
                <div className="filler" style={{ width: `${admissionProbability}%` }}>
                  <span>{admissionProbability}%</span>
                </div>
              </div>
              <label for="exampleDataList" className="danger">{danger}</label>

              
            </div>
        </div>
  
  
        {/* <div className='uni-search-2'>
          <div className='container'>
            <label for="exampleDataList" class="form-label">학교</label>
            <label for="exampleDataList" class="form-label">학과</label>
            
          </div>
  
        </div>
  
        <div className='uni-search-3'>
          <div className='container'>
            <label for="exampleDataList" class="form-label">학교</label>
            <label for="exampleDataList" class="form-label">학과</label>
          </div>
  
        </div>

        <div className='uni-search-4'>
          <div className='container'>
            <label for="exampleDataList" class="form-label">학교</label>
            <label for="exampleDataList" class="form-label">학과</label>
          </div>
        </div>

        <div className='uni-search-5'>
          <div className='container'>
            <label for="exampleDataList" class="form-label">학교</label>
            <label for="exampleDataList" class="form-label">학과</label>
          </div>
        </div>
  
        <div className='uni-search-6'>
          <div className='container'>
            <label for="exampleDataList" class="form-label">학교</label>
            <label for="exampleDataList" class="form-label">학과</label>
          </div>
        </div>
  
   */}
      </div>
    )
}

export default FocusAnalysisResultPage;