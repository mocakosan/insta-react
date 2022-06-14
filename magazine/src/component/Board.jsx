import React,{Component,useCallback, useState } from 'react';
import BoardNav from './BoardNav';
import '../css/Board.css';
import pp1 from '../images/pp1.png';
import post from '../images/post.jpg';
import love from '../images/love.svg';
import up from '../images/up.png';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';
import {  useSelector,useDispatch } from 'react-redux';
import {setBoard} from "../redux/module/boardSlice";




function Board(props) {
  const [words, setWords] = useState(false);
  let history = useNavigate();
  const dispatch = useDispatch();
  const getWord = useCallback((a)=>dispatch(setBoard(a)),[dispatch])
  const getBoard = async () => {
    
    const res = await axios.get("http://13.209.99.119/board_list")  
    
    getWord(res.data);
    //dispatch(setBoard(res.data));
    
    
  };
  const board_list = useSelector((state) => state.board_list);
  console.log(board_list);
 


  React.useEffect(() => {
    if(board_list.length <= 1)
      getBoard();
    // 값이 1개 이하일때만 getdic초기화
    
  }, []); //의존성 배열
    
  
  return (

    <div className='post'>
      <BoardNav/>
      {board_list.map((e,idx) => {
          return (
      <div className='board' key={idx}>
        {/* Header*/}
        
        
            <div className='b_head' >
              <img src={pp1} />
              <span className='UN'>{e.user_id}</span>
              <span>{e.Board_id}</span>
              <span className='time'>{e.createdAt}</span>
              <Link to='/BoardUpdate'>
                <button>수정</button>
              </Link>
            </div>
            <div className='b_img'>
                <Link to='/BoardDetail'>
                  {e.img}
                </Link>
            </div>
            <div className='b_container'>
                {/* analytic */}
                <div className='b_an'>
                  <img className='like' src={love} alt="" />
                  <span>좋아요{e.like_id}</span>
                </div>
                <div className='b_comment'>
                  <div>{e.content}</div>
                </div>
            </div>
      </div>
      )
    })}
      <Link to="/BoardWrite">
      <button className='bt_up' type='button'>
        <img className='up' src={up} alt="" /> 
      </button>
      </Link>
    </div>
    
  );
}

export default Board;