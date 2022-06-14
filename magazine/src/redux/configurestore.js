import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./module/boardSlice";

const store = configureStore({
  reducer: boardReducer
});

export default store;
