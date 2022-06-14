import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import inta_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import '../css/Join.css';


function Join(props) {
  const { Name, nickname, email, password, addlayoutress } = inputValue;
  const [inputValue, setInputValue] = useState({
    Name: '',
    nickname: '',
    email: '',
    password: '',
    layout: '',
  });
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };
  return (
    <div className='join'>
      <div className='join_main'>
                
        <img src={inta_image} width="454px" />
      
      
        <div className='join_right'>
          <img className='join_logo' src={insta_logo}/>
          <div className='join_signup'>
            <input className='join_text' placeholder='아이디를 입력하세요' onChange={handleInput}/>
            <input className='join_text'  placeholder='닉네임을 입력하세요' onChange={handleInput}/>
            <input className='join_text' placeholder='비밀번호를 입력하세요' onChange={handleInput}/>
            <input className='join_text'  placeholder='비밀번호를 다시 입력하세요' onChange={handleInput}/>
            <Link to="/">
            <button className='join_bt' onClick={handleInput}>Join</button>
            </Link>
          </div>
          
        </div>
        </div>
      </div>   
  );
}

export default Join;