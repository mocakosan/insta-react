import React from 'react';
import { Link } from 'react-router-dom';
import inta_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import '../css/LoginPage.css';

function Login(props) {
  return (
    <div className='lg'>
      <div className='lg_main'>
                
        <img src={inta_image} width="454px" />
      
      
        <div className='lg_right'>
          <img className='lg_logo' src={insta_logo}/>
          <div className='lg_signin'>
            <input className='lg_text' type="text" placeholder='아이디를 입력하세요'/>
            <input className='lg_text' type="password" placeholder='비밀번호를 입력하세요'/>
            <Link to="/Board">
            <button className='lg_bt'>Log in</button>
            </Link>
          </div>
          <div className='lg_signup'>
            Don't have an account? <Link to="/Join"><a>Sign up</a></Link>
          </div>
        </div>
        </div>
      </div>   
  );
}

export default Login;