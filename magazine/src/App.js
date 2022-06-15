import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import WritingBoard from './component/WritingBoard';

import Board from './component/Board';
import BoardDetail from './component/BoardDetail';
import BoardUpdate from './component/BoardUpdate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/configstore';
 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          
            <Routes>
              
              <Route path="/" element={<Board />} />
              <Route path='/Join' element={<Join />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/WritingBoard' element={<WritingBoard />} />
              
              <Route path='/BoardDetail' element={<BoardDetail />} />
              <Route path='/BoardUpdate' element={<BoardUpdate />} />
            </Routes>
          
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
