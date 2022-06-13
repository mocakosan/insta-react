import React from 'react';
import { Link } from 'react-router-dom';
import BoardNav from './BoardNav';import pp1 from '../images/pp1.png';
import post from '../images/post.jpg';
import love from '../images/love.svg';
import '../css/BoardDetail.css';

function BoardDetail(props) {
  return (
    <div className='post'>
      <BoardNav/>
      <div className='board'>
        {/* Header*/}
        <div className='b_head'>
          <img src={pp1}/>
          <span className='UN'>UserName</span> 
          <span className='time'>time</span>
          <Link to='/BoardUpdate'>
            <button>수정</button>
          </Link> 
        </div>
        {/* image */}
        
          <div className='b_img'>
            <img src={post} alt="" height="600px"/>
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
    </div>
    
  );
}

export default BoardDetail;