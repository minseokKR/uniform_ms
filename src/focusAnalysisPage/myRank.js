import { React, useEffect, useState } from 'react';


function Rank() {
    // 학기별 성적 저장 state
  let [rank1_1, setRank1_1] = useState();
  let [rank1_2, setRank1_2] = useState();
  let [rank2_1, setRank2_1] = useState();
  let [rank2_2, setRank2_2] = useState();
  let [rank3_1, setRank3_1] = useState();
  let [rank3_2, setRank3_2] = useState();
  
  useEffect(() => {
    let savedData = localStorage.getItem('1years1semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      // 각 과목 성적 등급 가져와서 평균 계산하기
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      // 등급 평균 계산
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank1_1(averageRank)
    } else {
      console.log('1-1 저장된 데이터가 없습니다.');
    }
  })

  useEffect(() => {
    let savedData = localStorage.getItem('1years2semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank1_2(averageRank)
    } else {
      console.log('1-2 저장된 데이터가 없습니다.');
    }
  })

  useEffect(() => {
    let savedData = localStorage.getItem('2years1semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank2_1(averageRank)
    } else {
      console.log('2-1 저장된 데이터가 없습니다.');
    }
  })

  useEffect(() => {
    let savedData = localStorage.getItem('2years2semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank2_2(averageRank)
    } else {
      console.log('2-2 저장된 데이터가 없습니다.');
    }
  })

  useEffect(() => {
    let savedData = localStorage.getItem('3years1semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank3_1(averageRank)
    } else {
      console.log('3-1 저장된 데이터가 없습니다.');
    }
  })

  useEffect(() => {
    let savedData = localStorage.getItem('3years2semester');
    if (savedData) {
      let parsedData = JSON.parse(savedData);
      let totalRank = 0;
      parsedData.forEach((item) => {
        totalRank += parseInt(item.rank)
      });
      let averageRank = ( totalRank / parsedData.length ).toFixed(2);
      setRank3_2(averageRank)
    } else {
      console.log('3-2 저장된 데이터가 없습니다.');
    }
  })

  // 등급표 모달
  let [modalOpen, setModalOpen] = useState(false);

  let toggleModal = () => {
    setModalOpen(!modalOpen);
  };


    return (
      <div>
      <button onClick={toggleModal}>내 등급 보기</button>
        {
          modalOpen ? 
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">학년학기</th>
                <th scope="col">등급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1-1</th>
                <td >{rank1_1}</td>
              </tr>
              <tr>
                <th scope="row">1-2</th>
                <td>{rank1_2}</td>
              </tr>
              <tr>
                <th scope="row">2-1</th>
                <td>{rank2_1}</td>
              </tr>
              <tr>
                <th scope="row">2-2</th>
                <td>{rank2_2}</td>
              </tr>
              <tr>
                <th scope="row">3-1</th>
                <td>{rank3_1}</td>
              </tr>
              <tr>
                <th scope="row">3-2</th>
                <td>{rank3_2}</td>
              </tr>
              <tr>
                <th scope="row">최종 등급</th>
                <td style={{color: 'red', fontWeight: 'bold'}}>{( (parseFloat(rank1_1) + parseFloat(rank1_2) + parseFloat(rank2_1) + parseFloat(rank2_2) + parseFloat(rank3_1) + parseFloat(rank3_2)) / 6 ).toFixed(2)}</td>
              </tr>
            </tbody>
        </table>
          : null
        }
        </div>
      )
}

export default Rank;