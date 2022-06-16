import React,{useRef} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import inta_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import '../css/LoginPage.css';
import axios from 'axios';
import {useMutation} from "react-query";
import { tokenState } from '../recoil/store';
import {useSetRecoilState,useRecoilValue} from "recoil";

function Login(props) {
  const loginToken = useSetRecoilState(tokenState)
   const tokenUse = useRecoilValue(tokenState)
  let navigate = useNavigate();
  
  const email_ref = useRef();
  const password_ref = useRef();
  const boardMutation = useMutation(
    (data) => axios.post("http://3.35.233.99/api/login", data), {
      onSuccess: (token) => {
        console.log(token)
        loginToken(token.data)
        navigate('/');
      }
    });
  const onLogin = async () =>{
    const Login_data = {
      email:email_ref.current.value,
      password:password_ref.current.value,
    }
    boardMutation.mutate(Login_data);
    
  }
  return (
    <div className='lg'>
      <div className='lg_main'>
                
        <img src={inta_image} width="454px" />
      
      
        <div className='lg_right'>
          <img className='lg_logo' src={insta_logo}/>
          <div className='lg_signin'>
            <input className='lg_text' type="text" placeholder='이메일를 입력하세요' ref={email_ref}/>
            <input className='lg_text' type="password" placeholder='비밀번호를 입력하세요' ref={password_ref}/>
            
            <button className='lg_bt' onClick={onLogin}>Log in</button>
            
          </div>
          <div className='lg_signup'>
            Don't have an account? <Link to="/Join">Sign up</Link>
          </div>
        </div>
        </div>
      </div>   
  );
}

export default Login;