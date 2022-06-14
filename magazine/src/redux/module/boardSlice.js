import {createSlice} from "@reduxjs/toolkit"; 

const initialState= {
  board_list:[],
  board:[]
}

const boardSlice =  createSlice({
  name:"board",
  initialState,
  reducers: {
    createBoard: (state,action) => {
      state.board.push(action.payload.board_data);
    },
    loadBoard: (state,action) => {
      
    },
    setBoard: (state, action) => {
      // console.log(state);
       state.board = action.payload.board;
      
    },
  },

});

export const {loadBoard,createBoard,setBoard} = boardSlice.actions;
export default boardSlice.reducer; 