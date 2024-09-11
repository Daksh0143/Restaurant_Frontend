const { useAxios } = require("@/Axios/axios")

const registerUrl="user/register"
const loginUrl="user/login"

const axios=useAxios()


export const registerUserAsync=async(request)=>{
    try {
        const response=await axios.post(registerUrl,request);
        console.log("response",response)
        return response 
    } catch (error) {
        console.log("Error",error)
        return error
    }
}


export const loginUserAsync=async(request)=>{
    try {
        const response=await axios.post(loginUrl,request)
        return response
    } catch (error) {
        return error?.response?.data?.message
    }
}