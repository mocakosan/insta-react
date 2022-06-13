import React from 'react';
import BoardNav from './BoardNav';
import '../css/Board.css';
import pp1 from '../images/pp1.png';
import post from '../images/post.jpg';
import love from '../images/love.svg';
import up from '../images/up.png';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';



function Board(props) {
  //const [변수명] = useSelector(state => state.[리덕스 state]);
  //const board = useSelector((state) =>state.board.list);
  
  
  
  
  
  return (
    <div className='post'>
      <BoardNav/>
      <div className='board'>
        {/* Header*/}
        
          return (
          <div className='b_head'>
            <img src={pp1}/>
            <span className='UN'>UserName</span> 
            <span className='time'>time</span>
            <Link to='/BoardUpdate'>
              <button>수정</button>
            </Link> 
          </div>
          {/* image*/}
          
            <div className='b_img'>
              <Link to='/BoardDetail'>
                <img src={post} alt="" height="600px"/>
              </Link>
            </div>
          
          <div className='b_container'>
            {/* analytic */}
            <div className='b_an'>
              <img className='like' src={love} alt="" />
              <span>좋아요</span>
            </div>
            <div className='b_comment'>
              <div>hello</div>
              <div>hello</div>
              
            </div>
            
          </div>
        
   
      </div>
      <Link to="/BoardWrite">
      <button className='bt_up' type='button'>
        <img className='up' src={up} alt="" /> 
      </button>
      </Link>
    </div>
    
  );
}

export default Board;