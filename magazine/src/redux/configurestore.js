import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./module/boardSlice";

const store = configureStore({reducer:{
  reducer: {
    board: boardReducer
  }
}});

export default store;
