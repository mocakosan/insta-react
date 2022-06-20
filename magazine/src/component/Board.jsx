import React,{Component,useCallback, useState } from 'react';
import BoardNav from './BoardNav';
import '../css/Board.css';
import pp1 from '../images/pp1.png';
import post from '../images/post.jpg';
import love from '../images/love.svg';
import up from '../images/up.png';
import axios from "axios";
import { Link ,Navigate,useNavigate} from 'react-router-dom';
import {  useSelector,useDispatch } from 'react-redux';
//import {setBoard} from "../redux/module/boardSlice";
//import {getBoard} from "../recoil/store";
import {useRecoilState,useRecoilValue} from "recoil";
import {useQuery,useMutation,useQueryClient} from "react-query";
import {board,tokenState} from "../recoil/store";
import api from '../utils/api';
import { jwtUtils } from '../utils/JwtUtils';
import heart1 from '../images/heart1.png';
import heart from '../images/heart.png';
import { useEffect } from 'react';


function Board(props) {
//  // const [words, setWords] = useState(false);
//   let history = useNavigate();
//   const dispatch = useDispatch();
//   const getWord = useCallback((a)=>dispatch(setBoard(a)),[dispatch])
//   const getBoard = async () => {
    
//     const res = await axios.get("http://3.35.233.99/api/boards")  .then(e =>{
//       console.log(e);
//     })
    
//     getWord(res.data);
//     //dispatch(setBoard(res.data));
    
    
//   };
//   // const board_list = useSelector((state) => state.board_list);
//   // console.log(board_list);
 


  // React.useEffect(() => {
  //   if(board_list.length <= 1)
  //     getBoard();
  //   // 값이 1개 이하일때만 getdic초기화
    
  // }, []); //의존성 배열
  
  
  const board_query = useQuery(
    ["board_list"],
    () => axios.get("http://3.35.233.99/api/boards",),{
      onSuccess: (data) => {
        console.log("success", data);
        
      }
    });
    
    const boardHart= useMutation(
      
      (board_id) => api.get(`http://3.35.233.99/api/board/${board_id}/like`),{
        onSuccess: (board_id) => {
          
           
          queryClient.invalidateQueries("board_list")
        
      }});
  const boardId = useQuery()
  const board = useQuery()
  const boardidMutation = useMutation(
      (board_id) => api.delete(`http://3.35.233.99/api/board/${board_id}`), {
        onSuccess: (board_id) => {
          
          queryClient.invalidateQueries("board_list")
        }
      });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const onDelete = async (board_id) => {
    boardidMutation.mutate(board_id);
  }
  const onUpdate = async (e) => {
    
    navigate('/BoardUpdate',{state:{board:e}})
  }
  const tokenUse = useRecoilValue(tokenState);
  const [token, setToken] = useState(false);
  

  
  const [like,setLike] = useState(false)
  // useEffect((board_list) => { 
  //   if (jwtUtils.isAuth(tokenUse)) { 
  //     const userid = jwtUtils.getId(tokenUse); 
      
  //     setToken(true); 
  //     const isUserid =board_list.likes.filter((id) => {
  //        return id.user_email === userid; }); 
         
  //        setLike(isUserid && isUserid.length > 0 ? true : false); 
  //        } 
  //   else 
  //     setToken(false); 
  //   }, [tokenUse]);
  const onhart = async (board_id) => {
    console.log(board_id);
    boardHart.mutate(board_id);
    setLike(!like)
    
  }

       
  return (
    
    <div className='post'>
      <BoardNav/>
      {board_query.isSuccess ? (
        board_query.data.data.map((e, index) => (
         
      <div className='board' key={index}>
        {/* Header*/}
        
        
            <div className='b_head' >
              <img src={pp1} />
              <span className='UN'>{e.userNickname}</span>
              
              <span className='time'>{e.createdAt}</span>
              
                <button className='b_update' onClick={()=>onUpdate(e)}>수정</button>
              
                <button className='b_delete' onClick={()=>onDelete(e.board_id)}>삭제</button>
            </div>
            <div className='b_content' style={{flexDirection:e.layout===1?'column':e.layout===2?'row':'row-reverse'}}>
              <div className='b_img'>
                  <Link to='/BoardDetail'>
                    <img src={e.imageLink} alt="" width="600px"/>
                  </Link>
                  
              </div>
              <div className='b_comment'>
                    <div className='comment'>
                      <span>{e.content}</span>
                    </div>
                </div>
              
            </div>
            <div className='b_container'>
                  {/* analytic */}
                  <div className='b_an'>
                    <button  onClick={()=>onhart(e.board_id)}><img src={like?heart:heart1}/></button>
                    
                    <span style={{fontSize:"20px"}}>{e.likes.length}</span>
                  </div>
                  
              </div>
      </div>
        ))
      ):null}
        <Link to="/WritingBoard">
        <button className='bt_up' type='button'>
          <img className='up' src={up} alt="" /> 
        </button>
        </Link>
    </div>
    
  );
}

export default Board;