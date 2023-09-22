import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter/slice';



export default configureStore(
{ reducer: {
counter: counterSlice
},

}
);
