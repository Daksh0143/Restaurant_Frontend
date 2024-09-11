const { createSlice } = require("@reduxjs/toolkit")
const { registerUserAction } = require("./user.middleware")

const initialState = {
    isLoading: false,
    isError: false,
    userDetails: [],
}

const userSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAction.fulfilled, (state, { payload }) => {
                state.isLoading = false,
                    state.userDetails = payload
            })
            .addCase(registerUserAction.pending,(state,{payload})=>{
                state.isLoading=true,
                state.isError=false
            })
            .addCase(registerUserAction.rejected,(state,{payload})=>{
                state.isError=true
                state.isLoading=false
            })
    }
})


export const userSelector=(state)=>state.User

export default userSlice.reducer