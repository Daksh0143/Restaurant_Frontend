import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./User/user.slice";
import foodSlice from "./Food/food.slice"



const rootReducer=combineReducers({
    User:userSlice,
    Food:foodSlice,

})


export default rootReducer