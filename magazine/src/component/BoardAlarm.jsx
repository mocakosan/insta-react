import React from 'react';
import BoardNav from './BoardNav';
import { Link } from 'react-router-dom';
import pp2 from '../images/pp2.png';
import '../css/BoardAlarm.css';


function BoardAlarm(props) {
  return (
    <div className='ba'>
      <BoardNav />
      <div className='ba_container'>
        <img src={pp2} alt="" />
        <span>UserName</span>
        <span>님이 게시글에 좋아요를 남겼습니다</span>
      </div>
    </div>
  );
}

export default BoardAlarm;