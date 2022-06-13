import React from 'react';
import "../css/BoardNav.css";
import insta_logo from '../images/logoinsta.png';
import love from '../images/love.svg';
import { Link } from 'react-router-dom';

function BoardNav(props) {
  return (
    <div className='bn'>
      <div className='bn_bar'>
        <Link to='/'>
        <img className='bn_img' src={insta_logo} width="105px"></img>
        </Link>
        <Link to='/BoardAlarm'>
        <img className='bn_hart' src={love} alt="" />
        </Link>
        <Link to="/Join">
          <button className='bt_join'>회원가입</button>
        </Link>
        <Link to="/Login">
          <button className='bt_lg'>로그인</button>
        </Link>
        <Link to="/">
          <button className='bt_lo'>로그아웃</button>
        </Link>
      </div>
    </div>
  );
}

export default BoardNav;