import { React } from 'react';
import './mySpec.css';
import axios from 'axios';

function OneYear() {
    return (
        <div id='modalContainer'>
            <div id='modalContent'>
                <p>1학기</p>
                <p>2학기</p>
                <button id='modalSaveButton'>
                    <p onClick={() => {
                        // 성적 입력 완료시 post 요청후 페이지 새로고침
                        axios.post('url', {국어 : 100}).then(() => {
                            // 페이지 재렌더링
                        })
                        .catch(() => {
                            console.log('에러 발생');
                        })


                    }}>입력완료</p>
                </button>
            </div>

        </div>
        
    )
}

export default OneYear;