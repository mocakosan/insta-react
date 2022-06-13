import React from 'react';
import BoardNav from './BoardNav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "../css/BoardUpdate.css";

function BoardUpdate(props) {
  console.log(props)
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  const [loaded, setLoaded] = useState(false);

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    
    if(e.target.files[0]){
      setLoaded("loading")
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage(
        {
          image_file: e.target.files[0],
          preview_URL: fileReader.result
        }
      )
      setLoaded(true);
    }
    
  }

  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
    setLoaded(false);
  }

  const sendImageToServer = async () => {
    if(image.image_file){
      const formData = new FormData()
      formData.append('file', image.image_file);
      await axios.post('/api/image/upload', formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        preview_URL: "img/default_image.png",
      });
      setLoaded(false);
    }
    else{
      alert("사진을 등록하세요!")
    }
  }
  return (
    <div className="uploader-wrapper">
      <BoardNav />
      <h1>게시물 작성</h1>
      <p>게시글 내용</p>
      <textarea></textarea>
      <h3>미리 보기</h3>
      <input type="file" accept="image/*"
        onChange={saveImage}
        ref={refParam => inputRef = refParam}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        {loaded === false || loaded === true ? (
          <img src={image.preview_URL} />
        ) : (
          <div className="img-spinner" tip = "이미지 불러오는중"/>
        )}
      </div>

      <div className="upload-button">
        <button type="primary" onClick={() => inputRef.click()}>
          Preview
        </button>
        <button type="primary" onClick={deleteImage} danger>
          Delete
        </button>
        <Link to="/">
          <button type="ghost" onClick={sendImageToServer}>
            Upload
          </button>
        </Link>
      </div>

    </div>
  );
}

export default BoardUpdate;