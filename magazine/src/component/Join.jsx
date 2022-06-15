import React,{useRef,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import inta_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import '../css/Join.css';
import { useCallback } from 'react';
import axios from 'axios';
import {useDispatch,  useSelector } from 'react-redux';
import {createBoard} from "../redux/module/boardSlice";
import {useMutation} from "react-query";

function Join(props) {
  //이메일 확인
  const [email, setEmail] = useState('')
  //이메일 오류메시지 저장
  const [emailMessage, setEmailMessage] = useState('')
  //이메일 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  //비밀번호 확인
  const [password,setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  //비밀번호 오류메시지 저장
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  // 비밀번호 유효성 검사
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const dispatch = useDispatch();
  const onChangeEmail = useCallback((e) => {
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    // 형식에 맞는 경우 true 리턴
    const emailCurrent = e.target.value
    setEmail(emailCurrent)
    if(!emailRegex.test(emailCurrent)){
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 : )')
      setIsEmail(true)
    }
  },[])
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 : )')
      setIsPassword(true)
    }
  }, [])
    const onChangePasswordConfirm = useCallback((e)=> {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if(password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )
  let navigate = useNavigate();
  const nickname_ref = useRef();
  const email_ref = useRef();
  const password_ref = useRef();

  const boardMutation = useMutation(
    (board) => axios.post("http://3.35.233.99/api/register", board), {
      onSuccess: () => {
        
      }
    });
  

  return (
    <div className='join'>
      <div className='join_main'>
                
        <img src={inta_image} width="454px" />
      
      
        <div className='join_right'>
          <img className='join_logo' src={insta_logo}/>
          <div className='join_signup'>
          <input className='join_text' ref={email_ref} text="이메일" type="email"  onChange={onChangeEmail} placeholder='이메일을 입력해주세요'/>
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}

          <input className='join_text' ref={nickname_ref} type="text" placeholder='닉네임을 입력하세요'/>

          <input
            className='join_text'
            ref={password_ref}
            onChange={onChangePassword}
            
            title="비밀번호"
            type='password'
            
            placeholder='비밀번호를 입력하세요'
          />
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}

            <input
            className='join_text'
            onChange={onChangePasswordConfirm}
            
            type="password"
            
            placeholder='비밀번호를 다시 입력하세요'
          />
          {passwordConfirm.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
          )}
            <Link to="/">
            <button className='join_bt'
            type="submit"
            onClick={()=>{
              const board = {
                age: nickname_ref.current.value,
                email: email_ref.current.value,
                password: password_ref.current.value,
              }
              console.log(board);
              // mutation 실행
             // peopleMutation.mutate(board)
            }}
            disabled={!( isEmail && isPassword )}
            >Join</button>
            </Link>
          </div>
          
        </div>
        </div>
      </div>   
  );
}

export default Join;