import {atom, selector} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
// export const board = atom({
//   key:'board',
//   default:'',
//   // board_id:4,
//   // imageLink:"https://hanghae-bucket.s3.ap-northeast-2.amazonaws.com/mydir/d71dc94e-e431-486c-bf8f-9b9e033aa2789c19aa4b397f3563408dd414a7ef84f5.jpg",
//   // content:"front",
//   // user: "js",
//   // layout: "1",
//   // like:"1",
//   // createdAt:"2022-06-15T10:29:34.174356",
//   // updatedAt:"2022-06-15T10:29:34.174356",
// });

// export const getBoard = selector({
//   key: "getBoard",
//   get: ({get}) => {
//     return get(board);
//   }
  
export const tokenState = atom({
  key:"tokenState",
  default:'',
  effects_UNSTABLE:[persistAtom],
})

