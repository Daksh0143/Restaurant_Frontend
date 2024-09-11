import {useAxios} from "@/Axios/axios"

const addFood="food/addFood"

const axios=useAxios()

export const addFoodAsync=async(request)=>{
    try {
        const response =await axios.post(addFood,request)
        console.log("Response",response)
        return response
    } catch (error) {
        console.log("Error",error)
        return error
    }
}