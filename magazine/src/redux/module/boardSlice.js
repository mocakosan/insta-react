import {createSlice} from "@reduxjs/toolkit"; 

const boardSlice =  createSlice({
  name:"board_list",
  initialState: {
      
  },
  reducers: {
    createBoard: (state,action) => {
      state.board = [...state.board,action.payload];
    },
    loadBoard: (state, action) => {
      return state
    }
  },

});

export const {loadBoard,createBoard} = boardSlice.actions;
export default boardSlice.reducers; 