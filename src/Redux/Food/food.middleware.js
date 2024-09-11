import {addFoodAsync} from "@/Redux/Food/food.services"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addFoodAction=createAsyncThunk("addFood/post",async(request,{rejectWithValue})=>{
    try {
        const response=await addFoodAsync(request)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})