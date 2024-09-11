const { createSlice } = require("@reduxjs/toolkit");
const { addFoodAction } = require("@/Redux/Food/food.middleware")

const initialState = {
    isLoading: false,
    isError: false,
    FoodData: []
}

const foodSlice = createSlice({
    name: "Food",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addFoodAction.fulfilled, (state, { payload }) => {
                state.isLoading=false,
                state.FoodData=payload
            })
            .addCase(addFoodAction.pending,(state,{payload})=>{
                state.isLoading=true,
                state.isError=false
            })
            .addCase(addFoodAction.rejected,(state,{payload})=>{
                state.isError=true,
                state.isLoading=false
            })
    }
})

export const foodSelector= (state)=>state.Food

export default foodSlice.reducer