const { createAsyncThunk } = require("@reduxjs/toolkit")
const {registerUserAsync,loginUserAsync} = require("./user.services")


export const registerUserAction=createAsyncThunk("/register/post",async(request,{rejectWithValue})=>{
    try {
        const response=await registerUserAsync(request);
        console.log("response",response)
        return response
    } catch (error) {
        console.log("Error",error)
        return rejectWithValue(error)
    }
})


export const loginUserAction=createAsyncThunk("login/user/post",async(request,{rejectWithValue})=>{
    try {
        const response=await loginUserAsync(request)
        return response.data
    } catch (error) {
        return rejectWithValue(error)   
    }
})

