import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import Board from './component/Board';
import BoardAlarm from './component/BoardAlarm';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';
import BoardUpdate from './component/BoardUpdate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/configurestore';
 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          
            <Routes>
              
              <Route path="/" element={<Board />} />
              <Route path='/Join' element={<Join />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/BoardWrite' element={<BoardWrite />} />
              <Route path='/BoardAlarm' element={<BoardAlarm />} />
              <Route path='/BoardDetail' element={<BoardDetail />} />
              <Route path='/BoardUpdate' element={<BoardUpdate />} />
            </Routes>
          
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
