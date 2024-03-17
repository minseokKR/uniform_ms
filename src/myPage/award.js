import { React } from 'react';
import './award.css';
import award1 from './awards.png';
import award2 from './award2.png';
function Award() {
    return (
        <div>
          <div className='award-container'>
            <img src={award1} alt=''></img>
            <img src={award2} alt=''></img>
          </div>
        </div>
    )
}

export default Award;