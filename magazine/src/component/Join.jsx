import React from 'react';
import { Link } from 'react-router-dom';
import inta_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import '../css/Join.css';

function Join(props) {
  return (
    <div className='join'>
      <div className='join_main'>
                
        <img src={inta_image} width="454px" />
      
      
        <div className='join_right'>
          <img className='join_logo' src={insta_logo}/>
          <div className='join_signup'>
            <input className='join_text' type="text" placeholder='아이디를 입력하세요'/>
            <input className='join_text' type="password" placeholder='닉네임을 입력하세요'/>
            <input className='join_text' type="text" placeholder='비밀번호를 입력하세요'/>
            <input className='join_text' type="text" placeholder='비밀번호를 다시 입력하세요'/>
            <Link to="/">
            <button className='join_bt'>Join</button>
            </Link>
          </div>
          
        </div>
        </div>
      </div>   
  );
}

export default Join;