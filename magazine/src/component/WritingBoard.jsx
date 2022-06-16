import React from 'react';
import BoardNav from './BoardNav';
import { Link,useNavigate } from 'react-router-dom';
import "../css/BoardWrite.css";
import {useDispatch,  useSelector } from 'react-redux';
import {createBoard} from "../redux/module/boardSlice";
import {useMutation} from "react-query";
import { tokenState } from '../recoil/store';
import {useSetRecoilState,useRecoilValue} from "recoil";
import axios from 'axios';

function WritingBoard(props) {
  const tokenUse = useRecoilValue(tokenState)
  const dispatch = useDispatch();
  //const [변수명] = useSelector(state => state.[리덕스 state]);
  

 
  
  const layout_ref = React.useRef(null);
  const img_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  
  let navigate = useNavigate();
  const onSave = async () => {
    const board_data = {
      img: img_ref.current.value,
      content: content_ref.current.value,
      layout:layout_ref.current.value,
    };
    boardMutation.mutate(board_data);
  }
    const boardMutation = useMutation(
      (data) => axios.post("http://3.35.233.99/api/boards", data), {
        onSuccess: (token) => {
          console.log(token);
          tokenUse(token.data)
          navigate('/');
        }
      });
  
  return (
    <div className="bw">
      <BoardNav />
      <h1>게시물 작성</h1>
      <input type="file" accept="image/*" ref={img_ref}/>
      

      <h1>레이아웃 선택</h1>
      <input type="radio" name='layout' id='right' value='right'>
        <label for='right'>오른쪽에 이미지 왼쪽에 텍스트</label>
      </input>
      
      <p>게시글 내용</p>
      <textarea ref={content_ref}></textarea>
      
      
      
      <button onClick={onSave}>추가하기</button>
      
    </div>
  );
}

export default WritingBoard;