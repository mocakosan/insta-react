import React,{useRef,useState} from 'react';
import BoardNav from './BoardNav';
import { useNavigate } from 'react-router-dom';
import "../css/BoardWrite.css";
import insta from '../images/insta.png';

//import {createBoard} from "../redux/module/boardSlice";
import {useMutation} from "react-query";
import { tokenState } from '../recoil/store';
import {useSetRecoilState,useRecoilValue} from "recoil";
import axios from 'axios';
import api from '../utils/api';




function WritingBoard(props) {
  const tokenUse = useRecoilValue(tokenState);

  const writeToken = useSetRecoilState(tokenState);

  
  const [layout,setlayout] = useState(0);
  let navigate = useNavigate();
  const [image, setImage] = useState({ image_file: "", preview_URL: "img/default_img.png", });
  
  
  const content_ref = useRef();
  const boardsMutation = useMutation(
    (data) => api.post("http://3.35.233.99/api/board", data), {
      onSuccess: (token) => {
        console.log(token);
        
        navigate('/');
      }
    });
  const onSave = async () => {

    console.log(layout);
    const formData = new FormData(); 
    formData.append("image", image.image_file); 
    formData.append( "layout",layout);
    formData.append( "content",content_ref.current.value );
    boardsMutation.mutate(formData)

  }



  return (
    <div className="bw">
      <BoardNav />
      <h1>게시물 작성</h1>
      <input type="file" accept="image/*"  onChange={(e)=>{
        e.preventDefault();
        const fileReader = new FileReader();
        if (e.target.files[0]) {
          fileReader.readAsDataURL(e.target.files[0]);
        }
        fileReader.onload = () => {
          setImage({
            image_file: e.target.files[0],
            preview_URL: fileReader.result,
          });
        };
      }}/>
      

      <h1>레이아웃 선택</h1>
      <div className='layout'>
        <label htmlFor='1'>
        <input id='1' type="radio" name='layout' value='1' onClick={(e)=>{
          setlayout(e.target.value);
        }}/>
          <div className='b_content1' >
                  <div className='b_img'>
                      <img src={insta} alt="" width="200px"/>
                  </div>
                  <div className='b_comment'>
                        <div className='comment'>
                          <span>내용</span>
                        </div>
                  </div>
          </div>
        </label>
        <label htmlFor='2'>
        <input id='2' type="radio" value='2' name='layout' onClick={(e)=>{
          setlayout(e.target.value);
        }}/>
          <div className='b_content2' >
                  <div className='b_img'>
                      <img src={insta} alt="" width="200px"/>
                  </div>
                  <div className='b_comment'>
                        <div className='comment'>
                          <span>내용</span>
                        </div>
                  </div>
          </div>
        </label>
        <label htmlFor='3'>
        <input id='3' type="radio" value='3' name='layout' onClick={(e)=>{
          setlayout(e.target.value);
        }}/>
          <div className='b_content3' >
                  <div className='b_img'>
                      <img src={insta} alt="" width="200px"/>
                  </div>
                  <div className='b_comment'>
                        <div className='comment'>
                          <span>내용</span>
                        </div>
                  </div>
          </div>
        </label>
      </div>
      
      
        
      <p>게시글 내용</p>
      <textarea ref={content_ref}></textarea>

      
      
      <button onClick={onSave}>추가하기</button>
      
    </div>
  );
}

export default WritingBoard;