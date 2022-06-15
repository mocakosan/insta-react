import React from 'react';
import BoardNav from './BoardNav';
import { Link,useNavigate } from 'react-router-dom';
import "../css/BoardWrite.css";
import {useDispatch,  useSelector } from 'react-redux';
import {createBoard} from "../redux/module/boardSlice";
import axios from 'axios';

function BoardWrite(props) {
   
  const dispatch = useDispatch();
  //const [변수명] = useSelector(state => state.[리덕스 state]);
  

 
  
  const user_id_ref = React.useRef(null);
  const img_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  
  let navigate = useNavigate();
  const onSave = async () => {
    const board_data = {
      user_id: user_id_ref.current.value,
      img: img_ref.current.value,
      content: content_ref.current.value,
    };

    // 콘솔로 확인해요!
    console.log(board_data);

    // 인풋은 지워줍시다! :)
    user_id_ref.current.value = "";
    img_ref.current.value = "";
    content_ref.current.value = "";

    const res = axios.post("http://3.35.233.99/api/board", board_data);
    dispatch(createBoard({ board_data: board_data }));
    navigate(-1);
  };

  
  return (
    <div className="bw">
      <BoardNav />
      <h1>게시물 작성</h1>
      <input type="file" accept="image/*" ref={img_ref}/>
      <input type="text" placeholder='username' ref={user_id_ref}/>

      <h1>레이아웃 선택</h1>
      <input type="radio" name='layout' id='right' value='right'>
        <label for='right'>오른쪽에 이미지 왼쪽에 텍스트</label>
      </input>
      
      <p>게시글 내용</p>
      <textarea ref={content_ref}></textarea>
      
      
      <Link to='/'>
      <button onClick={onSave}>추가하기</button>
      </Link>
    </div>
  );
}

export default BoardWrite;